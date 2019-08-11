document.querySelector('.contact-us input[type=submit]')
    .addEventListener('click', sendMessage);

function sendMessage(e) {
    e.preventDefault();
    fetch('sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.querySelector('.contact-us input[name=user_name]').value,
            email: document.querySelector('.contact-us input[name=user_email]').value,
            message: document.querySelector('.contact-us input[name=user_message]').value
            })
    })
        .then(_ => document.querySelector('.contact-us').reset());
}