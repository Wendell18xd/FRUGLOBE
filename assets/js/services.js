$(document).ready(function () {

    $("#cboCategoria").on("change", function () {
        cambiar_producto();
    });

    $("#txtBuscar").on("keyup", function (e) {
        search_producto(e.target.value);
    });

    listar_productos();
});

let arr_filtro = [...arr_productos]


function cambiar_producto() {
    const val = $("#cboCategoria").val();
    if (val != "") {
        arr_filtro = arr_productos.filter(f => f.tipo == val)
    } else[
        arr_filtro = arr_productos
    ]
    listar_productos();
}

function search_producto(value) {
    const search = value.toLowerCase();
    arr_filtro = arr_productos.filter(f => f.nombre.toLowerCase().indexOf(search) !== -1 || f.descripcion.toLowerCase().indexOf(search) !== -1)
    listar_productos();
}

function listar_productos() {

    let html = "";
    $("#rowProductos").html("");

    arr_filtro.forEach(e => {
        html += `<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">`
        html += `<div class="service-item  position-relative">`
        html += `<img src="${e.img}" alt="${e.nombre}" width="100%">`
        html += `<h3>${e.nombre}</h3>`
        html += `<p>${e.descripcion}</p>`
        html += `<a href="${e.page}.html" class="readmore stretched-link">Ver Producto <i class="bi bi-arrow-right"></i></a>`
        html += `</div>`
        html += `</div>`
    });

    if (arr_filtro.length > 0) {
        $("#rowProductos").html(html);
    } else {
        $("#rowProductos").html("<center>No se encontraron resultados..</center>");
    }

}