const userName = document.getElementById("validationDefaultUsername");
const userLastName = document.getElementById("validationDefaultLastname");
const userMail = document.getElementById("validationDefaultEmail");
const nameError = document.getElementById("#validationDefaultLastname + span.name-error");
const emailError = document.getElementById("#validationDefaultEmail + span.email-error");

function validate() {
    console.log("validación!");

    if( userName.value == "" ) {
        alert( "Por favor ingresa tu nombre de usuario!" );
        userName.focus();
        return false;
    }
    if( userLastName.value == "" ) {
        alert( "Por favor ingresa tu Apellido!" );
        userLastName.focus();
        return false;
     }
     
    if( userMail.value == "" ) {
        alert( "Por favor ingresa tu mail!" );
        return false;
    }
    if( userMail.value.includes("@") == false ) {
        alert( "Por favor ingresa un arroba" );
        return false;
    }

    return(true);
      
}

