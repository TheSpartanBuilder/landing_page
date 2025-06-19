document.addEventListener('DOMContentLoaded', () => {
    gsap.to(".name_n_image", { 
        top: "20%",
        opacity: 1, 
        duration: 2,
        ease: "power3.out",
        y: -50,
    });

    document.querySelectorAll(".select_movement").forEach(project_button => {

        let mouseEnterAnimation = gsap.to(project_button, {
            paused: true,
            reversed: true,
            y: -15,
            duration: 0.5,
        });

        project_button.addEventListener("mouseenter",() =>
        mouseEnterAnimation.play());
        project_button.addEventListener("mouseleave",() =>
        mouseEnterAnimation.reverse());
    });
});

