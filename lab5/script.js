const servicesButton = document.querySelector('.buttons button:nth-child(2)');
        const contactButton = document.querySelector('.buttons button:nth-child(1)');
        const servicesSection = document.querySelector('.section');
        const contactSection = document.querySelector('.contact');
        const contactForm = document.getElementById('contactForm');

        servicesButton.addEventListener('click', () => {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        });

        contactButton.addEventListener('click', () => {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            window.alert("Thanks for contacting us! We will be in touch with you shortly.");
        });