const modalWrap = document.querySelector('.modal-wrap');
const modalWindow = document.querySelector('.modal-window');

document.getElementById('contact-form').onsubmit = function (event) {
    event.preventDefault()
    const [name, email, message] = Array.from(event.target).map(elem => elem.value)

    const formData = new FormData();
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)

    // fetch("https://getform.io/f/a0bca3c0-3c58-4f45-b418-fec594c802fc",
    //     {
    //         method: "POST",
    //         body: formData,
    //     })
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))

    for (let i = 0; i < 3; i++) {
        event.target[i].value = ''
    }

    showModal('Thanks for your message!', 'Back')
}

document.querySelector('.modal-window__button').onclick = hideModal;

function showModal(text, buttonText = 'OK'){
    modalWrap.classList.remove('hide')
    console.log(modalWindow.children);
    modalWindow.children[0].innerHTML = `${text}`
    modalWindow.children[1].textContent = `${buttonText}`
}

function hideModal (){
    modalWrap.classList.add('hide')
}
