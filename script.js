document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Pega os valores digitados
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const origem = document.getElementById('origem').value;
            const destino = document.getElementById('destino').value;
            const mensagem = document.getElementById('mensagem').value;

            // Monta a mensagem formatada para o WhatsApp
            const textoMensagem = `*Solicitação de Orçamento - Lessa Carretos*%0A%0A` +
                `*Nome:* ${nome}%0A` +
                `*Telefone:* ${telefone}%0A` +
                `*Origem:* ${origem}%0A` +
                `*Destino:* ${destino}%0A` +
                `*Detalhes do Frete:* ${mensagem}`;

            // Número do WhatsApp do Élcio Lessa
            const numeroWhatsApp = '5511940339130';

            // Abre a conversa do WhatsApp com os dados preenchidos
            window.open(`https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`, '_blank');
        });
    }
});