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
 var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

menuLinks.forEach(link => {
  const a = document.createElement('a');
  a.setAttribute('href', link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
})

//!Dom Manipulation P2: Part 3: Creating the Submenu:
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height= '100%';
subMenuEl.style.backgroundColor= `var(--sub-menu-bg)`;
subMenuEl.setAttribute('class', 'flex-around');
subMenuEl.style.position = 'absolute';
document.getElementById('sub-menu').style.top = "0";

//! Part 4: Adding Menu Interaction:

const topMenuLinks = document.querySelector(a);
document.topMenuLinks.addEventListener("click",)