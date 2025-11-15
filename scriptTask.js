let colorBox = document.querySelector("#colorBox");
let changeBtn = document.querySelector("#changeBtn");

changeBtn.addEventListener("click", function () {
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    colorBox.style.backgroundColor = `rgb(${c1} ${c2} ${c3})`;
    changeBtn.style.border = `5px solid rgb(${c1} ${c2} ${c3})`;
});

let userName = document.querySelector("#name");
let changeNameBtn = document.querySelector("#changeName");
let nameArr = ["Koshalaya", "Azit", "Rana", "Ritesh", "Ajitt", "Ranjeet", "Sanjeet", "Sugandh", "Ritik", "Roshan", "Rahul", "Divanshu", "Nisha", "Komal", "Bindiya", "Laxmi", "Riya", "Aryan", "Nanshi", "Aarushi", "Sunita", "Arun", "Rohan", "Parmeshwar", "Ashok", "Chhotelal", "Ravi", "Khiriya", "Parwati", "Rekha", "Sarita", "Rupa"];
changeNameBtn.addEventListener("click", function () {
    let names = Math.floor(Math.random() * nameArr.length);
    console.log(nameArr[names])
    userName.innerText = nameArr[names]
})


const iplTeams = [
    {
        team: "CSK",
        primaryColor: "yellow",
        secondaryColor: "blue",
        fullName: "Chennai Super Kings",
        trophies: 5,
        captain: "Ruturaj Gaikwad"
    },
    {
        team: "MI",
        primaryColor: "blue",
        secondaryColor: "gold",
        fullName: "Mumbai Indians",
        trophies: 5,
        captain: "Hardik Pandya"
    },
    {
        team: "KKR",
        primaryColor: "purple",
        secondaryColor: "gold",
        fullName: "Kolkata Knight Riders",
        trophies: 3,
        captain: "Ajinkya Rahane"
    },
    {
        team: "GT",
        primaryColor: "navy",
        secondaryColor: "gold",
        fullName: "Gujarat Titans",
        trophies: 1,
        captain: "Shubman Gill"
    },
    {
        team: "RR",
        primaryColor: "pink",
        secondaryColor: "blue",
        fullName: "Rajasthan Royals",
        trophies: 1,
        captain: "Sanju Samson"
    },
    {
        team: "SRH",
        primaryColor: "orange",
        secondaryColor: "black",
        fullName: "Sunrisers Hyderabad",
        trophies: 1,
        captain: "Pat Cummins"
    },
    {
        team: "RCB",
        primaryColor: "red",
        secondaryColor: "black",
        fullName: "Royal Challengers Bengaluru",
        trophies: 1,
        captain: "Rajat Patidar"
    },
    {
        team: "DC",
        primaryColor: "blue",
        secondaryColor: "red",
        fullName: "Delhi Capitals",
        trophies: 0,
        captain: "Axar Patel"
    },
    {
        team: "LSG",
        primaryColor: "lightblue",
        secondaryColor: "darkblue",
        fullName: "Lucknow Super Giants",
        trophies: 0,
        captain: "Rishabh Pant"
    },
    {
        team: "PBKS",
        primaryColor: "red",
        secondaryColor: "gold",
        fullName: "Punjab Kings",
        trophies: 0,
        captain: "Shreyas Iyer"
    }
];

let iplteamBox = document.querySelector("#box3");
let secondaryColorBox = document.querySelector(".secondaryColor");
let teamInfoBox = document.querySelector("#teamInfo");
let team = document.querySelector("#team");
let fullName = document.querySelector("#fullName");
let primaryColor = document.querySelector("#primaryColor");
let secondaryColor = document.querySelector("#secondaryColor");
let trophies = document.querySelector("#trophies");
let captain = document.querySelector("#captain");
let infoBtn = document.querySelector("#infoBtn");

infoBtn.addEventListener("click", function () {
    let teamDetails = iplTeams[Math.floor(Math.random() * iplTeams.length)];
    team.innerText = teamDetails.team;
    fullName.innerText = teamDetails.fullName;
    primaryColor.innerText = teamDetails.primaryColor;
    secondaryColor.innerText = teamDetails.secondaryColor;
    trophies.innerText = teamDetails.trophies;
    captain.innerText = teamDetails.captain;
    iplteamBox.style.backgroundColor = teamDetails.primaryColor;
    secondaryColorBox.style.backgroundColor = teamDetails.secondaryColor;
})

