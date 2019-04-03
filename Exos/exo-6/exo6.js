// Partie 8 code academy
console.log("exo-6");
/*
// commenter cette ligne de code.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

// afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length)
// changer le nombre de salle de bains de Joe : il n'en possède au'une.
joeInfo.bathrooms=1;
console.log(joeInfo.bathrooms);
// Joe vient d'acquérir un garage changer la structure pour le refléter.
joeInfo.garage=true;
console.log(joeInfo.garage);*/

let team = {
    _players: [
        {
            firstName: 'Joe',
            lastName: 'Dalton',
            age: 30
        },
        {
            firstName: 'Jack',
            lastName: 'Leventreur',
            age: 43
        },
        {
            firstName: 'William',
            lastName: 'Turner',
            age: 26
        }
    ],
    _games: [
        {
            opponent: 'Templars',
            teamPoints: 8,
            opponentPoints: 6
        },
        {
            opponent: 'Panclette Studio',
            teamPoints: 5,
            opponentPoints: 8
        }
    ]
}

function addPlayer(first, last, age) {
    team['_players'].push({
        firstName: first,
        lastName: last,
        'age': age
    });
}

function addMatch(opponent, teamPoints, opponentPoints) {
    team['_games'].push({
        'opponent': opponent,
        'teamPoints': teamPoints,
        'opponentPoints': opponentPoints
    });
}

function findTheOlder() {
    let ageMax = 0;
    let nameOlder;
    team._players.forEach(function (player) {
        if (ageMax < player.age) {
            ageMax = player.age;
            nameOlder = player.firstName;
        }
    });
    return nameOlder;
}



console.log(team['_players']);
addPlayer('Avrell', 'Harriman', 65);
addPlayer('Luke', 'Perry', 39);
console.log(team['_players']);
console.log(team['_games']);
addMatch('CrystallMetz', 10, 3);
addMatch('LetZepplin', 2, 9);
console.log(team['_games']);

let sumTeamPoints = 0;
let MoyOpponentPoints = 0;

team._games.forEach(function (game) {
    sumTeamPoints += game.teamPoints;
    MoyOpponentPoints += game.opponentPoints / team._games.length;
});

console.log(sumTeamPoints);
console.log(MoyOpponentPoints);
console.log(findTheOlder());

let playerSorted = [];
team._players.forEach(function (player) {
    playerSorted.push(player.firstName);
});
playerSorted.sort();
var playerSortedFullInfo = [];

playerSorted.forEach(function (player) {
    team._players.forEach(function (playerfull) {
        if (player === playerfull.firstName) {
            playerSortedFullInfo.push(playerfull);
        }
    }
    );
});

console.log(playerSorted);
console.log(playerSortedFullInfo);