window.onload = () => {
    //phone navbar

    const button = document.querySelector('#menuIcon');

    posX = window.pageYOffset;

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

    //cards

    cards.forEach(product => {
        const card = document.createElement('div'),
            container = document.createElement('div'),
            img = document.createElement('div'),
            h3 = document.createElement('h3'),
            p = document.createElement('p');

        card.classList.add('card');

        img.classList.add('icon');
        img.innerHTML = product.link;

        h3.classList.add('title');
        h3.innerText = product.title;

        p.classList.add('description');
        p.innerText = product.description;

        container.append(img, h3, p);
        card.append(container);

        document.querySelector('#cardsContainer').appendChild(card)
    });

    //counter

    backgrounds = backgrounds.sort((a, b) => 0.5 - Math.random());
    let backg = backgrounds.filter(bg => Math.random() > 0.7);
    backg[5] == undefined ? backg = backgrounds : ':)';
    backg = backg.sort((a, b) => 0.5 - Math.random());

    let count = 0,
        bg = backg[0].img;

    const counter = document.querySelector('#imageShowed');

    let dots = document.querySelectorAll('.dot');

    counter.style.cssText = `background-image: url('images/backgrounds/${bg}');'`;
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

        counter.style.cssText = `background-image: url('images/backgrounds/${bg}');'`;
    }, 100)

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => count = 70 * i);
    });
    //counter.addEventListener('click', () => count += 70);

    //carousel

    products.forEach(product => {

        const container = document.createElement('div'),
            img = document.createElement('img'),
            imgContainer = document.createElement('div'),
            details = document.createElement('div'),
            presion = document.createElement('div'),
            name = document.createElement('h2'),
            potence = document.createElement('div'),
            switchType = document.createElement('div'),
            size = document.createElement('div'),
            colors = document.createElement('div');

        container.className = 'item';

        imgContainer.className = 'image';
        img.src = `images/products/${product.img}`;
        img.className = product.format;
        img.alt = 'calefactor - calefactor infrarojo - khalor';

        details.className = 'details';

        presion.innerText = product.presion;
        presion.className = 'presion';

        name.innerHTML = product.name;

        potence.innerText = product.potence;
        potence.className = 'potence';

        switchType.innerText = `Tipo de encendido: ${product.switchType}`;
        switchType.className = 'switchType';

        size.innerText = `Medidas: ${product.size}`;
        size.className = 'size';

        colors.innerText = `Colores: ${product.colors}`;
        colors.className = 'colors';

        imgContainer.appendChild(img);
        details.append(presion, name, potence, switchType, size, colors);
        container.append(imgContainer, details);

        document.querySelector('#corouselContainer').appendChild(container);
    });

}