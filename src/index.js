class Control {
    static init() {
        Control.handleContactFormSubmit()
        Control.setDynamicContent()
    }

    static company = {
        started: new Date(2021, 0, 1),
        name: 'Nails by Betty',
        address: 'RSU Backgate, Port Harcourt, Rivers State',
        phone: '+2347045942462',
        phone_formatted: '(234) 7045-942-462',
        email: '',
    }

    static getCompanyDuration() {
        let currentYear = new Date().getFullYear();
        let companyStartedYear = this.company.started.getFullYear();

        if (companyStartedYear === currentYear) {
            return currentYear;
        }

        return `${companyStartedYear} - ${currentYear}`;
    }

    static setDynamicContent() {
        document.querySelector('#company-duration').textContent = Control.getCompanyDuration();

        document.querySelectorAll('[x-company-address]').forEach(element => {
            element.innerText = Control.company.address;
        });
        document.querySelectorAll('[x-company-phone]').forEach(element => {
            element.innerText = Control.company.phone_formatted;
        });
    }

    static handleContactFormSubmit() {
        let form = document.getElementById("contact-form");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            
            // Convert FormData to a plain object, then to JSON
            let formData = new FormData(form);
            let dataObject = Object.fromEntries(formData.entries());

            try {
                let response = await fetch('https://formspree.io/f/xdkekeqg', {
                    method: form.method,
                    headers: {
                        'Content-Type': 'application/json', // Send JSON data
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(dataObject)
                });

                if (response.ok) {
                    Toastify({text: "Thanks for reaching out!", duration: 3000, gravity: "bottom", position: "center", backgroundColor: "#15803D",}).showToast();
                    form.reset();
                } else {
                    let result = await response.json();
                    if (result.errors) {
                        Toastify({text: result.errors.map(error => error.message).join(", "), duration: 5000, gravity: "bottom", position: "center", backgroundColor: "#B91C1C", }).showToast();
                    } else {
                        Toastify({text: "Oops! There was a problem submitting your form", duration: 5000, gravity: "bottom", position: "center", backgroundColor: "#B91C1C", }).showToast();
                    }
                }
            } catch (error) {
                Toastify({text: "Oops! There was a problem submitting your form", duration: 5000, gravity: "bottom", position: "center", backgroundColor: "#B91C1C", }).showToast();
                console.error(error);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    Control.init();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});