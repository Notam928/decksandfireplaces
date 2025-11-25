// Initialiser EmailJS
(function(){
    emailjs.init("GtkxbZitzH48XRdPf"); // remplace par ta Public Key EmailJS
  })();

//   const name_ = this.name.value.trim();
//   const email = this.email.value.trim();
//   const services = this.services.value;
//   const message = this.message.value.trim();
//   const phone = this.phone.value.trim();
//   const adress = this.adresse.value.trim();

//   // Vérification des champs
//   if (!name_ || !email || !services || !message || !phone || !adress) {
//     alert("Veuillez remplir tous les champs.");
//     return;
//   }
  
  // Gérer l’envoi du formulaire
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.sendForm('service_ar4kt3t', 'template_kojud9c', this)
      .then(function(response) {
        alert("Email envoyé avec succès !");
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        alert("Erreur lors de l'envoi...");
        console.log('FAILED...', error);
      });
  });
  