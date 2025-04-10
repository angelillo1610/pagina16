const nombreobj = document.querySelector('#nombre');
let nombreForm = '';

const emailobj = document.querySelector('#email');
let emailform = '';

const comentarioobj = document.querySelector('#mensaje');
let mensajeform = '';

const mensajeEstado = document.querySelector('#mensajeEstado');

nombreobj.addEventListener('input', function(evento) {
    nombreForm = evento.target.value;
});

emailobj.addEventListener('input', function(evento) {
    emailform = evento.target.value;
});

comentarioobj.addEventListener('input', function(evento) {
    mensajeform = evento.target.value;
});

const btnEnviar = document.querySelector('#botonEnviar');
btnEnviar.addEventListener('click', function(evento) {
    evento.preventDefault();
    mensajeEstado.innerHTML = '';  // Limpiar mensaje previo

    if (nombreForm === '') {
        mensajeEstado.textContent = 'Falta el nombre';
        mensajeEstado.style.color = 'red';
    } else if (emailform === '') {
        mensajeEstado.textContent = 'Falta el correo';
        mensajeEstado.style.color = 'red';
    } else if (!emailform.includes('@') || !emailform.endsWith('.com')) {
        mensajeEstado.textContent = 'El correo debe contener un "@" y terminar con ".com"';
        mensajeEstado.style.color = 'red';
    } else if (mensajeform === '') {
        mensajeEstado.textContent = 'Falta el comentario';
        mensajeEstado.style.color = 'red';
    } else {
        mensajeEstado.textContent = 'Enviando sus datos...';
        mensajeEstado.style.color = 'green';
        
        // Aquí puedes agregar el código para enviar los datos al servidor, si fuera necesario
    }
});





/*const elementoHtml = document.querySelector('#texto_header');
elementoHtml.textContent = 'Contenido modificado desde JS';

console.log(elementoHtml);

const otroElemento = document.getElementById('texto_header');
console.log(otroElemento);

const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces);
*/


/*const nombreObj = document.querySelector('#nombre');
let nombreForm ='';
nombreObj.addEventListener('imput', function(){
    console.log(evento)
    console.log(evento.target.value);
    //console.log('El texto cambio');
});
*/
/*const btnEnviar = document.querySelector('#botonEnviar');
btnEnviar.addEventListener('click',funciton(evento) {
    evento.preventDefault();
    if(nombreForm ==='');
    {
    console.log('El campo nombre es obligatorio');
    }
    else{
    console.log('enviando datos...')
}
});
*/
/*console.log(nombreObj);

const nuevoElemento=window.document.createElement('P');
nuevoElemento.text = "Nuevo Elemento desde JS";
nuevoElemento.classList.add(centrar-texto);
console.log(nuevoElemento);

const formularioElemento = document.querySelector('.formulario');
formularioElemento.appendChild()*/