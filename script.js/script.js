const typedText = document.getElementById("typed-text");
const audio = document.getElementById("voice");

const lines = [
  { time: 0, text: "Hello my love 💕, " },
  { time: 2, text: "The day has come! It’s finally over — after everything you’ve gone through. " },
  { time: 7, text: "Every drop of sweat and every tear, every pain and struggle... it’s all paid off.\n\n" },
  { time: 13, text: "That’s why I made this little gift — to congratulate you, baby! For surviving this far. " },
  { time: 19, text: "For not giving up, even when everything felt out of place.\n\n" },
  { time: 24, text: "All the stress has finally eased. Congratulations — for giving your best, even when you were struggling with yourself. " },
  { time: 31, text: "You deserve this, baby. You deserve every good thing that will come your way.\n\n" },
  { time: 37, text: "I’m so, so, so proud of you for making it this far. " },
  { time: 42, text: "Your past self would be in awe of where you are now — standing strong for yourself, your friends, your parents, and for God.\n\n" },
  { time: 49, text: "I love you so much, baby. And I hope this small gift touches your heart and reminds you just how far you’ve come. ❤️" }
];

let i = 0;
function syncText() {
  if (i < lines.length && audio.currentTime >= lines[i].time) {
    typedText.innerHTML += lines[i].text;
    i++;
  }
  requestAnimationFrame(syncText);
}

window.onload = () => {
  audio.play();
  requestAnimationFrame(syncText);
};
