ScrollReveal({ 
        reset: true, 
        distance: '60px',
        duration: 2500,
        delay: 400
    });



ScrollReveal().reveal('.title', {delay: 250, origin:'left'});
ScrollReveal().reveal('.greeting', {delay: 150});
ScrollReveal().reveal('#skills', {delay: 150});
ScrollReveal().reveal('.buttons', {delay: 150, origin:'bottom'});
ScrollReveal().reveal('#projects', {delay: 150, origin:'left'});
ScrollReveal().reveal('.project-container', {delay: 150, origin:'bottom'});

