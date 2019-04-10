console.log("exercice 6");

$('#connect').on('click',()=>{
    //alert('sa marche?');
    console.clear();
    console.log($('#mail').val());
    console.log($('#pwd').val());
    $('#mailInvalide').remove();
    $('#pdwInvalide').remove();
    var regex= new RegExp("[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})");
    var mail=$('#mail').val();
    var pdw=$('#pwd').val();
    if(regex.test(mail)===false){
        //alert('cest vide!!');
        $('.container').after("<div id='mailInvalide' class='alert alert-warning'>Mail Invalide</div>");
    }

    if(pdw.length<5){
        //alert('Sa aussi!!');
        $('.container').after("<div id='pdwInvalide' class='alert alert-warning'>Password Invalide: 6 caractère minimum</div>");
    }

    if(mail==='hello@me.com' && pdw==='secret8'){
        alert("Vous êtes connecté");
    }
})