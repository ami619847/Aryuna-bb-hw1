var hero = {
  name: "Ari",
  heroic: false,
  inventory: ['sword1','sword2'],
  health: 8,
  weapon: {type:"sword3", damage: 5}
};
//console.log(hero);
var item = {type:"gun2", damage: 7}
var creature = {
  name: "Creature",
  heroic: true,
  inventory: ['knife1','knife2'],
  health: 5,
  weapon: {type:"gun", damage: 7}
};

var defender = {
  name: "Defender",
  heroic: false,
  inventory: ['shield1','shield2'],
  health: 9,
  weapon: {type:"shield", damage: 2}
};

var attacker = {
  name: "Attacker",
  heroic: true,
  inventory: ['machete1','machete2'],
  health: 3,
 weapon: {type:"machete", damage: 7}
};


function rest(creature) {
  health = 10
    return health
};
console.log(rest(creature));
window.onload = function(){
  document.getElementById( "imageRest" ).onclick = function(){
    console.log('You need some rest, you health is ' + rest(hero));
    console.log('imageRest was clicked');
    };
};


function pickUpItem(creature, item){
  var item = {type:"gun2", damage: 7};
  var hero = {
    name: "Ari",
    heroic: false,
    inventory: ['sword1','sword2'],
    health: 8,
    weapon: {type:"sword3", damage: 5}
  };
  var removedElements = creature.inventory.splice(1,1,item.type)
    return creature
};
console.log(pickUpItem(hero));
window.onload = function(){
  document.getElementById( "imageGun" ).onclick = function(){
    console.log('Your weapon is here ' + pickUpItem(hero, item));
    console.log('imageGun was clicked');
  };
};


function dealDamage (defender, attacker){
  /*var defender = {
    name: "Defender",
    heroic: false,
    inventory: ['shield1','shield2'],
    health: 9,
    weapon: {type:"shield", damage: 2}
  };
  var attacker = {
    name: "Attacker",
    heroic: true,
    inventory: ['machete1','machete2'],
    health: 3,
   weapon: {type:"machete", damage: 7}
 };
  defender.health = defender.health - attacker.weapon.damage
  return defender
};
console.log(dealDamage(defender));

function equipWeapon (creature, index){
//DOESN'T work properly
 //declaring the index variable to the inventory array
/* for (var index = creature.inventory.length; index >=0; index--);
 //replacing the weapon with the inventory element
 var removeWeapon = creature.weapon.type.splice(0,1,index);
 //removing the inventory element from the inventory
 creature.inventory.splice(index,1);*/

 //return creature;
//};

//Click on image part works
console.log(equipWeapon(creature));
window.onload = function(){
  document.getElementById( "imageBag" ).onclick = function(){
    console.log(equipWeapon(hero, window.prompt('Please choose the index of the weapon?')));
    console.log('imageBag was clicked');
  };
};

function doBattle(defender, attacker){
  var defender= {
    name: "heroicCreature",
    heroic: true,
    inventory: ['riffle1','riffle2'],
    health: 4,
    weapon: {type:"riffle", damage: 9}
  };
  var attacker = {
    name: "Creature",
    heroic: true,
    inventory: ['knife1','knife2'],
    health: 5,
    weapon: {type:"gun", damage: 7}
  };

////DOESN'T work properly
  /* if (defender == false) {
    alert("Your heroicCreature is not heroic")
    return null
  };

  while (defender.health, attacker.health >= 0) {
    dealDamage(defender, attacker);
    defender.health +=1;
    if (creature.health >= 0) {
      dealDamage(defender, attacker);
    };
  };

  if (defender.health >= 0) {
    return defender
  } else { alert("Your heroicCreature is dead");
};*/

};
console.log(doBattle(defender, attacker));

window.onload = function(){
  document.getElementById( "imageEnemy" ).onclick = function(){
    console.log('Fight your enemy ' + doBattle(defender,attacker));
    console.log('imageEnemy was clicked');
  };
};

function displayStats(heroEnd){
  var heroEnd = {
    name: "Ari",
    health: 1,
    weapon: {type:"gun10", damage:1 }
    };
    console.log(heroEnd)
  };
  window.onload = function(){
    document.getElementById("endGameButton" ).innerHTML = "Game Over"
  };


// UI
