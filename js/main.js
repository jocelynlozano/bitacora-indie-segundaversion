window.addEventListener("load", cargarPagina)
    var cajaSelector = document.getElementById("cajaSelector");
    var seleccionar = document.getElementById("seleccionar");
    var contenedorDePublicacion = document.createElement("contenedorDePublicacion");
    var contenedorOpcion = document.createElement("div");

    
    function cargarPagina(){
        seleccionar.addEventListener("change", seleccionarOpcion);
    };
    
    function seleccionarOpcion(){
        var seleccionarValor = seleccionar.value;
        switch(seleccionar.value){
            case "Texto":
                texto();
                    break;
            case "Cita":
                cita();
                    break;
            case "Link":
                link();
                    break;
            case "Notas":
                notas();
                    break;
        }
    };

    function texto(){
        var input = document.createElement("input");
        var contenedor = document.createElement("div");
        var textarea = document.createElement("textarea");
        var botonCerrar = document.createElement("button");
        var botonPublicar = document.createElement("button");
        
        contenedor.setAttribute("id", "contenedor");
        input.setAttribute("placeholder", "escribe un titulo");
        textarea.setAttribute("placeholder", "escribe un texto");

        botonCerrar.textContent = "cerrar";
        botonPublicar.textContent = "publicar";

        contenedor.appendChild(input);
        contenedor.appendChild(textarea);
        contenedor.appendChild(botonCerrar);
        contenedor.appendChild(botonPublicar);
        
        cajaSelector.insertBefore(contenedorOpcion, cajaSelector.children[0]);
        contenedorOpcion.appendChild(contenedor);

        botonPublicar.addEventListener("click", publicar);
        botonCerrar.addEventListener("click", cerrar);
    };

    function cita(){
        var input = document.createElement("input");
        var contenedor = document.createElement("div");
        var textarea = document.createElement("textarea");
        var botonCerrar = document.createElement("button");
        var botonPublicar = document.createElement("button");
        
        contenedor.setAttribute("id", "contenedor");
        input.setAttribute("placeholder", "escribe un titulo");
        textarea.setAttribute("placeholder", "escribe un texto");

        botonCerrar.textContent = "cerrar";
        botonPublicar.textContent = "publicar";

        contenedor.appendChild(input);
        contenedor.appendChild(textarea);
        contenedor.appendChild(botonCerrar);
        contenedor.appendChild(botonPublicar);

        cajaSelector.insertBefore(contenedorOpcion, cajaSelector.children[0]);
        contenedorOpcion.appendChild(contenedor);

        botonPublicar.addEventListener("click", publicar);
        botonCerrar.addEventListener("click", cerrar)
    };

    function link(){
        var input = document.createElement("input");
        var contenedor = document.createElement("div");
        var textarea = document.createElement("textarea");
        var botonCerrar = document.createElement("button");
        var botonPublicar = document.createElement("button");
        
        contenedor.setAttribute("id", "contenedor");
        input.setAttribute("placeholder", "escribe un titulo");
        textarea.setAttribute("placeholder", "escribe un texto");

        botonCerrar.textContent = "cerrar";
        botonPublicar.textContent = "publicar";

        contenedor.appendChild(input);
        contenedor.appendChild(textarea);
        contenedor.appendChild(botonCerrar);
        contenedor.appendChild(botonPublicar);

        cajaSelector.insertBefore(contenedorOpcion, cajaSelector.children[0]);
        contenedorOpcion.appendChild(contenedor);

        botonPublicar.addEventListener("click", publicar);
        botonCerrar.addEventListener("click", cerrar)
    };

    function notas(){
        var input = document.createElement("input");
        var contenedor = document.createElement("div");
        var textarea = document.createElement("textarea");
        var botonCerrar = document.createElement("button");
        var botonPublicar = document.createElement("button");
        var cambioColor = document.createElement("input");
        
        contenedor.setAttribute("id", "contenedor");
        input.setAttribute("placeholder", "escribe un titulo");
        textarea.setAttribute("placeholder", "escribe un texto");
        cambioColor.setAttribute("type", "color");
        

        botonCerrar.textContent = "cerrar";
        botonPublicar.textContent = "publicar";

        contenedor.appendChild(input);
        contenedor.appendChild(textarea);
        contenedor.appendChild(botonCerrar);
        contenedor.appendChild(botonPublicar);
        contenedor.appendChild(cambioColor);

        cajaSelector.insertBefore(contenedorOpcion, cajaSelector.children[0]);
        contenedorOpcion.appendChild(contenedor);

        botonPublicar.addEventListener("click", publicar);
        botonCerrar.addEventListener("click", cerrar)
    };

    function cerrar(){
        this.parentElement.classList.add("ocultar");
    };

    function publicar(){
        var valorTitulo = document.createElement("h2");
        var valorParrafo = document.createElement("p");
        var divPublicacion = document.createElement("div");
        var divHora = document.createElement("div");
        var horaPub = fechaPub();
        var botonEliminar = document.createElement("button")

        var titulo = this.parentElement.children[0].value;
        var parrafo = this.parentElement.children[1].value;

        valorTitulo.innerText = titulo;
        valorParrafo.innerText = parrafo;
        divHora.innerHTML = horaPub;
        botonEliminar.textContent = "Eliminar";

        cajaSelector.appendChild(contenedorDePublicacion);
        contenedorDePublicacion.appendChild(divPublicacion);
        divPublicacion.appendChild(valorTitulo);
        divPublicacion.appendChild(valorParrafo);
        divPublicacion.appendChild(divHora);
        divPublicacion.appendChild(botonEliminar);

        botonEliminar.addEventListener("click", eliminar);
    };

    function eliminar(){
        this.parentElement.remove();
    };

    function fechaPub(){
        var fecha = new Date();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
        var segundo = fecha.getSeconds();
        var horaPub = hora + ":" + minuto + ":" + segundo;
        return horaPub;
    }

