window.addEventListener('load', () => {
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
        img.alt = 'calefactor de ambiente infrarojo Khalor en Bogotá';

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
        moving = false,
        a = 0;


    cont.addEventListener('mousedown', e => {
        initialPosition = e.pageX;
        moving = true;
        clearInterval(initialShow);
        a = 1;
    })

    window.addEventListener('mouseup', e => {
        moving = false;
        actualPosition = cont.scrollLeft;
        if (a == 2) a = 0;
    });

    cont.addEventListener('mousemove', e => {
        if (moving) {
            const currentPosition = e.pageX,
                diff = initialPosition - currentPosition;
            cont.scrollTo(actualPosition + diff, 0);
        }
        if (a == 1) a = 2;
    });

    cont.addEventListener('scroll', e => {
        items.forEach(item => {
            item.addEventListener('click', e => e.preventDefault());

        })
    })

    items.forEach((item, i) => {

        item.addEventListener('mousedown', e => {
            item.firstChild.style.cssText = 'transition: .05s; background-color: #eee'
        })

        let eventos = ['mouseup', 'mousemove'];
        eventos.forEach(ev => item.addEventListener(ev, e => {
            item.firstChild.style.cssText = 'transition: .5s; background-color: white'
        }))

        item.addEventListener('click', e => {

            if (a == 1) {
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

                window.matchMedia('(max-width: 480px)').matches ? cont.scrollIntoView() : document.querySelector('#carousel').scrollIntoView();
                a = 0;
            }

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
})