
function sendEmail() {
	const templateParams = {
		name: document.querySelector("#name").value,
		email:document.querySelector('#email').value,
		subject:document.querySelector("#subject").value,
		message:document.querySelector("#message").value,
	};

emailjs.send('service_65lhgli', 'template_hlkly9r', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);

};

alert("JESUS");