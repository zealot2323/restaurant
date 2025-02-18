import burgerImage from './resources/burger.jpg';

const buildMenu = function() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    let burgerArray = ["Hamburger", "Cheeseburger", "Western Bacon Cheeseburger"];
    let sidesArray = ["Fries", "Sweet Potato Fries", "Curly Fries"];
    let drinksArray = ["Dr. Pepper", "Coke", "Sprite"];
    content.classList.remove('home');
    content.classList.remove('about');
    content.classList.add('menu');

    const left = document.createElement('div');
    left.classList.add('left');
    left.classList.add('menu');

    const menuImage = document.createElement('img')
    menuImage.src = burgerImage;
    menuImage.style = 'width:100%;'
    menuImage.classList.add('menu');

    const right = document.createElement('div');
    right.classList.add('right');
    right.classList.add('menu');

    const burgers = document.createElement('h2');
    burgers.classList.add('menu');
    burgers.textContent = 'Burgers';

    const burgerMenu = document.createElement('ul')
    burgerMenu.classList.add('menu');
    
    burgerArray.forEach(element => {
        let item = document.createElement('li');
        item.textContent = element;
        burgerMenu.appendChild(item);
    });

    const sides = document.createElement('h2');
    sides.classList.add('menu');
    sides.textContent = 'Sides';

    const sidesMenu = document.createElement('ul')
    sidesMenu.classList.add('menu');
    
    sidesArray.forEach(element => {
        let item = document.createElement('li');
        item.textContent = element;
        sidesMenu.appendChild(item);
    });

    const drinks = document.createElement('h2');
    drinks.classList.add('menu');
    drinks.textContent = 'Drinks';

    const drinksMenu = document.createElement('ul')
    drinksMenu.classList.add('menu');
    
    drinksArray.forEach(element => {
        let item = document.createElement('li');
        item.textContent = element;
        drinksMenu.appendChild(item);
    });

    left.appendChild(menuImage);
    right.appendChild(burgers);
    right.appendChild(burgerMenu);
    right.appendChild(sides);
    right.appendChild(sidesMenu);
    right.appendChild(drinks);
    right.appendChild(drinksMenu);
    content.appendChild(left);
    content.appendChild(right);

};

export default buildMenu;