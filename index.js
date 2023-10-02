const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


const sideLinks = document.querySelectorAll('.sidebars a:not(.logout)');
const submenuItems = document.querySelectorAll('.submenu li');
const submenu = document.querySelector('.submenu');

sideLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideLinks.forEach(otherLink => {
            otherLink.classList.remove('active');   
        });
        submenuItems.forEach(otherLink => {
            otherLink.classList.remove('active');
        });
        link.classList.add('active');
    });
});

submenuItems.forEach(link => {
    link.addEventListener('click', () => {
        submenuItems.forEach(otherLink => {
            otherLink.classList.remove('active');
        });
        sideLinks.forEach(otherLink => {
            otherLink.classList.remove('active');   
        });
        link.classList.add('active');
    });
});

const mainToggleButtons = document.querySelectorAll('.main-toggle');
const submenuToggleButtons = document.querySelectorAll('.submenu-toggle');


mainToggleButtons.forEach((mainToggleButton, index) => {
    const submenu = mainToggleButton.nextElementSibling; // Get the next sibling, which is the submenu
    const submenuToggleButton = submenuToggleButtons[index]; // Get the corresponding submenu toggle button
    
    mainToggleButton.addEventListener('click', () => {
        if (submenu.style.display === 'none' || submenu.style.display === '') {
            submenu.style.display = 'block';
            submenuToggleButton.style.transform = 'rotate(0deg)'; // Rotate the submenu toggle button
        } else {
            submenu.style.display = 'none';
            submenuToggleButton.style.transform = 'rotate(275deg)'; // Reset the transformation
        }
    });
    
    submenuToggleButton.addEventListener('click', () => {
        if (submenu.style.display === 'none' || submenu.style.display === '') {
            submenu.style.display = 'block';
            submenuToggleButton.style.transform = 'rotate(0deg)'; // Rotate the submenu toggle button
        } else {
            submenu.style.display = 'none';
            submenuToggleButton.style.transform = 'rotate(275deg)'; // Reset the transformation
        }
    });
});



