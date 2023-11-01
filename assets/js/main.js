/*=============== EMAIL VALIDATION ===============*/
const form = document.getElementById('form'),
        email = document.getElementById('email'),
        pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        //validación de email --> expresión regular verifica que el correo electrónico tenga un formato que incluya caracteres antes y después del símbolo '@', seguido por un punto y una extensión de dominio de 2 a 3 caracteres en minúsculas.


//Cuando el usuario escribe o modifica algo en el campo, se activará este evento.
email.addEventListener ('input', () =>{

    // Evalúa si matchea el valor del campo 
    if (email.value.match(pattern)) {
        form.classList.add('valid')
        form.classList.remove('invalid')
    } else {
        form.classList.add('invalid')
        form.classList.remove('valid')
    }

    // Elimina la class, si el campo está vacío
    if (email.value == '') {
        form.classList.remove('invalid')
        form.classList.remove('valid')
    }
})