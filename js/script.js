// Este es un ejemplo muy básico de carrusel con JavaScript puro.
// Para un carrusel más robusto, se recomienda usar librerías como Slick Carousel, Swiper.js, etc.

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('hero-carousel');
    if (!carousel) return;

    const carouselItems = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const intervalTime = 5000; // 5 segundos

    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    // Mostrar el primer slide al cargar
    showSlide(currentIndex);

    // Iniciar el carrusel automático
    setInterval(nextSlide, intervalTime);

    // Opcional: Agregar controles de navegación (flechas, puntos)
    // Esto requeriría más HTML y JS para la interactividad.
});