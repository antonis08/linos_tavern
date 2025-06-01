document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav'); // CHANGE THIS: Select the 'nav' element, not the 'header'

    if (hamburger && nav) { // Ensure both elements exist
        hamburger.addEventListener('click', function () {
            nav.classList.toggle('active'); // CHANGE THIS: Toggle 'active' class on the 'nav' element
        });

        // OPTIONAL: Close the menu when a navigation link is clicked
        // This improves user experience on mobile
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            });
        });
    }

    // Simple Image Modal (Example - adapt for your gallery)
    const galleryImages = document.querySelectorAll('.gallery-images img');
    // ... (Your existing galleryImages logic)

    // Form Submission Handling (Example)
    const contactForm = document.getElementById('contact-form'); // Assuming you add a contact form

    if(contactForm){
        contactForm.addEventListener('submit', function(event){
            event.preventDefault(); // Prevent actual submission for demonstration purposes

            // You would usually gather form data here and send it to a server

            alert("Form submitted successfully (Demo).");

            // Optionally reset the form:
            // contactForm.reset();
        });
    }
});