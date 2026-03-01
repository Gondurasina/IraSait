let touchstartX = 0;
let touchendX = 0;

const menu = document.getElementById('mobileNav');

menu.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

menu.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture()
{
    if (touchendX > touchstartX + 50) 
    {
        if (menu.classList.contains('active')) 
        {
            toggleMenu();
        }
    }
}
function toggleMenu() 
{
    const menu = document.getElementById('mobileNav');
    menu.classList.toggle('active'); 
}
const allQuestions = document.querySelectorAll('.Question');

allQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const parent = question.closest('.FAQItem');
        parent.classList.toggle('active');
    });
});

const items = document.querySelectorAll('.FAQItem');

items.forEach((item, index) => {
    item.style.zIndex = items.length - index;
});

const navButtons = document.querySelectorAll('.joinBtn');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
});



