(function() {
  emailjs.init({
    publicKey: "UuCklESjDvEJQWcEQ", // Replace with your actual public key
  });
})();

function sendEmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  emailjs.send('service_65lhgli', 'template_hlkly9r', templateParams)
    .then((response) => {
      alert("Message sent successfully!");
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((error) => {
      alert("Failed to send message. Check console.");
      console.error('FAILED...', error);
    });
}

document.querySelector("#contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  sendEmail();
});
