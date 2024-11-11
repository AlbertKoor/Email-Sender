emailjs.init("iJaFEWUwkzUUldCJ_");

const sendBtn = document.querySelector('.send-btn');
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

function sendEmail() {
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_kd7njyr", "template_ltwiplb", {
        to_email: to,
        subject: subject,
        message: message
    })
        .then(function () {
            result.innerHTML = "Email Enviado!";
            result.style.opacity = 1;
        }, function (error) {
            result.innerHTML = "Erro no Envio!";
            result.style.opacity = 1;
        });
}