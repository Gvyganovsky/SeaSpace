const projectTitle = document.getElementById('project-title');
const projectText = document.getElementById('project-text');
const projectOne = document.getElementById('project-one');
const projectTwo = document.getElementById('project-two');
const projectThree = document.getElementById('project-three');
const projectFour = document.getElementById('project-four');

const projectTitles = [
    "Морской Вихрь",
    "Неустрашимый",
    "Неуязвимый",
];

const projectTexts = [
    "Авианосец Морской Вихрь представляет собой высокотехнологичное судно нового поколения. С его улучшенными характеристиками и продвинутой системой вооружений, он способен эффективно выполнять широкий спектр задач.",
    "Эсминец Неустрашимый является компактным и маневренным военным судном, способным выполнять различные задачи в составе флота. Он сочетает в себе высокую скорость, мощное вооружение и передовые системы обнаружения и защиты.",
    "Крейсер Неуязвимый является мощным боевым судном, предназначенным для выполнения различных задач в составе флота. С его впечатляющими боевыми возможностями и передовыми системами вооружения, он способен эффективно выполнять миссии как в мирное время, так и в периоды конфликтов.",
];

const projectOnes = [130000, 100000, 150000];
const projectTwos = [3.3, 2.5, 2.8];
const projectThrees = [15, 10, 20];
const projectFours = [41, 38, 45];

const projectContent = document.querySelector('.project-content');

const projectBackgroundImages = [
    "../assets/fleet/av2.jpg",
    "../assets/fleet/es1.jpg",
    "../assets/fleet/kr1.jpg",
];

const projectLink = document.getElementById('project-link');

const projectLinks = [
    "./pages/fleet/Aircraft/av2.html",
    "./pages/fleet/Destroyers/es1.html",
    "./pages/fleet/Cruisers/kr1.html",
];

function updateProjectLink() {
    projectLink.setAttribute('href', projectLinks[projectIndex]);
}

let projectIndex = 1;
let backgroundIndex = 0;
let projectTimer;

function updateProject() {

    projectTitle.classList.add('fade-out');
    projectText.classList.add('fade-out');

    setTimeout(() => {
        projectTitle.textContent = projectTitles[projectIndex];
        projectText.textContent = projectTexts[projectIndex];
        projectOne.textContent = projectOnes[projectIndex];
        projectTwo.textContent = projectTwos[projectIndex];
        projectThree.textContent = projectThrees[projectIndex];
        projectFour.textContent = projectFours[projectIndex];

        projectTitle.classList.remove('fade-out');
        projectText.classList.remove('fade-out');
    }, 500); // You can adjust the delay time (in milliseconds) before changing the text

    projectIndex++;
    if (projectIndex >= projectTitles.length) {
        projectIndex = 0;
    }

    updateBackgroundImage();
    updateProjectLink();
}

function updateBackgroundImage() {
    projectContent.style.backgroundImage = `url("${projectBackgroundImages[backgroundIndex]}")`;

    backgroundIndex++;
    if (backgroundIndex >= projectBackgroundImages.length) {
        backgroundIndex = 0;
    }
}

function startProjectTimer() {
    projectTimer = setInterval(updateProject, 26000); // You can adjust the time interval (in milliseconds) between text changes
}

function stopProjectTimer() {
    clearInterval(projectTimer);
}

// Event handlers for the toggle buttons
const projectSquareBlock = document.querySelector('.project-square_block');
const projectLeftButton = projectSquareBlock.querySelector('.square:first-child');
const projectRightButton = projectSquareBlock.querySelector('.square:last-child');

projectLeftButton.addEventListener('click', () => {
    projectIndex--;
    if (projectIndex <= 0) {
        currentIndex = texts.length - 1;
        currentIndex--;
    }
    updateProject();
    stopProjectTimer();
});

projectRightButton.addEventListener('click', () => {
    projectIndex++;
    if (projectIndex >= projectTitles.length) {
        projectIndex = 0;
    }
    updateProject();
    stopProjectTimer();
});

// Start automatic project toggling
startProjectTimer();
