const app = {
    // Inicia funções ao carregar
    init() {
        this.setGreeting();
        console.log("Interface Care+ Pronta.");
    },

    // Muda saudação baseada na hora
    setGreeting() {
        const hour = new Date().getHours();
        const msg = document.getElementById('greeting');

        if (hour < 12) msg.innerText = "Bom dia, Lara!";
        else if (hour < 18) msg.innerText = "Boa tarde, Lara!";
        else msg.innerText = "Boa noite, Lara!";
    },

    // Registra ações dinamicamente na lista de notificações
    logAction(section) {
        const list = document.getElementById('notifications-list');
        const newItem = document.createElement('p');
        newItem.className = 'text-blue';
        newItem.style.backgroundColor = 'rgba(255,255,255,0.5)';
        newItem.style.padding = '5px';
        newItem.style.borderRadius = '5px';

        newItem.innerHTML = `<strong>${new Date().toLocaleTimeString()}</strong> - Você clicou em <u>${section}</u> para verificar detalhes.`;

        // Adiciona no topo da lista
        list.prepend(newItem);
    }
};

// Executa o init assim que o DOM carregar
document.addEventListener('DOMContentLoaded', () => app.init());