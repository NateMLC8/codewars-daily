const listCharacters = []
let listNames = []
let select = document.querySelector('.characters')
// let character = document.querySelector('.characters').value.toLowerCase()

//Creating a character
class Character{
    constructor(name, health, strength, type){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.type = type;
        this.xp = 0; // XP is 0 starting for new characters
        this.gold = 10; // starting gold is 10 for new characters
        this.keys = 1; // starting keys is 1 for new characters
    }

    //attacking a target
    attack(target){
        if (this.health > 0){
            const damage = this.strength;
            console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`);
            target.health -= damage;
                if (target.health > 0){
                    console.log(`${target.name} has ${target.health} health points left`);
                } else {
                    target.health = 0;
                    const bonusXP = 10;
                    console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.keys} keys, and ${target.gold} Gold`);
                    this.xp += bonusXP;
                    this.keys += target.keys;
                    this.gold += target.gold;
                    target.gold = 0;
                    target.keys = 0;
                }
            }
            else {
                console.log(`${this.name} can't attack (they've been eliminated)`);
            }
        }

    // Character description

    describe(){
        return `${this.name} is a ${this.type} and has ${this.health} health points, ${this.strength} strength and ${this.xp} XP points. ${this.name} currently has ${this.gold} Gold and ${this.keys} Keys in their inventory.`;
    }

    addCharToList(){
        listNames.push(`${this.name}`);
        listCharacters.push(this);
            // this.name, 
            // this.health,
            // this.strength,
            // this.type,
            // this.xp, // XP is 0 starting for new characters
            // this.gold, // starting gold is 10 for new characters
            // this.keys, // starting keys is 1 for new characters
        // )
    }
    // this.addCharToList();
    // addCharToList()
    // showCharacterInDom(){
    //     document.getElementById('currentCharacters').innerText = `| ${this.name} |`
    // }

}

// Create Characters
const aurora = new Character('Aurora', 150, 25, 'Adventurer');
aurora.addCharToList()
const glacius = new Character('Glacius', 130, 30, 'Adventurer');
glacius.addCharToList()
const spike = new Character('Spike', 40, 20, 'Monster');
spike.addCharToList()

// Show Characters in DOM
document.getElementById('currentCharacters').innerText = listNames.join(', ')
// for (let i=0; i < listCharacters.length; i++){
// const nameList = Array.from(listCharacters[i].name)
// document.getElementById('currentCharacters').innerText = nameList.join(', ')
// }

// const nameArray = Object.keys(listCharacters)
// console.log(nameArray)

// DOM option = list of current characters
for (let i=0; i < listCharacters.length; i++){
    const option = document.createElement('option')
    // let current = listCharacters[i].name.join(', ')
    option.value = listCharacters[i].name
    option.innerText = listCharacters[i].name
    // document.getElementById('characterInfo').innerText = listCharacters[i].describe()
    select.appendChild(option)
    // current.join(', ')
    // document.getElementById('currentCharacters').innerText = current
}

// Show character selection stats in DOM
select.addEventListener('change', event => {
    // let character = event.target.value;
    // let option2 = listCharacters
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.value)
    // console.log(event.target.value.toLowerCase())
    // document.getElementById('characterInfo').innerText = event.target.value
    let character = event.target.value.toLowerCase();
    // let character = document.querySelector('.characters').value.toLowerCase()
    // for (let i=0; i < listCharacters.length; i++){
    //     if (character == listCharacters[i].name){
    //         document.getElementById('characterInfo').innerText = listCharacters[i].describe()
    //     }else{
    //         document.getElementById('characterInfo').innerText = "Choose a character!"
    //     }
        // document.getElementById('characterInfo').innerText = listCharacters[i].describe()
    // }
    // character = document.querySelector('.characters').value.toLowerCase()
    // document.getElementById('characterInfo').innerText = listCharacters
    // character = listCharacters[i]
    // let character = document.getElementById('choice2').innerText.toLowerCase()
    // let character = document.getElementById('choice2').value.toLowerCase()
    // character = character.toLowerCase()
    // return(character)
    // charInfo.charReturn()
    // event.target.value.describe();
    charInfo.changeStart();
    // charInfo.information();
    // return character;
    // document.getElementById('characterInfo').innerText = `${character.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points. ${this.name} currently has ${this.gold} Gold and ${this.keys} Keys in their inventory.`
    // return(character)
})

// const character = document.querySelector('option').innerText.toLowerCase()
// character = document.querySelector('.choice2').value
// character = select(option)
// character = document.getElementById('choice2').value.toLowerCase()
// console.log(document.getElementById('choice2').innerText)
// console.log(character)
// character = document.querySelector('.characters').value.toLowerCase()
// console.log(character)
// let character = document.querySelector('.characters').value.toLowerCase()
let charInfo = {
    // character = document.querySelector('.characters').value.toLowerCase()
    changeStart(character){
        character = document.querySelector('.characters').value
        // console.log(character)
        // for (let i=0; i < listCharacters.length; i++){
        //     if (character === listCharacters[i].name.toString()){
        //         document.getElementById('characterInfo').innerText = listCharacters[i].describe()
        //     }else{
        //         document.getElementById('characterInfo').innerText = "Choose a character!"
        //     }

        function isName(char){
            return char.name == character
        }
        // console.log(listCharacters.find(isName).name.toLowerCase())

        if (character == listCharacters.find(isName).name) {
            document.getElementById('characterInfo').innerText = listCharacters.find(isName).describe()
            }else if (document.querySelector('.characters').value == undefined){
                document.getElementById('characterInfo').innerText = "Choose a character!"
            }else{
                console.log('Coding error')
            }
        }
        

        // for (let name of listCharacters){
        //         if (character === listCharacters[i].name.toString()){
        //         document.getElementById('characterInfo').innerText = listCharacters[i].describe()
        //     }else{
        //         document.getElementById('characterInfo').innerText = "Choose a character!"
        //     }
        // }

        // listCharacters.forEach(name => {
        //     if (character === name.toString()){
        //                 document.getElementById('characterInfo').innerText = listCharacters.describe()
        //             }else{
        //                 document.getElementById('characterInfo').innerText = "Choose a character!"
        //             }
        // });

        // character = document.querySelector('.choice').innerText.toLowerCase()
        // character = document.querySelector('.choice').value
        // console.log(character)
        // character = document.getElementById('choice2').value.toLowerCase()
        // let character = document.querySelector('.characters').value.toLowerCase()
        // console.log(character)
    }
    // information(character){
    //     // character = document.querySelector('.characters').value.toLowerCase()
    //     if (document.querySelector('.characters').value.toLowerCase() == "choose character"){
    //         document.getElementById('characterInfo').innerText = "Choose a character!"
    //     }else{
    //         document.getElementById('characterInfo').innerText = character.describe()
    //     // document.getElementById('characterInfo').innerText = `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points. ${this.name} currently has ${this.gold} Gold and ${this.keys} Keys in their inventory.`
    //     }
    // }
// }
// let charInfo = {
//     charReturn(){
//      console.log(character)
// }
// }
