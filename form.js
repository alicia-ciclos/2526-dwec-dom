"use strict"

const form = [
    {
        "tag": "input",
        "type": "text",
        "id": "username",
        "name": "username",
        "class": "user-input",
        "label": "Identificador de usuario",
    },
    {
        "tag": "input",
        "type": "email",
        "id": "email",
        "name": "email",
        "class": "email-input",
        "label": "Correo electrónico",
    },
    {
        "tag": "input",
        "type": "password",
        "id": "password",
        "name": "password",
        "class": "password-input",
        "label": "Contraseña",
    },
    {
        "tag": "input",
        "type": "password",
        "id": "confirm_password",
        "name": "confirm_password",
        "class": "password-input",
        "label": "Confirmar contraseña",
    },
    {
        "tag": "button",
        "id": "submit-btn",
        "class": "submit-button",
        "value": "Crear usuario",
    }
]


const container = document.createElement('main')
container.id = "main"
document.querySelector('body').appendChild(container)

const formulario = document.createElement('form')

for(let elem of form) {
    const div = document.createElement('div')

    if(elem.label) {
        const etiqueta = document.createElement('label')
        etiqueta.textContent = elem.label
        etiqueta.setAttribute('for', elem.id)
        div.appendChild(etiqueta)
    }

    const tag = document.createElement(elem.tag)
    tag.id = elem.id
    tag.setAttribute('class', elem.class)
    tag.classList.add(elem.class)

    if(elem.tag === 'input') {
        tag.setAttribute('type', elem.type)
        tag.setAttribute('name', elem.name)
    }

    if(elem.tag === 'button') {
        tag.textContent = elem.value
    }

    div.appendChild(tag)
    formulario.appendChild(div)
}


container.appendChild(formulario)