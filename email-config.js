// Configuração do EmailJS
// Para configurar o envio de emails direto do portfólio:

/*
PASSO A PASSO PARA CONFIGURAR O EMAILJS:

1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Crie um novo Service:
   - Vá em "Email Services" > "Add New Service"
   - Escolha Gmail (ou outro provedor)
   - Conecte sua conta de email
   - Anote o Service ID

4. Crie um Template:
   - Vá em "Email Templates" > "Create New Template"
   - No campo "To Email", coloque: pablohenriquerodrigues456@gmail.com
   - No campo "Subject", coloque: Contato do Portfólio - {{subject}}
   - No campo "Content" (modo HTML), coloque:

<div style="font-family: system-ui, sans-serif, Arial; font-size: 16px; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
    <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        
        <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #0ef;">
            <h1 style="color: #1f242d; margin: 0; font-size: 24px;">Nova Mensagem do Portfólio</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Pablo Henrique Rodrigues - Desenvolvedor Backend</p>
        </div>
        
        <div style="margin-bottom: 25px;">
            <h3 style="color: #1f242d; margin-bottom: 15px; font-size: 18px;">Informações do Contato:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #0ef;">
                <p style="margin: 5px 0;"><strong>Nome:</strong> {{from_name}}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> {{from_email}}</p>
                <p style="margin: 5px 0;"><strong>Assunto:</strong> {{subject}}</p>
            </div>
        </div>
        
        <div style="margin-bottom: 25px;">
            <h3 style="color: #1f242d; margin-bottom: 15px; font-size: 18px;">Mensagem:</h3>
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e1e5e9; border-radius: 5px; line-height: 1.6;">
                {{message}}
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea;">
            <p style="color: #666; font-size: 14px; margin: 0;">
                Esta mensagem foi enviada através do formulário de contato do portfólio<br>
                <a href="mailto:{{from_email}}" style="color: #0ef; text-decoration: none;">Responder para {{from_email}}</a>
            </p>
        </div>
        
    </div>
    
    <div style="text-align: center; margin-top: 20px;">
        <p style="color: #888; font-size: 12px; margin: 0;">
            © 2025 Pablo Henrique Rodrigues - Desenvolvedor Backend<br>
            Ribeirão Preto, SP - Brasil
        </p>
    </div>
</div>

   IMPORTANTE: 
   - Use o modo HTML no template
   - Configure as variáveis exatamente como mostrado
   - Certifique-se que o "To Email" está preenchido

5. Obtenha sua Public Key:
   - Vá em "Account" > "General"
   - Copie sua Public Key

6. Substitua as configurações no arquivo script.js:
   - Linha 197: const EMAIL_SERVICE_ID = 'seu_service_id_aqui';
   - Linha 198: const EMAIL_TEMPLATE_ID = 'seu_template_id_aqui';
   - Linha 199: const EMAIL_PUBLIC_KEY = 'sua_public_key_aqui';
*/

// Configurações atuais (substitua pelos seus valores reais)
const EMAIL_CONFIG = {
    SERVICE_ID: 'service_zyxiyk1',     // Substitua pelo seu Service ID
    TEMPLATE_ID: 'template_ozofzg9',     // Substitua pelo seu Template ID
    PUBLIC_KEY: 'nUx75PuNEQ0auotm2',        // Substitua pela sua Public Key
    AUTO_REPLY_TEMPLATE_ID: null       // Opcional: Template para resposta automática
};

// Função para verificar se as configurações estão definidas
function checkEmailConfig() {
    const isConfigured = 
        EMAIL_CONFIG.SERVICE_ID && 
        EMAIL_CONFIG.TEMPLATE_ID && 
        EMAIL_CONFIG.PUBLIC_KEY &&
        EMAIL_CONFIG.SERVICE_ID !== 'service_portfolio' &&
        EMAIL_CONFIG.TEMPLATE_ID !== 'template_contact' &&
        EMAIL_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';
    
    if (!isConfigured) {
        console.warn('⚠️ EmailJS não configurado! Leia as instruções no arquivo email-config.js');
        return false;
    }
    
    console.log('✅ EmailJS configurado corretamente!');
    console.log('Service ID:', EMAIL_CONFIG.SERVICE_ID);
    console.log('Template ID:', EMAIL_CONFIG.TEMPLATE_ID);
    return true;
}

// Exportar configurações
window.EMAIL_CONFIG = EMAIL_CONFIG;
window.checkEmailConfig = checkEmailConfig;