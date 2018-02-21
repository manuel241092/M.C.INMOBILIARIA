$(document).ready(function(){
    //Menú hamburguesa inicio
    $(".burger").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    $(".cerrar").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    //Menú hamburguesa páginas normales
    $(".burger2").click(function(){
        $(".burger2").toggleClass("abierto");
        $(".menu2").animate({width:"toggle"},500)
        $(".menu2 a").toggleClass("aparicion");
    });
    //Cambio de estilo según scroll
    $(window).on("scroll", function(){
        var posicion = $("#primera").offset();

        if ($(window).scrollTop() > posicion.top -50 ) {
            $("header").removeClass("blanco");
        } else {
            $("header").addClass("blanco");
        }
    });
    //Scroll suave
    $("a").on("click", function(){
        if (this.hash !=="") {
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
        //Sintaxis de animate
        // animate({objeto}, duración)
    });
    //Pestañas
    $(".tabs li").click(function(){
        //Recoger en tabId el valor del atributo tab
        var tabId = $(this).attr("tab");
        //Elimina la clase current a pestañas y contenido
        $(".tabs li").removeClass("current");
        $(".tab-content").removeClass("current");
        //Añade la clase current a la pestaña pulsada
        $(this).addClass("current");
        //Añade la clase current al contenido con el mismo id que el valor de la variable tabId
        $("#"+tabId).addClass("current");
    });
    $(".btn-side").click(function(){
        $(".menu3").animate({width:"toggle"},500);
        $(".fa-arrow-circle-right").toggle();        //toggle es para cuando no me de una forma, me de la otra
        $(".fa-arrow-circle-left").toggle();
    });
    // Ventana Modal
    $("#open").click(function(){
        $(".overlay, .modal").addClass("visible");
    });
    $("#close, .overlay").click(function(){
        $(".overlay, .modal").removeClass("visible");
    });
});