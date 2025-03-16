/**
 * Control class encapsulates methods to initialize and handle
 * dynamic content updates, form submission, and accordion interactions.
 */
class Control {
    /**
     * Initialize all control methods on page load.
     */
    static init() {
        Control.handleContactFormSubmit();
        Control.setDynamicContent();
        Control.handleAccordionClicks();
    }

    /**
     * Company information object.
     * @property {Date} started - The date when the company started.
     * @property {string} name - The name of the company.
     * @property {string} address - The company's address.
     * @property {string} phone - The company's phone number.
     * @property {string} phone_formatted - The formatted company phone number.
     * @property {string} email - The company's email address.
     */
    static company = {
        started: new Date(2021, 0, 1),
        name: 'Nails by Betty',
        address: 'RSU Backgate, Port Harcourt, Rivers State',
        phone: '+2347045942462',
        phone_formatted: '(+234) 7045-942-462',
        email: '',
    };

    /**
     * Calculates and returns the duration of the company.
     * If the company started in the current year, it returns the current year,
     * otherwise it returns a range from the start year to the current year.
     *
     * @returns {string|number} - The company duration or current year.
     */
    static getCompanyDuration() {
        const currentYear = new Date().getFullYear();
        const companyStartedYear = this.company.started.getFullYear();

        if (companyStartedYear === currentYear) {
            return currentYear;
        }

        return `${companyStartedYear} - ${currentYear}`;
    }

    /**
     * Updates dynamic content in the DOM using company data.
     * It targets elements with specific data attributes and replaces their text.
     */
    static setDynamicContent() {
        // Set company duration for elements with x-company-duration attribute
        document.querySelectorAll('[x-company-duration]').forEach(element => {
            element.innerText = Control.getCompanyDuration();
        });
        // Set company address for elements with x-company-address attribute
        document.querySelectorAll('[x-company-address]').forEach(element => {
            element.innerText = Control.company.address;
        });
        // Set company phone number for elements with x-company-phone attribute
        document.querySelectorAll('[x-company-phone]').forEach(element => {
            element.innerText = Control.company.phone_formatted;
        });
    }

    /**
     * Handles the contact form submission.
     * It prevents default form submission, converts form data to JSON,
     * sends it to the provided endpoint, and displays appropriate toast notifications.
     */
    static handleContactFormSubmit() {
        const form = document.getElementById("contact-form");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            // Convert form data to a plain object, then stringify to JSON
            const formData = new FormData(form);
            const dataObject = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('https://formspree.io/f/xdkekeqg', {
                    method: form.method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(dataObject)
                });

                if (response.ok) {
                    Toastify({
                        text: "Thanks for reaching out!",
                        duration: 3000,
                        gravity: "bottom",
                        position: "center",
                        backgroundColor: "#15803D",
                    }).showToast();
                    form.reset();
                } else {
                    const result = await response.json();
                    // Check if errors exist and display them; otherwise show a generic error message.
                    if (result.errors) {
                        Toastify({
                            text: result.errors.map(error => error.message).join(", "),
                            duration: 5000,
                            gravity: "bottom",
                            position: "center",
                            backgroundColor: "#B91C1C",
                        }).showToast();
                    } else {
                        Toastify({
                            text: "Oops! There was a problem submitting your form",
                            duration: 5000,
                            gravity: "bottom",
                            position: "center",
                            backgroundColor: "#B91C1C",
                        }).showToast();
                    }
                }
            } catch (error) {
                Toastify({
                    text: "Oops! There was a problem submitting your form",
                    duration: 5000,
                    gravity: "bottom",
                    position: "center",
                    backgroundColor: "#B91C1C",
                }).showToast();
                console.error(error);
            }
        });
    }

    /**
     * Handles clicks on accordion buttons.
     * It toggles the visibility of the associated accordion content and updates the sign (+/-).
     */
    static handleAccordionClicks() {
        document.querySelectorAll('[x-accordion-button]').forEach(element => {
            element.addEventListener('click', function () {
                // Find the parent accordion container and the content element.
                const parent = element.closest('[x-accordion]');
                const content = element.nextElementSibling;
                const isOpen = !content.classList.contains("hidden");

                // Hide all accordion content within the same container and reset signs.
                parent.querySelectorAll("p").forEach(p => p.classList.add("hidden"));
                parent.querySelectorAll("[x-accordion-button] [x-accordion-button-sign]").forEach(span => {
                    span.textContent = "+";
                });

                // If the content was hidden, show it and update the sign.
                if (!isOpen) {
                    content.classList.remove("hidden");
                    element.querySelector("[x-accordion-button-sign]").textContent = "-";
                }
            });
        });
    }
}

// Wait for the DOM to load before initializing controls and adding smooth scrolling behavior.
document.addEventListener('DOMContentLoaded', function () {
    Control.init();

    // Implement smooth scrolling for all anchor links with href starting with "#"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
