//Importamos el css desde la carpeta donde se encuentra
import './css/style.css';

//Importamos las funciones que se necesitan para que funcione la aplicación
import { paginacion } from './js/paginacion';

//Elementos del DOM
const form = document.querySelector('form');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnInicio = document.getElementById('btn-inicio');
const btnFin = document.getElementById('btn-fin');

//Variables para la paginación
let paginaActual = 1;
let totalPaginas;


//--------------------- EVENTOS ---------------------
form.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    totalPaginas = await paginacion(paginaActual);
});
btnNext.addEventListener('click', () => {
    //Deshabilitamos el botón para que el usuario no haga click más de una vez
    btnNext.disabled = true;
    //Cuando avanzamos página queremos sumar una página más a paginaActual
    paginaActual++;
    paginacion(paginaActual);
    btnNext.disabled = false;

});
btnPrev.addEventListener('click', () => {
    //Deshabilitamos el botón para que el usuario no haga click más de una vez
    btnPrev.disabled = true;
    //Cuando retrocedemos una página queremos restar una página a paginaActual
    paginaActual--;
    paginacion(paginaActual);
    btnPrev.disabled = false;
});
btnInicio.addEventListener('click', () => {
    btnInicio.disabled = true;
    paginaActual = 1;
    paginacion(paginaActual);
    btnInicio.disabled = false;
});
btnFin.addEventListener('click', () => {
    btnFin.disabled = true;
    paginaActual = totalPaginas;
    paginacion(paginaActual);
    btnFin.disabled = false;
});
