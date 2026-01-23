// Global variables
const canvas = document.getElementById('canvas');
let elements = [];
let selectedId = null;
let nextId = 1;
let isDragging = false;
let dragStartX = 0, dragStartY = 0, dragElemData = null;
let isResizing = false;
let resizeHandle = '', resizeStartX = 0, resizeStartY = 0, resizeStartWidth = 0, resizeStartHeight = 0;

// Button event listeners
document.getElementById('add-rectangle').addEventListener('click', () => addElement('rectangle'));
document.getElementById('add-text').addEventListener('click', () => addElement('text'));
document.getElementById('clear-all').addEventListener('click', clearAll);
document.getElementById('save-design').addEventListener('click', saveDesign);
document.getElementById('export-json').addEventListener('click', exportJSON);
document.getElementById('export-html').addEventListener('click', exportHTML);

function addElement(type) {
    const id = nextId++;
    const x = 100 + Math.random() * 100;
    const y = 100 + Math.random() * 100;
    
    const elementData = {
        id, type, x, y,
        width: type === 'rectangle' ? 250 : 250,
        height: type === 'rectangle' ? 150 : 40,
        color: '#f1f1f1',
        text: type === 'rectangle' ? '' : 'Click to edit',
        rotate: 0
    };

    const elem = document.createElement('div');
    elem.className = `element ${type}`;
    elem.dataset.id = id;
    elem.style.left = elementData.x + 'px';
    elem.style.top = elementData.y + 'px';
    elem.style.width = elementData.width + 'px';
    elem.style.height = elementData.height + 'px';

    if (type === 'rectangle') {
        elem.style.backgroundColor = elementData.color;
    } else {
        elem.innerText = elementData.text;
    }

    setupElementEvents(elem);
    canvas.appendChild(elem);
    elements.push(elementData);
    updateLayers();
}

function setupElementEvents(elem) {
    elem.addEventListener('mousedown', startDrag);
    elem.addEventListener('click', (e) => selectElement(e, elem));
}

function selectElement(e, elem) {
    if (isDragging || isResizing) return;
    e.stopPropagation();
    deselectAll();
    selectedId = parseInt(elem.dataset.id);
    elem.classList.add('selected');
    createResizeHandles(elem);
    showProperties(selectedId);
}

function deselectAll() {
    document.querySelectorAll('.selected').forEach(el => {
        el.classList.remove('selected');
        el.querySelectorAll('.resize-handle').forEach(h => h.remove());
    });
    selectedId = null;
    document.getElementById('properties').style.display = 'none';
}

function createResizeHandles(elem) {
    ['nw', 'ne', 'sw', 'se'].forEach(dir => {
        const handle = document.createElement('div');
        handle.className = `resize-handle resize-${dir}`;
        handle.addEventListener('mousedown', (e) => startResize(e, elem));
        elem.appendChild(handle);
        handle.style.display = 'block';
    });
}

function startDrag(e) {
    if (e.target.classList.contains('resize-handle')) return;
    e.stopPropagation();
    const id = parseInt(e.currentTarget.dataset.id);
    selectElement(e, e.currentTarget);

    isDragging = true;
    dragElemData = elements.find(el => el.id === id);
    dragStartX = e.clientX - dragElemData.x;
    dragStartY = e.clientY - dragElemData.y;
}

function startResize(e, elem) {
    e.stopPropagation();
    isResizing = true;
    resizeHandle = e.target.className.split(' ')[1];
    const id = parseInt(elem.dataset.id);
    const elData = elements.find(el => el.id === id);
    resizeStartX = e.clientX;
    resizeStartY = e.clientY;
    resizeStartWidth = elData.width;
    resizeStartHeight = elData.height;
}

