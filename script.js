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
    
    /* Novas animações melhoradas */
    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale(0.3) translateY(-50px);
        }
        50% {
            opacity: 1;
            transform: scale(1.05) translateY(0);
        }
        70% {
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
        20%, 40%, 60%, 80% { transform: translateX(2px); }
    }
    
    @keyframes glow {
        0% { box-shadow: 0 0 5px rgba(14, 255, 255, 0.3); }
        50% { box-shadow: 0 0 20px rgba(14, 255, 255, 0.6); }
        100% { box-shadow: 0 0 5px rgba(14, 255, 255, 0.3); }
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    /* Micro-interações */
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
    }
    
    .btn:active::before {
        width: 300px;
        height: 300px;
    }
    
    .portfolio-box {
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    }
    
    .portfolio-box:hover {
        transform: translateY(-10px) scale(1.02) !important;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2) !important;
    }
    
    .skill-item {
        transition: all 0.3s ease;
        border-radius: 5px;
    }
    
    .skill-item:hover {
        transform: translateX(10px);
        background: rgba(14, 255, 255, 0.05);
        padding: 10px;
    }
    
    .social-media a {
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
    }
    
    .social-media a:hover {
        transform: translateY(-5px) rotate(5deg) scale(1.1) !important;
        animation: glow 1.5s infinite;
    }
    
    .navbar a {
        position: relative;
        overflow: hidden;
    }
    
    .navbar a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: #0ef;
        transition: left 0.3s ease;
    }
    
    .navbar a:hover::after,
    .navbar a.active::after {
        left: 0;
    }
    
    .input-box {
        transition: all 0.3s ease;
    }
    
    .input-box:hover {
        transform: translateY(-2px);
    }
    
    .input-box input:focus,
    .input-box textarea:focus {
        animation: pulse 0.6s ease-in-out;
    }
    
    .loading {
        animation: spin 1s linear infinite;
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

// Inicializar EmailJS quando a página carregar
window.addEventListener('load', function() {
    // Verificar se as configurações foram carregadas
    if (typeof window.EMAIL_CONFIG !== 'undefined' && typeof emailjs !== 'undefined') {
        // Inicializar EmailJS com a chave pública
        emailjs.init(window.EMAIL_CONFIG.PUBLIC_KEY);
        
        // Verificar configuração
        if (typeof window.checkEmailConfig === 'function') {
            window.checkEmailConfig();
        }
    }
});

// Funcionalidade do formulário de contato
const contactForm = document.getElementById('contact-form');
const sendBtn = document.getElementById('send-btn');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obter dados do formulário
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Validação básica
        if (!name || !email || !subject || !message) {
            showNotification('Por favor, preencha todos os campos.', 'error');
            return;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Por favor, insira um email válido.', 'error');
            return;
        }
        
        // Desabilitar botão durante o envio
        sendBtn.disabled = true;
        sendBtn.innerHTML = 'Enviando... <i class="bx bx-loader-alt bx-spin"></i>';
        
        // Debug: verificar o que está acontecendo
        console.log('EmailJS disponível:', typeof emailjs !== 'undefined');
        console.log('CONFIG disponível:', typeof window.EMAIL_CONFIG !== 'undefined');
        if (typeof window.EMAIL_CONFIG !== 'undefined') {
            console.log('Configuração atual:', window.EMAIL_CONFIG);
        }
        
        // Verificar se EmailJS está disponível e configurado
        if (typeof emailjs === 'undefined' || typeof window.EMAIL_CONFIG === 'undefined' || !window.checkEmailConfig()) {
            // Fallback para mailto se EmailJS não estiver disponível
            const mailtoLink = `mailto:pablohenriquerodrigues456@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
            )}`;
            
            window.location.href = mailtoLink;
            showNotification('Redirecionando para seu cliente de email...', 'info');
            
            // Reabilitar botão
            sendBtn.disabled = false;
            sendBtn.innerHTML = 'Enviar Mensagem <i class="bx bx-send"></i>';
            return;
        }
        
        // Preparar dados para o EmailJS (usando variáveis padrão)
        const templateParams = {
            to_name: 'Pablo Henrique',
            from_name: name,
            from_email: email,
            reply_to: email,
            subject: subject,
            message: message
        };
        
        // Enviar email usando EmailJS
        emailjs.send(window.EMAIL_CONFIG.SERVICE_ID, window.EMAIL_CONFIG.TEMPLATE_ID, templateParams)
            .then(function(response) {
                console.log('Email enviado com sucesso!', response.status, response.text);
                showNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                
                // Enviar email de confirmação para quem enviou (opcional)
                const autoReplyParams = {
                    to_name: name,
                    to_email: email,
                    from_name: 'Pablo Henrique Rodrigues',
                    reply_message: `Olá ${name},\n\nObrigado por entrar em contato através do meu portfólio!\n\nRecebi sua mensagem sobre "${subject}" e retornarei o contato em breve.\n\nAtenciosamente,\nPablo Henrique Rodrigues\nDesenvolvedor Backend`
                };
                
                // Tentar enviar resposta automática (se tiver template configurado)
                if (window.EMAIL_CONFIG.AUTO_REPLY_TEMPLATE_ID) {
                    emailjs.send(window.EMAIL_CONFIG.SERVICE_ID, window.EMAIL_CONFIG.AUTO_REPLY_TEMPLATE_ID, autoReplyParams)
                        .then(function(autoReplyResponse) {
                            console.log('Resposta automática enviada!', autoReplyResponse.status);
                        })
                        .catch(function(autoReplyError) {
                            console.log('Resposta automática falhou (normal se não configurada):', autoReplyError);
                        });
                }
                
                // Limpar formulário
                contactForm.reset();
                
            }, function(error) {
                console.log('Erro ao enviar email:', error);
                
                // Fallback para mailto em caso de erro
                const mailtoLink = `mailto:pablohenriquerodrigues456@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                    `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
                )}`;
                
                window.location.href = mailtoLink;
                showNotification('Erro no envio automático. Redirecionando para seu cliente de email...', 'info');
            })
            .finally(function() {
                // Reabilitar botão
                sendBtn.disabled = false;
                sendBtn.innerHTML = 'Enviar Mensagem <i class="bx bx-send"></i>';
            });
    });
}

// Sistema de notificações
function showNotification(message, type = 'info') {
    // Remover notificação existente se houver
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="bx ${type === 'success' ? 'bx-check' : type === 'error' ? 'bx-x' : 'bx-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close"><i class="bx bx-x"></i></button>
        </div>
    `;
    
    // Adicionar estilos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        max-width: 400px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 18px;
        margin-left: auto;
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Fechar ao clicar no X
    notification.querySelector('.notification-close').addEventListener('click', () => {
        closeNotification(notification);
    });
    
    // Auto-fechar após 5 segundos
    setTimeout(() => {
        if (document.contains(notification)) {
            closeNotification(notification);
        }
    }, 5000);
}

function closeNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (document.contains(notification)) {
            notification.remove();
        }
    }, 300);
}

// Botão flutuante do WhatsApp
function createWhatsAppButton() {
    const whatsappBtn = document.createElement('div');
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.innerHTML = `
        <a href="https://wa.me/5516997340486?text=Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades." target="_blank">
            <i class="bx bxl-whatsapp"></i>
        </a>
    `;
    
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        animation: pulse 2s infinite;
    `;
    
    whatsappBtn.querySelector('a').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background: #25d366;
        border-radius: 50%;
        color: white;
        font-size: 30px;
        text-decoration: none;
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        transition: all 0.3s ease;
    `;
    
    // Adicionar animação pulse
    const style = document.createElement('style');
    style.textContent += `
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        
        .whatsapp-float a:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(whatsappBtn);
}

// Inicializar botão do WhatsApp quando a página carregar
window.addEventListener('load', createWhatsAppButton);

// Funcionalidade de download do CV
function downloadCV() {
    // Mostrar loading
    showNotification('Gerando CV... Aguarde um momento.', 'info');
    
    // Verificar se a biblioteca html2pdf está disponível
    if (typeof html2pdf === 'undefined') {
        showNotification('Erro: Biblioteca de PDF não carregada. Recarregue a página.', 'error');
        return;
    }
    
    // Criar elemento temporário diretamente no DOM
    const cvContainer = document.createElement('div');
    cvContainer.innerHTML = getCVContent();
    cvContainer.style.cssText = `
        position: fixed;
        top: -9999px;
        left: -9999px;
        width: 210mm;
        background: white;
        font-family: Arial, sans-serif;
        font-size: 12px;
        line-height: 1.6;
        color: #333;
        padding: 20mm;
        box-sizing: border-box;
    `;
    
    document.body.appendChild(cvContainer);
    
    // Configurações do PDF
    const options = {
        margin: [10, 10, 10, 10],
        filename: 'Pablo_Henrique_Rodrigues_CV.pdf',
        image: { 
            type: 'jpeg', 
            quality: 0.98 
        },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            letterRendering: true,
            allowTaint: false,
            backgroundColor: '#ffffff'
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };
    
    // Gerar PDF
    html2pdf().set(options).from(cvContainer).save().then(() => {
        showNotification('CV baixado com sucesso!', 'success');
        document.body.removeChild(cvContainer);
    }).catch((error) => {
        console.error('Erro ao gerar PDF:', error);
        showNotification('Erro ao gerar PDF. Tente novamente.', 'error');
        document.body.removeChild(cvContainer);
    });
}

// Função para retornar o conteúdo do CV
function getCVContent() {
    return `
        <div style="max-width: 190mm; margin: 0 auto; background: white; padding: 0;">
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #0ef;">
                <h1 style="font-size: 28px; color: #1f242d; margin: 0 0 5px 0;">Pablo Henrique Rodrigues</h1>
                <h2 style="font-size: 16px; color: #0ef; font-weight: normal; margin: 0 0 15px 0;">Desenvolvedor Backend</h2>
                <div style="font-size: 11px; color: #666;">
                    <span style="margin: 0 10px;">📧 pablohenriquerodrigues456@gmail.com</span>
                    <span style="margin: 0 10px;">📱 (16) 99734-0486</span>
                    <span style="margin: 0 10px;">📍 Ribeirão Preto, SP</span>
                </div>
            </div>

            <!-- Resumo Profissional -->
            <div style="margin-bottom: 25px;">
                <h3 style="font-size: 16px; color: #1f242d; font-weight: bold; margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid #0ef; text-transform: uppercase;">Resumo Profissional</h3>
                <div style="margin-left: 10px;">
                    <p style="margin: 0; font-size: 12px; color: #555; text-align: justify;">Desenvolvedor Backend especializado em PHP e MySQL com 4+ anos de experiência. Expertise em criação de APIs RESTful, desenvolvimento de sistemas de controle de dados e manipulação de arquivos CSV. Profissional focado em soluções robustas e escaláveis, sempre aplicando as melhores práticas de programação.</p>
                </div>
            </div>

            <!-- Experiência Profissional -->
            <div style="margin-bottom: 25px;">
                <h3 style="font-size: 16px; color: #1f242d; font-weight: bold; margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid #0ef; text-transform: uppercase;">Experiência Profissional</h3>
                <div style="margin-left: 10px;">
                    <div style="margin-bottom: 15px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                            <div>
                                <div style="font-weight: bold; color: #1f242d; font-size: 13px;">Desenvolvedor Backend PHP</div>
                                <div style="color: #0ef; font-weight: bold; font-size: 12px;">Freelancer</div>
                            </div>
                            <div style="color: #666; font-size: 11px; font-style: italic;">2020 - Presente</div>
                        </div>
                        <div style="margin-top: 5px; color: #555; font-size: 11px;">
                            • Desenvolvimento de sistemas completos de gestão com PHP e MySQL<br>
                            • Criação de APIs RESTful para integração com sistemas terceiros<br>
                            • Implementação de sistemas de controle de estoque e cotação<br>
                            • Desenvolvimento de interfaces dinâmicas com JavaScript e jQuery<br>
                            • Otimização de consultas SQL e performance de aplicações
                        </div>
                    </div>
                </div>
            </div>

            <!-- Habilidades Técnicas -->
            <div style="margin-bottom: 25px;">
                <h3 style="font-size: 16px; color: #1f242d; font-weight: bold; margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid #0ef; text-transform: uppercase;">Habilidades Técnicas</h3>
                <div style="margin-left: 10px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                    <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; border-left: 3px solid #0ef;">
                        <h4 style="color: #1f242d; font-size: 12px; margin: 0 0 8px 0;">Backend</h4>
                        <div style="font-size: 11px; color: #666; line-height: 1.4;">
                            • PHP (PDO, OOP)<br>
                            • MySQL (Queries complexas)<br>
                            • APIs RESTful<br>
                            • Manipulação CSV
                        </div>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; border-left: 3px solid #0ef;">
                        <h4 style="color: #1f242d; font-size: 12px; margin: 0 0 8px 0;">Frontend</h4>
                        <div style="font-size: 11px; color: #666; line-height: 1.4;">
                            • JavaScript (ES6+)<br>
                            • jQuery & AJAX<br>
                            • HTML5 & CSS3<br>
                            • Bootstrap
                        </div>
                    </div>
                </div>
            </div>

            <!-- Projetos Principais -->
            <div style="margin-bottom: 25px;">
                <h3 style="font-size: 16px; color: #1f242d; font-weight: bold; margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid #0ef; text-transform: uppercase;">Projetos Principais</h3>
                <div style="margin-left: 10px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                    <div style="background: #f8f9fa; padding: 12px; border-radius: 5px; border-left: 3px solid #0ef;">
                        <div style="font-weight: bold; color: #1f242d; font-size: 12px; margin-bottom: 5px;">Sistema de Cotação</div>
                        <div style="font-size: 10px; color: #666; margin-bottom: 5px;">Sistema completo com geração de código de barras e busca em tempo real.</div>
                        <div style="font-size: 9px; color: #0ef; font-weight: bold;">PHP • MySQL • JavaScript</div>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 12px; border-radius: 5px; border-left: 3px solid #0ef;">
                        <div style="font-weight: bold; color: #1f242d; font-size: 12px; margin-bottom: 5px;">Gestão de Estoque</div>
                        <div style="font-size: 10px; color: #666; margin-bottom: 5px;">Sistema avançado com análises e relatórios personalizados.</div>
                        <div style="font-size: 9px; color: #0ef; font-weight: bold;">PHP • MySQL • Chart.js</div>
                    </div>
                </div>
            </div>

            <!-- Informações Adicionais -->
            <div style="margin-bottom: 25px;">
                <h3 style="font-size: 16px; color: #1f242d; font-weight: bold; margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid #0ef; text-transform: uppercase;">Informações Adicionais</h3>
                <div style="margin-left: 10px;">
                    <p style="margin: 5px 0; font-size: 12px;"><strong>Idiomas:</strong> Português (Nativo), Inglês (Intermediário)</p>
                    <p style="margin: 5px 0; font-size: 12px;"><strong>Disponibilidade:</strong> Freelance e projetos remotos</p>
                    <p style="margin: 5px 0; font-size: 12px;"><strong>Diferenciais:</strong> Foco em performance, código limpo e documentação detalhada</p>
                </div>
            </div>
        </div>
    `;
}

// Adicionar eventos aos botões de download do CV
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn1 = document.getElementById('download-cv-btn');
    const downloadBtn2 = document.getElementById('download-cv-btn-2');
    
    if (downloadBtn1) {
        downloadBtn1.addEventListener('click', function(e) {
            e.preventDefault();
            downloadCV();
        });
    }
    
    if (downloadBtn2) {
        downloadBtn2.addEventListener('click', function(e) {
            e.preventDefault();
            downloadCV();
        });
    }
    
    // Inicializar animações melhoradas
    initEnhancedAnimations();
});

// Função para inicializar animações melhoradas
function initEnhancedAnimations() {
    // Animação de entrada para elementos da página
    const animateOnLoad = document.querySelectorAll('.home-content h1, .home-content h3, .home-content p');
    animateOnLoad.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Animação hover melhorada para botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('click', function() {
            this.style.animation = 'pulse 0.3s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });
    
    // Efeito parallax suave para o background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.home');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Animação de hover para skills
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const progressBar = this.querySelector('.progress');
            if (progressBar) {
                progressBar.style.animation = 'glow 0.8s ease-in-out';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const progressBar = this.querySelector('.progress');
            if (progressBar) {
                progressBar.style.animation = '';
            }
        });
    });
    
    // Animação de digitação melhorada
    const textElements = document.querySelectorAll('.home-content h3, .home-content p');
    textElements.forEach(element => {
        element.addEventListener('animationend', function() {
            this.style.animation = 'none';
        });
    });
    
    // Efeito de hover nos links do menu
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Animação de entrada para elementos ao fazer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Aplicar diferentes animações baseadas na classe
                if (element.classList.contains('skills-box')) {
                    element.style.animation = 'slideInLeft 0.8s ease-out forwards';
                } else if (element.classList.contains('portfolio-box')) {
                    element.style.animation = 'bounceIn 0.8s ease-out forwards';
                } else if (element.classList.contains('contact-info')) {
                    element.style.animation = 'slideInRight 0.8s ease-out forwards';
                } else {
                    element.style.animation = 'slideInUp 0.6s ease-out forwards';
                }
                
                // Parar de observar após a animação
                animationObserver.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Adicionar elementos para observar
    const elementsToAnimate = document.querySelectorAll('.skills-box, .portfolio-box, .contact-info, .about-text');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        animationObserver.observe(element);
    });
}

// Função para adicionar efeito de ripple nos botões
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Adicionar estilo do ripple
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Adicionar efeito ripple a todos os botões
document.addEventListener('DOMContentLoaded', function() {
    const allButtons = document.querySelectorAll('.btn, button');
    allButtons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
    
    // Inicializar cursor personalizado
    initCustomCursor();
});

// Cursor personalizado de programação
function initCustomCursor() {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    
    if (!cursorDot || !cursorOutline) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    
    // Seguir movimento do mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    // Animação suave do outline
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.2;
        outlineY += (mouseY - outlineY) * 0.2;
        
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateOutline);
    }
    animateOutline();
    
    // Efeitos hover
    const hoverElements = document.querySelectorAll('a, button, .btn, .social-media a');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('hover');
            cursorOutline.classList.add('hover');
            
            // Criar partículas ao hover
            createHoverParticles(mouseX, mouseY);
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('hover');
            cursorOutline.classList.remove('hover');
        });
    });
    
    // Esconder cursor padrão apenas na home
    const homeSection = document.querySelector('.home');
    if (homeSection) {
        homeSection.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'none';
        });
        
        homeSection.addEventListener('mouseleave', () => {
            document.body.style.cursor = 'default';
        });
    }
}

// Criar partículas no hover
function createHoverParticles(x, y) {
    const colors = ['#0ef', '#fff', '#0af'];
    
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${x}px;
            top: ${y}px;
        `;
        
        document.body.appendChild(particle);
        
        // Animação da partícula
        const angle = (Math.PI * 2 * i) / 6;
        const velocity = 50 + Math.random() * 30;
        const duration = 800 + Math.random() * 400;
        
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// Efeito de digitação programática (apenas para elementos de fundo)
function createTypingEffect() {
    const homeSection = document.querySelector('.home');
    if (!homeSection) return;
    
    // Aplicar efeito APENAS nos elementos de código de fundo, NÃO no texto principal
    const codeElements = document.querySelectorAll('.code-text, .matrix-column');
    codeElements.forEach((element, index) => {
        const originalText = element.textContent;
        element.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < originalText.length) {
                    element.textContent += originalText[i];
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 100 + Math.random() * 50);
        }, index * 200);
    });
}

// Inicializar efeitos quando a página carregar
window.addEventListener('load', () => {
    setTimeout(createTypingEffect, 2000);
});
