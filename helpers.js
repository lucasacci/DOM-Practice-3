export function validarTarea(input){

    if(input.value.lenght > 3 && input.value.lenght <30){
        input.className = 'form-control is-valid'
    }else{
        input.className = 'form-control is-invalid'
    }

}