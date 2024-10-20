document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Perform validation
    if (!name || !email || !rating || !comments) {
        alert('Please fill out all fields.');
        return;
    }

    // Create a feedback object
    const feedback = {
        name: name,
        email: email,
        rating: rating,
        comments: comments
    };

    // Send feedback data to the server (dummy implementation here)
    console.log('Feedback submitted:', feedback);

    // Reset the form
    document.getElementById('feedbackForm').reset();

    // Show a success message
    alert('Thank you for your feedback!');
});
