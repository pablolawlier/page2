let typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Backend', 'PHP Developer', 'MySQL Expert'],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 2000,
    loop: true,
    cursorChar: '|',
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500
});


const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
const progressBars = document.querySelectorAll('.progress-bar .progress');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');


menuBtn.addEventListener('click', () => {
    navbar.style.transition = 'transform 0.5s ease-in-out';
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuBtn.classList.remove('active');
    });
});


window.addEventListener('scroll', () => {
    header.style.transition = 'all 0.4s ease';
    header.classList.toggle('sticky', window.scrollY > 100);
});


function animateSkills() {
    progressBars.forEach(progress => {
        const value = progress.style.width;
        progress.style.width = '0';
        progress.style.transition = 'width 1.5s ease-in-out';
        setTimeout(() => {
            progress.style.width = value;
        }, 200);
    });
}


function animatePortfolio() {
    portfolioBoxes.forEach((box, index) => {
        box.style.transition = 'all 0.5s ease';
        box.style.transitionDelay = `${index * 0.1}s`;
        box.classList.add('animate');
    });
}


const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
           
            if (entry.target.id === 'skills') {
                animateSkills();
            }
            
            
            if (entry.target.id === 'portfolio') {
                animatePortfolio();
            }
            
    
            navLinks.forEach(link => {
                if (link.getAttribute('href').slice(1) === entry.target.id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, observerOptions);


sections.forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = header.offsetHeight;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.transition = 'all 0.8s ease';
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .reveal.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    .portfolio-box {
        opacity: 0;
        transform: scale(0.9);
    }
    
    .portfolio-box.animate {
        opacity: 1;
        transform: scale(1);
    }
    
    .progress {
        transition: width 1.5s ease-in-out;
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target) && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});

// Fechar menu ao rolar a página
window.addEventListener('scroll', () => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});