canvas.addEventListener('mousemove', (e) => {
    if (isDragging && dragElemData) {
        const newX = e.clientX - dragStartX;
        const newY = e.clientY - dragStartY;
        dragElemData.x = Math.max(0, Math.min(canvas.offsetWidth - dragElemData.width, newX));
        dragElemData.y = Math.max(0, Math.min(canvas.offsetHeight - dragElemData.height, newY));

        const domEl = document.querySelector(`[data-id="${dragElemData.id}"]`);
        domEl.style.left = dragElemData.x + 'px';
        domEl.style.top = dragElemData.y + 'px';
    }

    if (isResizing && selectedId) {
        resizeElement(e);
    }
});

function resizeElement(e) {
    const elData = elements.find(el => el.id === selectedId);
    const domEl = document.querySelector(`[data-id="${selectedId}"]`);

    let deltaX = e.clientX - resizeStartX;
    let deltaY = e.clientY - resizeStartY;

    if (resizeHandle.includes('e')) elData.width = Math.max(20, resizeStartWidth + deltaX);
    if (resizeHandle.includes('s')) elData.height = Math.max(20, resizeStartHeight + deltaY);
    if (resizeHandle.includes('w')) {
        elData.width = Math.max(20, resizeStartWidth - deltaX);
        elData.x += deltaX;
    }
    if (resizeHandle.includes('n')) {
        elData.height = Math.max(20, resizeStartHeight - deltaY);
        elData.y += deltaY;
    }

    elData.x = Math.max(0, Math.min(canvas.offsetWidth - elData.width, elData.x));
    elData.y = Math.max(0, Math.min(canvas.offsetHeight - elData.height, elData.y));

    domEl.style.left = elData.x + 'px';
    domEl.style.top = elData.y + 'px';
    domEl.style.width = elData.width + 'px';
    domEl.style.height = elData.height + 'px';
}

canvas.addEventListener('mouseup', () => {
    isDragging = false;
    isResizing = false;
    dragElemData = null;
});

function showProperties(id) {
    const elData = elements.find(e => e.id === id);
    if (!elData) return;

    document.getElementById('prop-x').value = Math.round(elData.x);
    document.getElementById('prop-y').value = Math.round(elData.y);
    document.getElementById('prop-width').value = elData.width;
    document.getElementById('prop-height').value = elData.height;
    document.getElementById('prop-rotate').value = elData.rotate;
    document.getElementById('prop-color').value = elData.color;
    document.getElementById('prop-text').value = elData.text;
    document.getElementById('properties').style.display = 'block';

    ['x', 'y', 'width', 'height', 'rotate'].forEach(prop => {
        document.getElementById(`prop-${prop}`).oninput = () => updateProp(prop);
    });
    document.getElementById('prop-color').onchange = () => updateProp('color');
    document.getElementById('prop-text').oninput = () => updateProp('text');
}

function updateProp(prop) {
    if (!selectedId) return;
    const elData = elements.find(e => e.id === selectedId);
    const domEl = document.querySelector(`[data-id="${selectedId}"]`);

    const value = document.getElementById(`prop-${prop}`).value;

    if (prop === 'x') elData.x = Math.max(0, Math.min(canvas.offsetWidth - elData.width, parseInt(value)));
    if (prop === 'y') elData.y = Math.max(0, Math.min(canvas.offsetHeight - elData.height, parseInt(value)));
    if (prop === 'width') elData.width = Math.max(20, parseInt(value));
    if (prop === 'height') elData.height = Math.max(20, parseInt(value));
    if (prop === 'rotate') elData.rotate = parseInt(value);
    if (prop === 'color') elData.color = value;
    if (prop === 'text') elData.text = value;

    domEl.style.left = elData.x + 'px';
    domEl.style.top = elData.y + 'px';
    domEl.style.width = elData.width + 'px';
    domEl.style.height = elData.height + 'px';
    if (elData.type === 'rectangle') domEl.style.backgroundColor = elData.color;
    domEl.innerText = elData.text;
    domEl.style.transform = `rotate(${elData.rotate}deg)`;
}

