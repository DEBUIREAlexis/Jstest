console.log("exercice 6");

$('#connect').on('click',()=>{
    //alert('sa marche?');
    console.log($('#mail').val());
    console.log($('#pwd').val());
    if($('#mail').val().length<1){
        alert('cest vide!!');
    }
    if($('#pwd').val().length<1){
        alert('Sa aussi!!');
    }
})