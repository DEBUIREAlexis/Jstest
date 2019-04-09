console.log("exercice 4");

let panier=0;

$('.btn-danger').on('click',()=>{
    let $aut=$('.form-control').val();
alert("Merci "+ $aut +" ,nous vous tiendrons informé des différentes offres");
});

$('#myNavbar ul li:nth-child(2)').on('dblclick',function(){
    $(this).hide();
})

//$article=$("#myNavbar ul li").last().text();

$('.panel-body').on('click',()=>{
    panier+=1;
    $('.navbar-nav li a').last().html("<span class='glyphicon glyphicon-shopping-cart'></span>Cart "+panier);
})

$('.panel-primary img').on('mouseover',()=>{
    console.clear();
    console.log("L'utilisateur regarde: Ipads");
})

$('.panel-danger img').on('mouseover',()=>{
    console.clear();
    console.log("L'utilisateur regarde: Computers");
})

$('.panel-success img').on('mouseover',()=>{
    console.clear();
    console.log("L'utilisateur regarde: Mobiles");
})


$('input').on('keyup',function(){
    if(this.value.length>1){
        console.clear();
        console.log(this.value);
    }
})