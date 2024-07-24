document.addEventListener("DOMContentLoaded", function() {
    // Initialize local storage if not present
    initializeStorage();

    // Event listeners for forms and buttons
    if (document.getElementById("login-form")) {
        document.getElementById("login-form").addEventListener("submit", handleLogin);
    }

    if (document.getElementById("register-form")) {
        document.getElementById("register-form").addEventListener("submit", handleRegister);
    }

    if (document.getElementById("client-form")) {
        document.getElementById("client-form").addEventListener("submit", handleClientRegistration);
    }

    if (document.getElementById("address-form")) {
        document.getElementById("address-form").addEventListener("submit", handleAddressRegistration);
    }

    if (document.getElementById("export-button")) {
        document.getElementById("export-button").addEventListener("click", handleExport);
    }
});

function initializeStorage() {
    if (!localStorage.getItem("clients")) {
        localStorage.setItem("clients", JSON.stringify([]));
    }
    if (!localStorage.getItem("addresses")) {
        localStorage.setItem("addresses", JSON.stringify([]));
    }
}

function handleLogin(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = "dashboard.html";
    } else {
        showError("Usuário ou senha inválidos.");
    }
}

function handleRegister(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.username === username)) {
        showError("Usuário já registrado.");
    } else {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registro bem-sucedido.");
        window.location.href = "login.html";
    }
}

function handleClientRegistration(event) {
    event.preventDefault();
    const fullName = event.target["full-name"].value;
    const cpf = event.target.cpf.value;
    const birthDate = event.target["birth-date"].value;
    const phone = event.target.phone.value;
    const cellphone = event.target.cellphone.value;

    const clients = JSON.parse(localStorage.getItem("clients"));
    clients.push({ fullName, cpf, birthDate, phone, cellphone });
    localStorage.setItem("clients", JSON.stringify(clients));
    alert("Cliente cadastrado com sucesso.");
}

function handleAddressRegistration(event) {
    event.preventDefault();
    const cep = event.target.cep.value;
    const street = event.target.street.value;
    const neighborhood = event.target.neighborhood.value;
    const city = event.target.city.value;
    const state = event.target.state.value;
    const country = event.target.country.value;
    const clientId = parseInt(event.target["client-id"].value);
    const mainAddress = event.target["main-address"].checked;

    const addresses = JSON.parse(localStorage.getItem("addresses"));
    addresses.push({ cep, street, neighborhood, city, state, country, clientId, mainAddress });
    localStorage.setItem("addresses", JSON.stringify(addresses));
    alert("Endereço cadastrado com sucesso.");
}

function handleExport() {
    const clients = JSON.parse(localStorage.getItem("clients"));
    const addresses = JSON.parse(localStorage.getItem("addresses"));
    const data = { clients, addresses };
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "database.json";
    a.click();
    URL.revokeObjectURL(url);
}

function showError(message) {
    const errorElement = document.querySelector(".error-message");
    if (errorElement) {
        errorElement.textContent = message;
    }
}
