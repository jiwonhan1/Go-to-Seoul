const sectionsArray = Array.from(document.getElementsByTagName('section')); 

// find all the sections in the page
const sectionTopOffsets = [];
const sectionOffsetHeight = [];

// loop through the sections and check the ID
for (let i = 0; i < sectionsArray.length; i++) {
    // in case someone writes the section with a capitalized S, make it lowercase
    const sectionID = sectionsArray[i].id.toLowerCase();
    // if section id doesn't includes 'section' remove it from the array
    if (!sectionID.includes('section')) {
        sectionsArray.splice(i, 1);
        i--;
    } else {
        // get the sections top offset and save it in an array
        sectionTopOffsets.push(sectionsArray[i].offsetTop);
        sectionOffsetHeight.push(sectionsArray[i].offsetHeight);
    }
}

/*
 * create menu list items
 */

// get the menu ul
const menuContainer = document.getElementById('navbar__list');

const addListItems = (section) => {
    // create listItem and insert it into the ul
    const menuListItems = `<li><a class="menu__link" href="#${section.id}">${section.className}</a></li>`;
    menuContainer.insertAdjacentHTML('beforeend', menuListItems);
};

sectionsArray.forEach(section => {
    addListItems(section);
});

/*
 * create scroll functionality
 */

// get all the links with the class 'menu__link'
const menuLinkItems = Array.from(document.getElementsByClassName('menu__link'));

// get the height of the header
const headerHeight = document.querySelector('.page__header').clientHeight;

// create scroll function 
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

/*
 * add section highlighting on scroll
 */

window.addEventListener('scroll', function() {
    // check for each section if they are in viewport
    for ([i, section] of sectionsArray.entries()) {
        // if the section is in viewport add the class, else remove it
        const spacing = 250; // to highlight the section before it hits the header
        const topScrollOffset = window.pageYOffset + headerHeight + spacing;
        const bottomLimit = sectionTopOffsets[i] + sectionOffsetHeight[i] - headerHeight;

        if (topScrollOffset >= sectionTopOffsets[i] && window.pageYOffset < bottomLimit - spacing) {
            section.classList.add('active');
            menuLinkItems[i].classList.add('navbar_active');

        } else {
            section.classList.remove('active');
            menuLinkItems[i].classList.remove('navbar_active');
        }
    }
});
