document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
    };
    await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });
    alert('Contact form submitted!');
});

document.getElementById('feedbackForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = {
        feedbackName: event.target.feedbackName.value,
        feedbackMessage: event.target.feedbackMessage.value,
    };
    await fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });
    alert('Feedback form submitted!');
});
