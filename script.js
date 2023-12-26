function mostrarFormulario(id) {
    // Ocultar todos os formulários
    var formularios = document.getElementsByClassName('formulario');
    for (var i = 0; i < formularios.length; i++) {
        formularios[i].style.display = 'none';
    }

    // Mostrar o formulário solicitado
    document.getElementById(id).style.display = 'block';
}
