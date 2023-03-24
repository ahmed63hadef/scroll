// Créer un événément au scroll

// Cacher la navbar si l'utilisateur commence à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

const navbarre = document.getElementById("navbar");
let u = 0;
let scroll = window.scrollY;
console.log(scroll);

navbarre.style.top = 0;

window.addEventListener("scroll", (e) => {
  if (window.scrollY < u) {
    navbarre.style.top = 0;
  } else {
    navbarre.style.top = "-60px";
  }

  u = window.scrollY;
});
