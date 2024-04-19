//!Part 1: Getting Started:

//Select and cache the <main> element:
const mainEL = document.querySelector('main');
mainEL.style.backgroundColor = `var(--main-bg)`;
const h1 = document.createElement('h1');
h1.textContent = 'DOM Manipulation';
mainEL.setAttribute('class', 'flex-ctr');
mainEL.appendChild(h1);
mainEL.classList.add('flex-around');



//!Part 2: Creating a Menu Bar:

//Select and cache the <nav id='top-menu'>:
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height= "100%";
topMenuEl.style.backgroundColor= `var(--top-menu-bg)`;
topMenuEl.setAttribute('class','flex-around');


 //!Part 3: Adding Menu Buttons:

 // Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

menuLinks.forEach(link => {
  const a = document.createElement('a');
  a.setAttribute('href', link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
})