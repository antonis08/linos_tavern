document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('header');
  
    if (hamburger) {
    hamburger.addEventListener('click', function () {
    header.classList.toggle('nav-open');
    });
    }
  
    // Simple Image Modal (Example - adapt for your gallery)
    const galleryImages = document.querySelectorAll('.gallery-images img');
  
  
    //Form Submission Handling(Example)
    const contactForm = document.getElementById('contact-form'); // Assuming you add a contact form
  
    if(contactForm){
    contactForm.addEventListener('submit', function(event){
    event.preventDefault(); //Prevent actual submission for demonstration purposes
  
    // You would usually gather form data here and send it to a server
  
    alert("Form submitted successfully(Demo).");
  
    // Optionally reset the form:
    //contactForm.reset();
  
    });
    }
   });
  