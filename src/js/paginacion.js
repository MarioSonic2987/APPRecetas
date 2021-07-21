//Importamos las funciones que se necesitan para que funcione la aplicación
import { conexionAPI } from './http-provider';
import { renderizarHTML } from './renderizar-html';

//Elementos del DOM
const input = document.getElementById('input');
const paginacionHTML = document.getElementById('paginacion');
const pagina = document.getElementById('pagina');

//Variables para la lógica
let numeroPaginas;
const elementosPorPagina = 10;




export const paginacion = async (paginaActual) => {
    if (paginaActual < 1 || paginaActual > numeroPaginas) {
        return;
    }
    let from = (paginaActual * elementosPorPagina) - elementosPorPagina;
    let to = from + elementosPorPagina;
    const datosApi = await conexionAPI(input.value, from, to);
    numeroPaginas = Math.ceil(datosApi.count / elementosPorPagina);
    // La API solo deja mostrar 10 páginas de resultados.
    (numeroPaginas > 10) ? (numeroPaginas = 10) : numeroPaginas;
    renderizarHTML(datosApi.hits);
    paginacionHTML.classList.remove('hidden');
    pagina.innerHTML = `Página: ${paginaActual} de ${numeroPaginas}`;

    return numeroPaginas;
}