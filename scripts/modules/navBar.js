window.addEventListener('load', () => {
    const button = document.querySelector('#menuIcon');

    button.addEventListener('click', () => {
        const as = document.querySelectorAll('#phoneNavBar a')
        document.querySelector('#phoneNavBar').classList.toggle('fullSize') ?
            window.onscroll = () => window.scrollTo(0, 0) :
            window.onscroll = () => {};
        as.forEach(a => {
            a.addEventListener('click', () => button.click())
        });
        document.querySelector('.navBar').classList.toggle('bgCol');
        document.querySelector('.p').classList.toggle('pDark');
        button.classList.toggle('fa-bars');
        button.classList.toggle('fa-xmark');
        window.scrollTo(0, 0);
    });
})