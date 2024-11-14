document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Obtendo os dados do formulário
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Verificando se a senha e a confirmação de senha coincidem
    if (newPassword !== confirmPassword) {
        alert("As senhas não coincidem! Por favor, tente novamente.");
        return;
    }

    // Verificando se o usuário já existe
    let users = JSON.parse(localStorage.getItem("users")) || []; // Obtém os usuários existentes ou cria um array vazio

    const userExists = users.some(user => user.username === newUsername);
    if (userExists) {
        alert("Nome de usuário já existe! Tente outro.");
        return;
    }

    // Criando um novo usuário
    const newUser = {
        username: newUsername,
        password: newPassword
    };

    // Salvando o novo usuário no localStorage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Redirecionando o usuário para a página de login após o cadastro
    alert("Cadastro realizado com sucesso! Você será redirecionado para a página de login.");
    window.location.href = "login.html";
});
