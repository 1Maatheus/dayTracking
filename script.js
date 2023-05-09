function load() {
  let message = document.getElementById("msg");
  let img = document.getElementById("morning");
  let paragraph = document.getElementById("paragraph");
  var data = new Date();
  var hora = data.getHours();
  message.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = "./assets/manha.jpg";
    document.body.style.background = "#eeecbc";
  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = "./assets/tarde.jpg";
    document.body.style.background = "#5aa2d1";
    document.getElementById("title").style.color = "white";
    document.getElementById("paragraph").style.color = "white";
  } else {
    //Boa noite
    img.src = "./assets/noite.jpg";
    document.body.style.background = "#271f1f";
    document.getElementById("title").style.color = "white";
    document.getElementById("paragraph").style.color = "white";
  }
}
