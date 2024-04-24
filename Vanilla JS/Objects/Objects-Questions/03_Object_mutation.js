let firstPerson = {
    name: 'Sibhi' ,
    settings:  {
        sensitivity: 1.0 ,
        crosshair: {
            height: 4,
            width: 25,
            color:'red'
        }
    },
    steamId: 'void_23',
    nickNames: ['void', 'hackerMan', 'tapper'],
    favWeapon: 'AK47',
    maxKills: 40
}

let secondPerson = {
    name: 'Vijay' ,
    settings:  {
        sensitivity: 1.5 ,
        crosshair: {
            height: 7,
            width: 29,
            color: 'green'
        }
    },
    steamId: 'theDarkKnight',
    nickNames: ['Knight', 'flickerMan', 'batMan'],
    favWeapon: 'awp',
    maxKills: 39
}

let thirdPerson = {
    name: 'Shriram' ,
    settings:  {
        sensitivity: 0.9 ,
        crosshair: {
            height: 6,
            width: 19,
            color: 'red'
        }
    },
    steamId: 'zippy_ram',
    nickNames: ['Zippy', 'mysteryMaster', 'tapper'],
    favWeapon: 'awp',
    maxKills: 23
}

firstPerson = {
    ...firstPerson,
    name: 'Shibuya'
}
console.log(firstPerson);