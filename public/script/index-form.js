document.querySelector('.contact input[type=submit]')
    .addEventListener('click', sendForm);
    
function sendForm(event) {
    const form = document.querySelector('.contact');
    
    if (form.checkValidity()) {
        event.preventDefault();
        fetch('form', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: document.querySelector('.contact input[name=name]').value,
                email: document.querySelector('.contact input[name=email]').value,
                message: document.querySelector('.contact textarea[name=message]').value
            })
        })
        .then(response => {
            form.reset();
        });
    }
}