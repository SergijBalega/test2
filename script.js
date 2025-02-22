document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".section7__flex");
    
    slider.addEventListener("mousemove", (e) => {
        const rect = slider.getBoundingClientRect();
        const mouseX = e.clientX - rect.left; // Отримуємо позицію миші всередині блоку
        const width = rect.width;

        const scrollAmount = (mouseX / width) * slider.scrollWidth - width / 2; // Вираховуємо нову позицію
        slider.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    });
});
