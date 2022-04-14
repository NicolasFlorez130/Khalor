window.onload = () => {
    //phone navbar
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

    const cardsContainer = document.querySelector('#corouselContainer');
    const cont = document.querySelector('.cont'),
        items = document.querySelectorAll('.item'),
        minWidth = "(min-width: 900px)";

    let initialPosition = null,
        actualPosition = 0,
        moving = false;

    cont.addEventListener('mousedown', e => {
        initialPosition = e.pageX;
        moving = true;
        clearInterval(initialShow);
    })

    window.addEventListener('mouseup', e => {
        moving = false;
        actualPosition = cont.scrollLeft;

    });

    cont.addEventListener('mousemove', e => {
        if (moving) {
            const currentPosition = e.pageX,
                diff = initialPosition - currentPosition;
            cont.scrollTo(actualPosition + diff, 0);
        }
    });

    cont.addEventListener('scroll', e => {
        items.forEach(item => {
            item.addEventListener('click', e => e.preventDefault());

        })
    })

    items.forEach((item, i) => {
        let evnt;
        window.matchMedia(minWidth).matches ? evnt = 'dblclick' : evnt = 'click';
        item.addEventListener(evnt, e => {

            const styles = window.getComputedStyle(item);
            cont.style.scrollBehavior = "smooth";
            let returnDistance = () => (parseInt(styles.width) + parseInt(styles.marginRight) + parseInt(styles.marginLeft)) * i;
            item.classList.toggle('showed') ? cont.scrollTo((returnDistance()), 0) : 0;
            if (i == items.length - 1) {
                setTimeout(() => {
                    cont.style.scrollBehavior = "smooth";
                    cont.scrollTo((returnDistance()), 0)
                    cont.style.scrollBehavior = "auto";
                }, parseFloat(styles.transitionDuration.slice(0, styles.transitionDuration.length - 1)) * 1000);
            }

            cont.addEventListener('mousedown', () => {
                actualPosition = cont.scrollLeft;
            })
            cont.style.scrollBehavior = "auto";
            cont.scrollIntoView()

        })
    });

    const uwuStyles = window.getComputedStyle(items[0]),
        uwuSize = parseInt(uwuStyles.width) + parseInt(uwuStyles.marginLeft) + parseInt(uwuStyles.marginRight);
    let uwu = uwuSize,
        initialShow;

    if (window.matchMedia(minWidth).matches) {
        initialShow = setInterval(() => {
            cont.style.scrollBehavior = "smooth";
            cont.scrollTo(uwu, 0);
            uwu > parseFloat(window.getComputedStyle(cardsContainer).width) - (uwuSize * 4) ? uwu = 0 : uwu += uwuSize;
            cont.style.scrollBehavior = "auto";
            actualPosition = cont.scrollLeft + uwuSize;
        }, 3000)
    }
}