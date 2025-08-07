
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
    }
    else if (!phone.match(/^[9][78][0123456][0-9]+$/)) {
        display_msg(phone_msg, "Phone number must begin with followed by 7 or 8, followed by 0 - 6 and then other numbers")
    }
    else if(!phone.match(/^.{10}$/)) {
        display_msg(phone_msg, "Name must be 10 characters")
    } 
    else{
        display_msg(phone_msg, "Valid Number", 'green')
    }
}

function display_msg(element, msg, color = "red") {
    element.innerHTML = msg
    element.style.color = color
}

document.getElementById('name').addEventListener(
    'keyup', name_validate
)

phone_input.addEventListener('keyup', phone_validate)
