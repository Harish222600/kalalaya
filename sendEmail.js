function sendEmail() {
    emailjs.init('3XfS_BlGJ9Afb3uq2');
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send('service_04fnrbo', 'template_ppwbmgg', {
        from_name: name,
        reply_to: email,
        message_html: message
    })
    .then(function(response) {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
    }, function(error) {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again later.');
    });
}
