const changingTitle = document.getElementById('changingTitle');
const titles = [
    "Атомная подлотка К-560 «Северодвинск»",
    "Первый в мире ледокольный газовоз",
    "Великий Ледокол Ермак"];

const changingText = document.getElementById('changingText');
const texts = [
    "К-560 «Северодвинск» - это российская атомная подводная лодка проекта 885 Ясень, также известная как лодка класса Северодвинск. Она была спущена на воду в 2010 году и является одной из самых передовых и технически сложных подводных лодок в мире, входит в состав 11-й дивизии подводных лодок Северного флота.",
    "Первый в мире ледокольный газовоз - это инновационное судно, специально разработанное для транспортировки сжиженного природного газа (СПГ) в условиях арктического льда. Оно сочетает функции ледокола и газовоза, позволяя открывать новые возможности для транспортировки СПГ через ледовитые морские пути.",
    "Ледокол Ермак был построен в 1974 году и является одним из известных ледоколов. Он предназначен для преодоления льда и обеспечения проходимости водных путей в условиях арктических морей. Ермак имеет впечатляющую мощность и прочность, что позволяет ему преодолевать толстые ледяные покровы."];

const changingShadowTitle = document.getElementById('changingShadowTitle');
const titlesH = [
    "Подлотка К-560 «Северодвинск»",
    "Танкер-газовоз СПГ «КАПИТАН ДАНИЛКИН»",
    "Ледокол Ермак"];

const cargoCapacity = document.getElementById('cargoCapacity');
const cargoCapacitys = [172600, 124214, 22222];

const iceCapability = document.getElementById('iceCapability');
const iceCapabilitys = [2.1, 2.4, 2.7];

const classCapability = document.getElementById('classCapability');
const classCapabilitys = ["Arc7", "Arc8", "Arc9"];

const azipodCount = document.getElementById('azipodCount');
const azipodCounts = [3, 2, 5];

let currentIndex = 1;
let timer;

function updateText() {
    changingTitle.classList.add('fade-out');
    changingText.classList.add('fade-out');
    changingShadowTitle.classList.add('fade-out');

    setTimeout(() => {
        changingTitle.textContent = titles[currentIndex];
        changingText.textContent = texts[currentIndex];
        changingShadowTitle.textContent = titlesH[currentIndex];
        cargoCapacity.textContent = cargoCapacitys[currentIndex];
        iceCapability.textContent = iceCapabilitys[currentIndex];
        classCapability.textContent = classCapabilitys[currentIndex];
        azipodCount.textContent = azipodCounts[currentIndex];

        changingTitle.classList.remove('fade-out');
        changingText.classList.remove('fade-out');
        changingShadowTitle.classList.remove('fade-out');
    }, 500); // Здесь вы можете указать время задержки (в миллисекундах) перед изменением текста

    const header = document.querySelector('.header');
    header.style.backgroundImage = `url("../assets/Rectangle ${currentIndex + 23}.png")`;

    currentIndex++;
    if (currentIndex >= texts.length) {
        currentIndex = 0;
    }
}

function startTimer() {
    timer = setInterval(updateText, 26000); // Здесь вы можете указать интервал времени (в миллисекундах) между сменой текста
}

function stopTimer() {
    clearInterval(timer);
}

// Обработчики событий для кнопок переключения
const squareBlock = document.querySelector('.square-block');
const leftButton = squareBlock.querySelector('.square:first-child');
const rightButton = squareBlock.querySelector('.square:last-child');

leftButton.addEventListener('click', () => {
    if (currentIndex < 0) {
        currentIndex = texts.length - 1;
        currentIndex--;
    }
    updateText();
    stopTimer();
    console.log(currentIndex);
});

rightButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= texts.length) {
        currentIndex = 0;
    }
    updateText();
    stopTimer();
    console.log(currentIndex);
});



// Запуск автоматического переключения
startTimer();
