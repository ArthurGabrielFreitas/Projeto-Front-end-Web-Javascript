window.addEventListener("DOMContentLoaded", function (){
    var btn1 = this.document.getElementById("btnClicar1");
    var btn2 = this.document.getElementById("btnClicar2");
    var btn3 = this.document.getElementById("btnClicar3");

    btn1.addEventListener("click", function () {
        exibirMsg("você clicou no botão 1");
    });
    btn2.addEventListener("click", function () {
        exibirMsg("botão 2 ativado");
    });
    btn3.addEventListener("click", () => console.log(10+20));

    function exibirMsg(texto){
        alert(texto);
    }
})