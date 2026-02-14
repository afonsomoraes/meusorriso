/**
 * Configuração Global
 */
const CONFIG = {
    whatsappNumber: "5511965996108",
    defaultMessage: "Olá, estou em {CIDADE} e quero saber mais sobre o aparelho ortodôntico."
};

/**
 * Funções Utilitárias
 */
function getWhatsAppLink(city) {
    const message = CONFIG.defaultMessage.replace("{CIDADE}", city || "sua clínica");
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

function updateWhatsAppLinks() {
    // Detecta a cidade baseada na URL ou em um meta tag (fallback)
    // Para simplificar, vamos assumir que o nome da cidade está no título ou pode ser injetado no HTML
    const path = window.location.pathname;
    let city = "Clínica Meu Sorriso";

    if (path.includes("acailandia")) city = "Açailândia";
    else if (path.includes("araguaina")) city = "Araguaína";
    else if (path.includes("araguatins")) city = "Araguatins";
    else if (path.includes("barra-do-garcas")) city = "Barra do Garças";
    else if (path.includes("canaa-dos-carajas")) city = "Canaã dos Carajás";
    else if (path.includes("imperatriz")) city = "Imperatriz";

    const links = document.querySelectorAll('.whatsapp-link'); // Classe para links do Whats
    links.forEach(link => {
        link.href = getWhatsAppLink(city);
        link.target = "_blank"; // Abre em nova aba
    });
}

function initFaq() {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;
            const icon = q.querySelector('.icon-toggle');

            // Toggle visibility
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                if (icon) icon.style.transform = 'rotate(180deg)';
            } else {
                answer.classList.add('hidden');
                if (icon) icon.style.transform = 'rotate(0deg)';
            }
        });
    });
}

/**
 * Inicialização
 */
document.addEventListener('DOMContentLoaded', () => {
    updateWhatsAppLinks();
    initFaq();

    // Atualizar ano footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
