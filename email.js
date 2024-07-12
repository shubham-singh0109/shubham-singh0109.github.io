function sendMail() {
    const parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_1d1ofxr", "template_5rbwmdm", parms)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email Sent!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Email not sent. Please try again later.");
        });
}
