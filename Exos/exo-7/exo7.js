console.log("exo-7");



let trad={
    'car':'voiture',
    'house':'maison',
    'game':'jeux',
    'videoGame':'jeux vidéo',
    'show':'spectacle'};

jsonDatas.forEach(function(objet){
    for(tradindiv in trad){
        if(tradindiv===objet.type){
            objet.type=trad[tradindiv];
        }
    }
});

//le formulaire
var form = document.createElement('form');
form.id='newbutton';
document.body.appendChild(form);

//la textbox
var text1 = document.createElement('input');
text1.type='text';
text1.id='newbutton';
text1.value='';
var text1text=document.createTextNode('Hello');
text1.appendChild(text1text);
form.appendChild(text1);

//le boutton
var button = document.createElement('button');
button.type='button';
button.setAttribute('onclick','isChecked()');
button.id='newbutton';
button.value='Coucou';

var buttontext=document.createTextNode('Hello');
button.appendChild(buttontext);
form.appendChild(button);

//la checkbox
var checkbox = document.createElement('input');
checkbox.type='checkbox';
checkbox.id='newbutton';
//checkbox.setAttribute('onclick','search(true)');
form.appendChild(checkbox);

function isChecked(){
    if(checkbox.checked){
        search(true)
    }else{search(false)};
}

function search(checked){
    let afficheObjet=[];
    if(checked===true){
        jsonDatas.forEach(function(objet){
            if(objet.type===text1.value && objet.quantity>0){
                afficheObjet.push(objet);
        }
    
    })
        }else{
            jsonDatas.forEach(function(objet){
            if(objet.type===text1.value){
                afficheObjet.push(objet);
        }
    
    })
}

    console.clear();
    console.log(afficheObjet);
}

//console.log(trad);
//console.log(jsonDatas);