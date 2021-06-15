let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.rock', 3, {y: -600})
    .to('.girl', 3, {y: -400}, '-=3')
    .to('.bg', 3, {y: 50}, '-=3')
    .to('.content', 3, {top:'0%'}, '-=3')
    .fromTo('.content-images', {opacity: 0}, {opacity: 1, duration: 3})
    .fromTo('.text', {opacity: 0}, {opacity: 1, duration: 3});


let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: "150%",
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin('section')
    .addTo(controller)