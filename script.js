const message = "Hello my love 💕,\n\nThe day has come! It’s finally over — after everything you’ve gone through. Every drop of sweat and every tear, every pain and struggle... it’s all paid off. That’s why I made this little gift — to congratulate you, baby! For surviving this far. For not giving up, even when everything felt out of place. All the stress has finally eased.\n\nCongratulations — for giving your best, even when you were struggling with yourself. You deserve this, baby. You deserve every good thing that will come your way. I’m so, so, *so* proud of you for making it this far. Your past self would be in awe of where you are now — standing strong for yourself, your friends, your parents, and for God.\n\nI love you so much, baby. And I hope this small gift touches your heart and reminds you just how far you’ve come. ❤️";
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
