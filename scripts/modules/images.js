window.addEventListener('load', () => {

    const deviceType = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return 0;
        } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return 0;
        }
        return 1;
    }

    deviceType() == 0 ? document.querySelector('.heavyText').style.display = 'block' : 0;

    let cuant = 24,
        aux = 1;

    let imgs = [],
        items = [];

    for (let i = 1; i <= cuant; i++) {
        imgs.push(i);
    }

    imgs = imgs.sort((a, b) => 0.5 - Math.random())
    imgs = imgs.sort((a, b) => 0.5 - Math.random())

    imgs.forEach((i) => {
        const div = document.createElement('div'),
            img = document.createElement('img');
        img.src = `assets/backgrounds/background%20(${i}).jpg`;
        img.alt = 'calefactor de ambiente infrarojo Khalor en Bogotá';
        div.appendChild(img);

        switch (aux) {
            case 1:
                div.classList.add('largeImgLeft')
                break;
            case 4:
                div.classList.add('largeImgRight')
                break;
            default:
                break;
        }
        document.querySelector('.container').appendChild(div);
        items.push(div);
        aux++ == 4 ? aux = 1 : 0;
    });

    let node = document.querySelector('.expandedImage .background img');
    items.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.expandedImage .background').classList.add('showed');
            node.src = item.lastChild.src;
            deviceType() == 0 ? document.body.style.cssText = 'overflow-y: hidden;' : 0;
        })
    });

    document.querySelector('.out').addEventListener('click', () => {
        document.querySelector('.expandedImage .background').classList.remove('showed');
        document.body.style.cssText = '';
    });

})