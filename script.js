console.log("Script Starts again")

const backgroundColorBtn = document.getElementById('change-background-btn');

const DashboardColorBtn = document.getElementById('change-dashboard-btn');

const AnimChangeBtn = document.getElementById('start-stop');

const imageNameList = ['./Images/Drops.jpg', './Images/Flowers.jpg', './Images/Nature.jpg', './Images/Ocean.jpg', './Images/Road.jpg', './Images/Triangles.webp']
const colorNameList = ['red', 'blue', 'green', 'magenta', 'aqua', 'burlywood', 'cadetblue']

const sectionElement = document.getElementById('main-section')

const loginBox = document.getElementsByClassName('login-box')[0]

let firstFlag = 0
AnimChangeBtn.onclick = () => {
    if (firstFlag === 0) {
        sectionElement.style.animation = 'animateBg 5s linear infinite'
        AnimChangeBtn.innerText = "Stop Animation"
        firstFlag = 1
    }
    else {
        sectionElement.style.animation = 'none'
        AnimChangeBtn.innerText = "Start Animation"
        firstFlag = 0
    }
};


let indValue = 1;
let prevIndValue = 0;
backgroundColorBtn.onclick = () => {
    while (indValue === prevIndValue) {
        indValue = Math.round(Math.random() * 5);
    }
    sectionElement.style.background = `url(${imageNameList[indValue]})`;
    prevIndValue = indValue;
    return;
};


let secondFlag = 0;
DashboardColorBtn.onclick = () => {
    if (secondFlag === 0) {
        const indValue1 = Math.round(Math.random() * 6);
        const indValue2 = Math.round(Math.random() * 6);
        loginBox.style.cssText = `background: linear-gradient(${colorNameList[indValue1]}, ${colorNameList[indValue2]})`
        DashboardColorBtn.innerText = 'Change Dashboard to Blur'
        secondFlag = 1
    }
    else {
        loginBox.style.cssText = 'background: transparent'
        DashboardColorBtn.innerText = 'Change Dashbord to Color'
        secondFlag = 0
    }

};
