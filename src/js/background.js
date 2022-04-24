const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const todayBackground = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.src = `src/img/${todayBackground}`;
document.body.appendChild(background);
