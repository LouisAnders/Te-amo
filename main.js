onload = () =>{
        document.body.classList.remove("container");
};

// Reproducir música al cargar
window.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("img/sound.mp3"); // Asegúrate de que el nombre coincida
  audio.play().catch(() => {
    // Si el navegador bloquea la reproducción automática, reproduce al hacer primer clic
    document.addEventListener("click", () => {
      audio.play();
    }, { once: true });
  });
});

