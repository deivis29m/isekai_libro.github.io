var paginas = [
  { archivo: 'pagina1.txt' },
  { archivo: 'pagina2.txt' },
  { archivo: 'pagina3.txt' }
];

var pages = document.querySelectorAll('.page');
var currentPage = 0;

function showPage(pageIndex) {
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.opacity = 0;
  }
  pages[pageIndex].style.opacity = 1;
  currentPage = pageIndex;
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
    cargarPagina(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
    cargarPagina(currentPage);
  }
}

var xhr = new XMLHttpRequest();
xhr.open('GET', paginas[currentPage].archivo, true);
xhr.onload = function() {
  if (this.status === 200) {
    document.getElementById('page1').innerHTML = this.responseText;
  }
};
xhr.send();

function cargarPagina(pagina) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', paginas[pagina].archivo, true);
  xhr.onload = function() {
    console.log("Página cargada:", paginas[pagina].archivo); // Verificar si se carga correctamente
    if (this.status === 200) {
      document.getElementById('page' + (pagina + 1)).innerHTML = this.responseText;
    }
  };
  xhr.send();
}

showPage(currentPage);