function updateLayers() {
    const list = document.getElementById('layers-list');
    document.getElementById('layer-count').textContent = elements.length;
    list.innerHTML = '';

    elements.forEach((el) => {
        const item = document.createElement('div');
        item.className = `layer-item ${selectedId === el.id ? 'selected' : ''}`;
        item.innerHTML = `
            <span>${el.type.toUpperCase()}-${el.id} 
                <small style="color:#666">(${Math.round(el.x)},${Math.round(el.y)})</small>
            </span>
        `;
        item.onclick = () => selectById(el.id);
        list.appendChild(item);
    });
}

function selectById(id) {
    deselectAll();
    const elem = document.querySelector(`[data-id="${id}"]`);
    if (elem) {
        elem.classList.add('selected');
        createResizeHandles(elem);
        selectedId = id;
        showProperties(id);
    }
}

function saveDesign() {
    localStorage.setItem('figmaDesign', JSON.stringify(elements));
    localStorage.setItem('nextId', nextId);
    alert('✅ Design saved!');
}

function clearAll() {
    if (confirm('Delete all elements?')) {
        elements = [];
        nextId = 1;
        canvas.innerHTML = '';
        deselectAll();
        updateLayers();
    }
}

function exportJSON() {
    const dataStr = JSON.stringify(elements, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'design.json';
    a.click();
    URL.revokeObjectURL(url);
}

function exportHTML() {
    let html = `<!DOCTYPE html><html><head><style>body{margin:0;padding:20px;background:#f5f5f5;font-family:sans-serif}</style></head><body>`;
    elements.forEach(el => {
        html += `<div style="position:absolute;left:${el.x}px;top:${el.y}px;width:${el.width}px;height:${el.height}px;background:${el.color};border:2px solid #333;border-radius:4px;transform:rotate(${el.rotate}deg);display:flex;align-items:center;justify-content:center;color:white;font-weight:bold">${el.text}</div>`;
    });
    html += '</body></html>';
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'design.html';
    a.click();
    URL.revokeObjectURL(url);
}

canvas.addEventListener('click', (e) => {
    if (!e.target.classList.contains('element') && !e.target.classList.contains('resize-handle')) {
        deselectAll();
    }
});

document.addEventListener('keydown', (e) => {
    if (!selectedId || e.target.tagName === 'INPUT') return;
    const elData = elements.find(el => el.id === selectedId);
    const step = 5;

    if (e.key === 'Delete' || e.key === 'Backspace') {
        elements = elements.filter(el => el.id !== selectedId);
        canvas.innerHTML = '';
        elements.forEach(data => {
            const elem = document.createElement('div');
            elem.className = `element ${data.type}`;
            elem.dataset.id = data.id;
            elem.style.left = data.x + 'px';
            elem.style.top = data.y + 'px';
            elem.style.width = data.width + 'px';
            elem.style.height = data.height + 'px';
            if (data.type === 'rectangle') elem.style.backgroundColor = data.color;
            elem.innerText = data.text;
            setupElementEvents(elem);
            canvas.appendChild(elem);
        });
        deselectAll();
        updateLayers();
        e.preventDefault();
    }
});

window.addEventListener('load', () => {
    const saved = localStorage.getItem('figmaDesign');
    if (saved) {
        elements = JSON.parse(saved);
        nextId = parseInt(localStorage.getItem('nextId')) || 1;
        elements.forEach(data => {
            const elem = document.createElement('div');
            elem.className = `element ${data.type}`;
            elem.dataset.id = data.id;
            elem.style.left = data.x + 'px';
            elem.style.top = data.y + 'px';
            elem.style.width = data.width + 'px';
            elem.style.height = data.height + 'px';
            if (data.type === 'rectangle') elem.style.backgroundColor = data.color;
            elem.innerText = data.text;
            setupElementEvents(elem);
            canvas.appendChild(elem);
        });
        updateLayers();
    }
});
