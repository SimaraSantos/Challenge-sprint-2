const app = {
    // 1. Iniciar App
    init() {
        this.updateGreeting();
        this.addInitialLogs();
        console.log("Sistema Care+ iniciado.");
    },

    // 2. Saudação Dinâmica
    updateGreeting() {
        const hour = new Date().getHours();
        const welcomeText = document.getElementById('welcome-text');

        if (hour < 12) welcomeText.innerText = "Bom dia, Lara!";
        else if (hour < 18) welcomeText.innerText = "Boa tarde, Lara!";
        else welcomeText.innerText = "Boa noite, Lara!";
    },

    // 3. Navegação e Logs
    navigate(section) {
        const container = document.getElementById('log-container');
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.innerHTML = `<strong>${new Date().toLocaleTimeString()}</strong> - Você acessou: ${section}`;

        container.prepend(entry); // Adiciona no topo
    },

    addInitialLogs() {
        this.navigate("Dashboard Inicial");
    }
};

// Rodar ao carregar a página
document.addEventListener('DOMContentLoaded', () => app.init());