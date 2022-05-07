window.addEventListener('load', e => {
    let loadScreen = document.querySelector('.loadScreen');
    loadScreen.style.opacity = 0;
    setInterval(() => {
        loadScreen.style.display = 'none';
    }, 1000)
})