import Swal from "sweetalert2";

function validarCampos(elementoID) {
        
    if($(`#${elementoID}`).val() === "") {

      $(`#${elementoID}`).addClass("invalido");
      $(`#${elementoID}`).removeClass("valido");
      return 1;

    } else {

      $(`#${elementoID}`).addClass("valido");
      $(`#${elementoID}`).removeClass("invalido");
      return 0;

    }


  }

  function criarAlerta(titulo, mensagem, icone) {
    return Swal.fire(titulo, mensagem, icone);
  }