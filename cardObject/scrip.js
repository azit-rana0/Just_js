const developers = [
    {
        userName: "Azit Rana",
        img: "https://images.unsplash.com/photo-1647740356562-085610b8cbc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8",
        profession: "Frontend Developer",
        descriptions: "Specializes in creating responsive UI with React and modern CSS."
    },
    {
        userName: "Mia Codes",
        img: "https://media.istockphoto.com/id/479881656/photo/portrait-of-young-business-man.webp?a=1&s=612x612&w=0&k=20&c=h_GIkJHOJkI_4qH5_XJ379ZIMywMtiwoDoZz76wal2s=",
        profession: "Backend Engineer",
        descriptions: "Experienced in building scalable APIs with Node.js and Express."
    },
    {
        userName: "Samuel Builds",
        img: "https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        profession: "Full Stack Developer",
        descriptions: "Enjoys working across the stack using MERN technologies."
    },
    {
        userName: "Lina Tech",
        img: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
        profession: "Mobile App Developer",
        descriptions: "Creates performant apps using Flutter and Dart."
    },
    {
        userName: "Devon Js",
        img: "https://images.unsplash.com/photo-1711024538171-52be9c8369d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
        profession: "JavaScript Engineer",
        descriptions: "Passionate about modern JavaScript features and performance optimization."
    },
    {
        userName: "Kira Cloud",
        img: "https://images.unsplash.com/photo-1711024538171-52be9c8369d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
        profession: "Cloud Architect",
        descriptions: "Designs serverless and cloud-native solutions using AWS."
    },
    {
        userName: "Tariq Ai",
        img: "https://images.unsplash.com/photo-1705645930353-0e335311ef20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        profession: "AI/ML Engineer",
        descriptions: "Works on machine learning pipelines and NLP models."
    },
    {
        userName: "Nina Security",
        img: "https://images.unsplash.com/photo-1626913549671-5c07583ab6bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
        profession: "Cybersecurity Specialist",
        descriptions: "Secures systems through audits, penetration testing, and monitoring."
    },
    {
        userName: "Jason Ops",
        img: "https://images.unsplash.com/photo-1734830268394-6c4a1f165af1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
        profession: "DevOps Engineer",
        descriptions: "Automates CI/CD pipelines and infrastructure management."
    },
    {
        userName: "Olivia Uiux",
        img: "https://images.unsplash.com/photo-1633888631066-932f9e9688c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
        profession: "UI/UX Designer",
        descriptions: "Crafts intuitive user experiences and modern interface designs."
    }
];

let main = document.querySelector("main")

let sumObj = "";
developers.forEach((elem) => {
    sumObj = sumObj + `<div class="card">
            <img src="${elem.img}"
                alt="">
            <h1>${elem.userName}</h1>
            <h3>${elem.profession}</h3>
            <p>${elem.descriptions}</p>
        </div>`;
});
main.innerHTML = sumObj