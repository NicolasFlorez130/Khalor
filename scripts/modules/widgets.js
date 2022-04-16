window.addEventListener('load', () => {
    setTimeout(e => {
        let closed = document.querySelector('.bivTZG'),
            opened = document.querySelector('.llyszt')
        if (opened) {
            opened.lastChild.remove();
        } else {
            closed.lastChild.remove();
        }

    }, 1000)

    document.querySelectorAll('.contact').forEach(a => {
        a.addEventListener('click', () => document.querySelector('.gTcrRz').click());
    })



})