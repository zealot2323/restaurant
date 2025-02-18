import aboutImage from './resources/about.jpg';

const buildAbout = function() {
        const content = document.querySelector('#content');
        content.replaceChildren();
    
        content.classList.remove('home');
        content.classList.remove('menu');
        content.classList.add('about');
    
        const left = document.createElement('div');
        left.classList.add('left');
        left.classList.add('about');

        const first = document.createElement('p');
        first.classList.add('about');
        first.textContent = "At Dot’s Diner, we serve up delicious, handcrafted burgers made with the freshest ingredients and grilled to perfection. From our juicy classic cheeseburger to the bold Western Bacon Special, every bite is packed with flavor. Pair your burger with crispy fries, hand-spun milkshakes, and ice-cold sodas for the ultimate diner experience."
    
        const last = document.createElement('p');
        last.classList.add('about');
        last.textContent = "With a cozy, retro vibe and friendly service, Dot’s Diner is the perfect spot for burger lovers of all kinds. Come hungry, leave happy! 🍔✨"

        const right = document.createElement('div');
        right.classList.add('right');
        right.classList.add('about');

        const image = document.createElement('img')
        image.src = aboutImage;
        image.style = 'width:100%;'
        image.classList.add('about');
    
    
        right.appendChild(image);
        left.appendChild(first);
        left.appendChild(last);
        content.appendChild(left);
        content.appendChild(right);
    
        console.log('end');
};

export default buildAbout;