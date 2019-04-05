console.log("exo-7");



let trad = {
    'car': 'voiture',
    'house': 'maison',
    'game': 'jeux',
    'videoGame': 'jeux vidéo',
    'show': 'spectacle'
};

jsonDatas.forEach(function (objet) {
    for (tradindiv in trad) {
        if (tradindiv === objet.type) {
            objet.type = trad[tradindiv];
        }
    }
});

//le formulaire
var form = document.createElement('form');
form.id = 'newform';
document.body.appendChild(form);

//la textbox
var text1 = document.createElement('input');
text1.type = 'text';
text1.id = 'newtext';
text1.value = '';
form.appendChild(text1);

//le boutton
var button = document.createElement('button');
button.type = 'button';
button.setAttribute('onclick', 'isChecked()');
button.id = 'newbutton';
button.value = 'Coucou';

var buttontext = document.createTextNode('Hello');
button.appendChild(buttontext);
form.appendChild(button);

//la checkbox
var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'newcheckbox';
form.appendChild(checkbox);

function isChecked() {
    if (checkbox.checked) {
        search(true)
    } else { search(false) };
}

//La liste déroulante de tri
var liste = document.createElement('select');
liste.id = 'liste';

var pasTri = document.createElement('option');
pasTri.value = '';
liste.appendChild(pasTri);
pasTri.appendChild(document.createTextNode('Pas de tri'));

var triNameAsc = document.createElement('option');
triNameAsc.value = 'Nom ASC';
liste.appendChild(triNameAsc);
triNameAsc.appendChild(document.createTextNode('Nom ASC'));

var triNameDsc = document.createElement('option');
triNameDsc.value = 'Nom DSC';
liste.appendChild(triNameDsc);
triNameDsc.appendChild(document.createTextNode('Nom DSC'));

var triPriceAsc = document.createElement('option');
triPriceAsc.value = 'Prix ASC';
liste.appendChild(triPriceAsc);
triPriceAsc.appendChild(document.createTextNode('Prix ASC'));

var triPriceDsc = document.createElement('option');
triPriceDsc.value = 'Prix DSC';
liste.appendChild(triPriceDsc);
triPriceDsc.appendChild(document.createTextNode('Prix DSC'));


document.body.appendChild(liste);


/////Formulaire ajout et ces fonction


var formCreation = document.createElement('form');
formCreation.id = 'newCreation';
document.body.appendChild(formCreation);

var textName = document.createElement('input');
textName.type = 'text';
textName.id = 'textName';
textName.value = '';
formCreation.appendChild(textName);

var textType = document.createElement('input');
textType.type = 'text';
textType.id = 'textType';
textType.value = '';
formCreation.appendChild(textType);

var textDescription = document.createElement('input');
textDescription.type = 'text';
textDescription.id = 'textDesc';
textDescription.value = '';
formCreation.appendChild(textDescription);

var textPrice = document.createElement('input');
textPrice.type = 'text';
textPrice.id = 'textPrice';
textPrice.value = '';
formCreation.appendChild(textPrice);

var textQuantity = document.createElement('input');
textQuantity.type = 'text';
textQuantity.id = 'textQty';
textQuantity.value = '';
formCreation.appendChild(textQuantity);

var textFirstName = document.createElement('input');
textFirstName.type = 'text';
textFirstName.id = 'textFirst';
textFirstName.value = '';
formCreation.appendChild(textFirstName);

var textAddress = document.createElement('input');
textAddress.type = 'text';
textAddress.id = 'textAddress';
textAddress.value = '';
formCreation.appendChild(textAddress);

var textTextLast = document.createElement('input');
textTextLast.type = 'text';
textTextLast.id = 'textLast';
textTextLast.value = '';
formCreation.appendChild(textTextLast);

var addButton = document.createElement('button');
addButton.type = 'button';
addButton.value = 'Ajouter';
addButton.setAttribute('onclick', 'addAnArticle()');
addButton.appendChild(document.createTextNode('Ajouter'));
formCreation.appendChild(addButton);


document.body.appendChild(formCreation);

function addAnArticle() {
    objToAdd = {
        'type': textType.value,
        'items': [
            {
                'name': textName.value,
                'description': textDescription.value,
                'price': textPrice.value,
                'quantity': textQuantity.value,
                'contact': {
                    'lastname': textLast.value,
                    'firstname': textFirst.value,
                    'address': textAddress.value
                }
            }
        ]
    }
    console.log(objToAdd);
    jsonDatas.push(objToAdd);
    console.log(jsonDatas);
}

/////////////////////////////////////////

function search(checked) {
    let afficheObjet = [];


    if (checked === true) {
        jsonDatas.forEach(function (objet) {
            if ((objet.type === text1.value ) || (text1.value === '')) {
                objet['items'].forEach(function (item) {
                    if(item.quantity>0){
                        let temporaire=[objet.type];
                        temporaire.push(item.name);
                        temporaire.push(item.description);
                        temporaire.push(item.price);
                        temporaire.push(item.quantity);
                                            
                    afficheObjet.push(temporaire);
                    }
                })
            }
        })
    } else if(text1.value!='') {
        jsonDatas.forEach(function (objet) {
            if (objet.type === text1.value) {
                    objet['items'].forEach(function (item) {
                            let temporaire=[objet.type];
                            temporaire.push(item.name);
                            temporaire.push(item.description);
                            temporaire.push(item.price);
                            temporaire.push(item.quantity);
                                                
                        afficheObjet.push(temporaire);
                        }
                    )
            } /*else {
                //afficheObjet.push(objet);
                    afficheObjet.push(objet.items);

            }*/

        })
    }else{
        jsonDatas.forEach(function (objet) {
            objet['items'].forEach(function (item) {
                let temporaire=[objet.type];
                temporaire.push(item.name);
                temporaire.push(item.description);
                temporaire.push(item.price);
                temporaire.push(item.quantity);
                                    
            afficheObjet.push(temporaire);
            })
        })
    }
    console.clear();
    console.log(afficheObjet);



    console.log(sortRedirect(afficheObjet));
}


function sortRedirect(objetsatrier) {
    switch (liste.value) {
        case 'Nom ASC':
            console.log('Nomasc');
            return sortBy(objetsatrier, 'item.name', 'asc');
            break;
        case 'Nom DSC':
            console.log('Nomdsc');
            return sortBy(objetsatrier, 'items.name', 'dsc');
            break;
        case 'Prix ASC':
            console.log('Prixasc');
            return sortBy(objetsatrier, 'price', 'asc');
            break;
        case 'Prix DSC':
            console.log('Prixdsc');
            return sortBy(objetsatrier, 'price', 'dsc');
            break;
        default:
            console.log('rien');
    }
}

function sortBy(objetToSort, parameter, type) {
    if (type === 'asc') {
        objetToSort.sort((a, b) => (a[parameter] > b[parameter]) ? 1 : -1);
    } else {
        objetToSort.sort((a, b) => (a[parameter] < b[parameter]) ? 1 : -1);
    }
    return objetToSort;
}

//console.log(trad);
//console.log(jsonDatas);