const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

//NAV
let navLinks = document.querySelectorAll('nav a');
let navList = Array.from(navLinks);
const navItems = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];
navList.forEach(item => {
  item.classList.add('italic');
  item.textContent = navItems.shift();
})
let headerImg = document.querySelector('#logo-img');
headerImg.src = siteContent.images['logo-img']

//Section1
let section1 = document.querySelector('.cta')
let s1Img = section1.querySelector('img');
s1Img.src = siteContent.images['cta-img'];
document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text button').textContent = siteContent.cta.button;

//Section2
let main = document.querySelector('.main-content');
main.querySelector('img').src = siteContent.images['accent-img'];
let firstHalf = main.querySelector('.top-content').children[0];
let secondHalf = main.querySelector('.top-content').children[1];
let thirdHalf = main.querySelector('.bottom-content').children[0];
let fourthHalf = main.querySelector('.bottom-content').children[1];
let fifthHalf = main.querySelector('.bottom-content').children[2];
firstHalf.querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
firstHalf.querySelector('p').textContent = siteContent['main-content']['features-content'];
secondHalf.querySelector('h4').textContent = siteContent['main-content']['about-h4'];
secondHalf.querySelector('p').textContent = siteContent['main-content']['about-content'];
thirdHalf.querySelector('h4').textContent = siteContent['main-content']['services-h4'];
thirdHalf.querySelector('p').textContent = siteContent['main-content']['services-content'];
fourthHalf.querySelector('h4').textContent = siteContent['main-content']['product-h4'];
fourthHalf.querySelector('p').textContent = siteContent['main-content']['product-content'];
fifthHalf.querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
fifthHalf.querySelector('p').textContent = siteContent['main-content']['vision-content'];

//Section3
let section3 = document.querySelector('.contact');
section3.querySelector('h4').textContent = siteContent.contact["contact-h4"];
section3.querySelectorAll('p')[0].textContent = siteContent.contact.address;
section3.querySelectorAll('p')[1].textContent = siteContent.contact.phone;
section3.querySelectorAll('p')[2].textContent = siteContent.contact.email;

//FOOTER
let footer = document.querySelector('footer');
footer.querySelector('a').textContent = siteContent.footer.copyright;
footer.querySelector('a').classList.add('bold');

console.log('project wired!')
