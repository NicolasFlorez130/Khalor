window.addEventListener('load', () => {
    backgrounds = backgrounds.sort((a, b) => 0.5 - Math.random());
    let backg = backgrounds.filter(bg => Math.random() > 0.7);
    backg[5] == undefined ? backg = backgrounds : ':)';
    backg = backg.sort((a, b) => 0.5 - Math.random());

    let count = 0,
        bg = backg[0].img;

    const counter = document.querySelector('#imagevisible');

    let dots = document.querySelectorAll('.dot');

    counter.style.cssText = `background-image: url('assets/backgrounds/${bg}');'`;
    dots[0].style.color = 'white';

    setInterval(() => {
        count++ > 400 ? count = 0 : ':)';

        if (count < 70) bg = backg[0].img;
        else if (count < 140) bg = backg[1].img;
        else if (count < 210) bg = backg[2].img;
        else if (count < 280) bg = backg[3].img;
        else if (count < 340) bg = backg[4].img;
        else bg = backg[5].img;

        dots.forEach((dot, i) => {
            dot.style.color = bg == backg[i].img ? 'white' : 'rgba(255, 255, 255, 0.4)';
        });

        counter.style.cssText = `background-image: url('assets/backgrounds/${bg}');'`;
    }, 100)

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => count = 70 * i);
    });
})