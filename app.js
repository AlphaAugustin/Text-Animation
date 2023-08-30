window.addEventListener('load', Start);

function Start() {
    const anim = gsap.timeline({repeat: -1});

    anim
    .to('.slide p', {y: 0, autoAlpha: 1, stagger: 1})
    .to('.slide p', {y: -100, autoAlpha: 0, stagger: 1}, 1)
}