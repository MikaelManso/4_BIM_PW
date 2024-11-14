document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Obtendo os dados do formulário
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Verificando se o usuário e a senha estão corretos
    let users = JSON.parse(localStorage.getItem("users")) || []; // Obtém os usuários do localStorage

    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);

    if (user) {
        window.location.href = "index.html"; // Página inicial do usuário após o login
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
});
