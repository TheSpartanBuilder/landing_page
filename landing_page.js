document.addEventListener('DOMContentLoaded', () => {
    gsap.to(".name_n_image", { 
        top: "20%",
        opacity: 1, 
        duration: 2,
        ease: "power3.out",
        y: -50
    });
});