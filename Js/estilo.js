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