import buildAbout from "./about";
import buildMenu from "./menu";

const buildHome = function() {
    const content = document.querySelector('#content');
    content.replaceChildren();
    content.classList.remove('menu');
    content.classList.remove('about');
    content.classList.add('home');

    const body = document.createElement('h2');
    body.classList.add('home');
    body.textContent = "You're go to greasy spoon";

    const excerpt = document.createElement('p');
    excerpt.classList.add('home');
    excerpt.textContent = "When you're craving a burger, crave Dot's Diner";

    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('home');

    const cta = document.createElement('button')
    cta.classList.add('home');
    cta.textContent = 'Menu';
    cta.addEventListener('click', buildMenu);
    
    const contact = document.createElement('button')
    contact.classList.add('home');
    contact.classList.add('inverted');
    contact.textContent = 'About';
    contact.addEventListener('click', buildAbout);

    buttonDiv.appendChild(cta);
    buttonDiv.appendChild(contact);
    content.appendChild(body);
    content.appendChild(excerpt);
    content.appendChild(buttonDiv);
};

export default buildHome;