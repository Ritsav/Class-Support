
const name_input = document.getElementById('name')
const name_msg = document.getElementById('name_msg')

const name_validate = () => {
    let name = name_input.value

    if(!name.match(/^[a-zA-Z]+$/)) {
        display_msg(name_msg, "Name must be only alphabets")
    }
    else if(!name.match(/^.{3,10}$/)) {
        display_msg(name_msg, "Name must be at least 3 and at most 10 characters")
    }
    else {
        display_msg(name_msg, "Valid Name", 'green')
    }
}

const phone_input = document.getElementById('phone')
const phone_msg = document.getElementById('phone_msg')

const phone_validate = () => {
    let phone = phone_input.value

    if(!phone.match(/^[0-9]+$/)) {
        display_msg(phone_msg, 'Number must only be digits')
    } else if(!phone.match(/^.{10}$/)) {
        display_msg(phone_msg, "Name must be 10 characters")
    }
}

function display_msg(element, msg, color = "red") {
    element.innerHTML = msg
    element.style.color = color
}

document.getElementById('name').addEventListener(
    'keyup', name_validate
)
