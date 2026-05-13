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


const allCards = document.querySelectorAll('.Kartochka');

allCards.forEach(card => {
    const openBtn = card.querySelector('.Zaglushka'); 
    const overlay = card.querySelector('.modal-overlay');
    const closeBtn = card.querySelector('.modal-close');
    const innerCloseBtn = card.querySelector('.js-close-modal');

    if (openBtn && overlay) {
        openBtn.addEventListener('click', () => {
            overlay.classList.add('active');
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                overlay.classList.remove('active');
            });
        }

        if (innerCloseBtn) {
            innerCloseBtn.addEventListener('click', () => {
                overlay.classList.remove('active');
            });
        }

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' || event.keyCode === 27) 
        {
        const activeModals = document.querySelectorAll('.modal-overlay.active');
        
        activeModals.forEach(modal => {
            modal.classList.remove('active');
        });
    }
});
