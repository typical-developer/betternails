class Control {
    static init() {
        Control.handleContactFormSubmit()
    }

    static company = {
        started: new Date(2021, 0, 1),
        name: 'Nails by Betty',
        address: 'RSU Backgate, Port Harcourt, Rivers State',
        phone: '+2347045942462',
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

    static handleContactFormSubmit() {
        function updateStatus(message, isSuccess) {
            let status = document.getElementById("form-status");

            status.innerHTML = message;
            if (isSuccess) {
                status.classList.remove("text-red-500");
                status.classList.add("text-green-500");
            } else {
                status.classList.remove("text-green-500");
                status.classList.add("text-red-500");
            }
        }

        let form = document.getElementById("contact-form");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            
            // Convert FormData to a plain object, then to JSON
            let formData = new FormData(form);
            let dataObject = Object.fromEntries(formData.entries());

            try {
                let response = await fetch(form.action, {
                    method: form.method,
                    headers: {
                        'Content-Type': 'application/json', // Send JSON data
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(dataObject)
                });

                if (response.ok) {
                    updateStatus("Thanks for your reaching out!", true);
                    form.reset();
                } else {
                    let result = await response.json();
                    if (result.errors) {
                        updateStatus(result.errors.map(error => error.message).join(", "), false);
                    } else {
                        updateStatus("Oops! There was a problem submitting your form", false);
                    }
                }
            } catch (error) {
                updateStatus("Oops! There was a problem submitting your form", false);
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

    document.querySelector('#company-duration').textContent = Control.getCompanyDuration();
});