const message = "Hey love, I made this little website just for you. Every word here is from the heart, and every second of this audio is me thinking about you. ❤️";
const textElement = document.getElementById("message");
let i = 0;

function typeWriter() {
  if (i < message.length) {
    textElement.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}

window.onload = typeWriter;
