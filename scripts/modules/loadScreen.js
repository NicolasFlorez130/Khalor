window.addEventListener('load', e => {
    let loadScreen = document.querySelector('.loadScreen');
    console.log(loadScreen);
    loadScreen.style.opacity = 0;
    setInterval(() => {
        loadScreen.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }, 500)
})