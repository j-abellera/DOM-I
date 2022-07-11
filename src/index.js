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

console.log('project wired!')

// Nav
const navLinks = document.querySelectorAll('header nav a')
const navList = Array.from(navLinks)
console.log(navList)
const navText = Object.values(siteContent.nav)
navList.forEach((link, i ) => {
  link.classList.add('italic');
  link.textContent = navText[i];
})

// Images
const logo = document.querySelector('#logo-img')
logo.setAttribute('src', siteContent.images['logo-img'])
const cta = document.querySelector('#cta-img')
cta.setAttribute('src', siteContent.images['cta-img'])
const accent = document.querySelector('#middle-img')
accent.setAttribute('src', siteContent.images['accent-img'])
const ctaText = document.querySelector('.cta-text')
console.log(ctaText)
ctaText.querySelector('h1').textContent = siteContent.cta.h1
ctaText.querySelector('button').textContent = siteContent.cta.button

// Main: Top
const topContent = document.querySelector('.top-content')
console.log(topContent)
topContent.children[0].querySelector('h4').textContent = siteContent["main-content"]['features-h4']
topContent.children[0].querySelector('p').textContent = siteContent['main-content']['features-content']
topContent.children[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
topContent.children[1].querySelector('p').textContent = siteContent['main-content']['about-content']

// Main: Bottom
const botContent = document.querySelector('.bottom-content')
console.log(botContent)
botContent.children[0].querySelector('h4').textContent = siteContent['main-content']['product-h4']
botContent.children[0].querySelector('p').textContent = siteContent['main-content']['product-content']
botContent.children[1].querySelector('h4').textContent = siteContent['main-content']['services-h4']
botContent.children[1].querySelector('p').textContent = siteContent['main-content']['services-content']
botContent.children[2].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
botContent.children[2].querySelector('p').textContent = siteContent['main-content']['vision-content']

// Contact
const contact = document.querySelector('.contact')
console.log(contact)
contact.querySelector('h4').textContent = siteContent.contact['contact-h4']
contact.children[1].textContent = siteContent.contact.address
contact.children[2].textContent = siteContent.contact.phone
contact.children[3].textContent = siteContent.contact.email

// Footer
const footer = document.querySelector('footer a')
console.log(footer)
footer.textContent = siteContent.footer.copyright
footer.classList.add('bold')
