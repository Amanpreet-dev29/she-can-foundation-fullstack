const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch('/contact', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            name,
            email,
            message
        })

    });

    const data = await response.json();

    document.getElementById('responseMessage').innerText =
        data.message;

    form.reset();

});