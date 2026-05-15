const app = {
    init() {
        this.updateGreeting();
        this.searchLogic();
        console.log("Care Plus Dashboard interativo carregado.");
    },

    updateGreeting() {
        const hour = new Date().getHours();
        const msg = document.getElementById('greeting-msg');
        if (hour < 12) msg.innerText = "Bom dia, Lara!";
        else if (hour < 18) msg.innerText = "Boa tarde, Lara!";
        else msg.innerText = "Boa noite, Lara!";
    },

    action(name) {
        const logs = document.getElementById('dynamic-logs');
        const entry = document.createElement('p');
        entry.className = "log-item";
        entry.innerHTML = `<strong>${new Date().toLocaleTimeString()}</strong> - Acesso solicitado para: <u>${name}</u>`;
        logs.prepend(entry);
    },

    closeNotif() {
        document.getElementById('notif-waze').style.display = 'none';
    },

    searchLogic() {
        const input = document.getElementById('search-box');
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') alert('Pesquisando por: ' + input.value);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());