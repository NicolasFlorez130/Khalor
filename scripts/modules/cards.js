window.addEventListener('load', () => {
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
})