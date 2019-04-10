console.log("exercice 7");

function getData() {
  return data; // data is defined in DATA.js file
}

function addLineToTable(ligne){

  //console.log(ligne);
  $('#tableau').append("<tr class=lign><td>"+ligne.email+"</td><td>"+ligne.name['first']+"</td><td>"+ligne.name['last']+"</td><td>"+ligne.phone+"</td></tr>");
}

datas=getData();
let nbpage=datas.length/50;
for(let i=1;i<=nbpage;i++){
  $('body').append("<input type=button value="+i+" class=page>");
}

$('.page').on('click',function(){
  $('.lign').remove();
  let numeropage=$(this).val();
  console.log(numeropage);
  var page=datas.slice((numeropage-1)*50,numeropage*50);
  console.log(page);
  page.forEach(function(data){
  
    console.log(nbpage);
    addLineToTable(data);
  });
});

/*datas.forEach(function(data){
  
  console.log(nbpage);
  addLineToTable(data);
});*/

