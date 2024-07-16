const frame = document.getElementById('frame');

let mouseX = 0;
let mouseY = 0;

frame.addEventListener('mousemove', (e) => {
    const rect = frame.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angleX = (e.clientY - centerY) / 20; // Ajusta la sensibilidad del giro
    const angleY = (e.clientX - centerX) / 20;

    frame.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

// Actualización del reloj y clima (simulado para demostración)
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function updateWeather() {
    const temperature = Math.floor(Math.random() * 10 + 20); // Random temperature between 20°C and 30°C
    const humidity = Math.floor(Math.random() * 30 + 50); // Random humidity between 50% and 80%

    document.querySelector('.temperature').textContent = `${temperature}°C`;
    document.querySelector('.humidity').textContent = `${humidity}%`;
}

function updateClock() {
    updateTime();
    updateWeather();
}

setInterval(updateClock, 1000);
