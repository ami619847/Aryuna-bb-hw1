// This file has tests to help you see how you are doing
//declare variable hero
var hero = {
  name: "Ari",
  heroic: true,
  inventory: ['sword1','sword2'],
  health: 8,
  weapon: {type:"gun", damage: 5}
};
//console.log(hero);

//functions are testing if hero variable, including it values and keys, was declared correctly
function heroExists(){ return typeof hero !== 'undefined' && hero.constructor === Object }
function heroIsHeroic(){ return heroExists() && hero.heroic && hero.heroic.constructor === Boolean}
function heroHasName(){ return heroExists() && hero.name && hero.name.constructor === String }
function heroHasInventory(){ return heroExists() && hero.inventory && hero.inventory.constructor === Array }
function heroHasHealth(){ return heroExists() && hero.health && hero.health.constructor === Number }
function heroHasWeapon(){ return heroExists() && hero.weapon && hero.weapon.constructor === Object }
function weaponHasType(){ return hero.weapon.type && hero.weapon.type.constructor === String }
function weaponHasDamage(){ return hero.weapon.damage && hero.weapon.damage.constructor === Number }
function weaponHasStats(){ return heroHasWeapon() && weaponHasType() && weaponHasDamage() }
//function declaring that hero test was passed if all values have been daclared correctly
function allHeroTestPassed() {
    return heroExists()
        && heroHasInventory()
        && heroHasHealth()
        && heroHasWeapon()
        && weaponHasStats()
}
//function asserting if some values and keys have been missing and what is the value and a key
function heroTests(){
    console.log('Hero tests:')
    console.assert(heroExists(), 'You havent created a hero object')
    console.assert(heroHasName(), 'Your hero does not have a name')
    console.assert(heroIsHeroic(), 'Your hero is not heroic')
    console.assert(heroHasInventory(), 'Your hero does not have an inventory')
    console.assert(heroHasHealth(), 'Your hero does not have health')
    console.assert(heroHasWeapon(), 'Your hero does not have a weapon')
    console.assert(weaponHasStats(), 'Your weapon does not have the right stats')
//checking if all functions are working
//then logging the message in different color that the test was passed
    if(allHeroTestPassed()) {
        console.log('%c Hero tests passed! ', 'color: #32CD32')
    }
};

/*Declare the following functions in global scope:
`rest, pickUpItem, dealDamage, equipWeapon, doBattle`

- `rest` is a function that restores a creatures health to 10
    1. `rest` should have one parameter: `creature`.
    You can assume that creature has the same structure as your `hero` object
    2. modify the `health` of the `creature` object by assigning it `10`
    3. return the `creature`object from the function*/
var creature = {
  name: "Creature",
  heroic: true,
  inventory: ['knife1','knife2'],
  health: 5,
  weapon: {type:"gun", damage: 7}
};
function rest(creature) {
  health = 10
  return health
};
console.log(rest(creature))

/*    - `pickUpItem` is a function that adds an item to the inventory of a creature
        1. `pickUpItem` should have two parameters: `creature` and `item`.
        You can assume that creature has the same structure as your `hero` object
        and that `item` has the same structure as a `weapon` object.
        2. modify the `inventory` of the `creature` by adding the item to it.
        3. return the `creature` object from the function*/
function pickUpItem(creature, item){
  var item = {type:"gun2", damage: 7}
  var removedElements = creature.inventory.splice(1,1,item.type);
  return creature
};
//console.log(pickUpItem(creature));

/*- `dealDamage` is a function that subtracts one creatures weapon damage
from another creatures health
    1. `dealDamage` should have two parameters: `attacker` and `defender`.
    You can assume that both have the same structure as your `hero` object.
    2. modify the `health` value of the `defender` object
    by subtracting the value of the attacker's weapon damage.
    3. return the `defender` object from this function.*/
/*function dealDamage (defender, attacker){
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
  defender.health = defender.health - attacker.weapon.damage
  return defender
};
//console.log(dealDamage(defender));*/

/*`equipWeapon` is a function that takes a changes the weapon of the creature
to one that is in their inventory and removes that weapon from their inventory.
    1. `equipWeapon` should have two parameters. `creature` and `index`.
    You can assume that creature has the same structure as your `hero` object and that `index` is a number.
    2. modify the `weapon` of the `creature`
    by assigning it the value of the `index`th element of the `inventory`
    3. modify the creature's `inventory` by removing the `index`th element from it
    4. return the `creature` object from the function*/
/*function equipWeapon (creature, index){
  var index = creature.inventory.lenght--;
  var removedWeapon = creature.weapon.type.splice(0,1,index);
  var removeInventory = creature.inventory.splice(index,1,creature.inventory.length - index);
  return creature
};
console.log(equipWeapon(creature));*/

/*`doBattle` is a function that takes two creatures,
the first of which is a hero, which deal damage to each other until one of them dies.
1. `doBattle` should have two parameters `heroicCreature` and `creature`.
You can assume that both have the same structure as your `hero` object.
2. make a guard clause which checks if `heroicCreature` is `heroic`.
If `heroicCreature` is not `heroic` return `null` from this function.
3. while `heroicCreature` and `creature` have health above zero
they take turns dealingDamage to eachother: `heroicCreature` deals damage to `creature` first.
If `creature` survives it deals damage to `heroicCreature`.
4. at the end of `doBattle` check if `heroicCreature` has health above zero; if so return it from the function.
Otherwise give the user feedback about the death of their hero with a popup.*/

/*function doBattle(creature, heroicCreature){
  var heroicCreature = {
    name: "heroicCreature",
    heroic: true,
    inventory: ['riffle1','riffle2'],
    health: 4,
    weapon: {type:"riffle", damage: 9}
  };
  var creature = {
    name: "Creature",
    heroic: true,
    inventory: ['knife1','knife2'],
    health: 5,
    weapon: {type:"gun", damage: 7}
  };

  if (heroicCreature == false) {
    alert("Your heroicCreature is not heroic")
    return null
  };

  while (heroicCreature.health, creature.health >= 0) {
    dealDamage(heroicCreature, creature);
    if (creature.health >= 0) {
      dealDamage(creature, heroicCreature);
    };
  };

  if (heroicCreature.health >= 0) {
    return heroicCreature
  } else { alert("Your heroicCreture is dead");
  };

};
console.log(doBattle());*/



function functionsExist() {
    try {
        dealDamage && doBattle && pickUpItem && equipWeapon && rest
    } catch (error) {
        return false
    }

    return true
}

function dealDamageWorks() {
    try {
        return dealDamage({ weapon: { damage: 5 }}, { health: 10 }).health === 5
    } catch (error) {
        return false
    }
}

function doBattleGuardStatementWorks() {
    var heroStub = { heroic: true, health: 10, weapon: { damage: 2 } }
    var creatureStub = { heroic: false, health: 5, weapon: { damage: 1 } }

    try {
        var error = doBattle(creatureStub, heroStub)
        return error === null
    } catch (error) {
        return false
    }
}

function doBattleWorks() {
    var heroStub = { heroic: true, health: 10, weapon: { damage: 2 } }
    var creatureStub = { heroic: false, health: 5, weapon: { damage: 1 } }
    try {
        var victor = doBattle(heroStub, creatureStub)
        return victor.heroic && victor.health === 8
    } catch (error) {
        return false
    }
}

function pickUpItemWorks() {
    try {
        return pickUpItem({ inventory: [] }, { type: 'gun', damage: '100'}).inventory.length === 1
    } catch (error) {
        return false
    }
}

function equipWeaponWorks() {
    try {
        var creature = equipWeapon({ inventory: [{ type: 'gun', damage: '100'}], weapon: null }, 0)
        return creature.weapon.type === 'gun' && creature.inventory.length === 0
    } catch (error) {
        return false
    }
}

function restWorks() {
    try {
        return rest({ health: 5 }).health === 10
    } catch (error) {
        return false
    }
}

function allFunctionTestsPassed() {
    return functionsExist()
        && dealDamageWorks()
        && doBattleGuardStatementWorks()
        && doBattleWorks()
        && pickUpItemWorks()
        && equipWeaponWorks()
        && restWorks()
}

function functionTests(){
    console.log('Function tests:')
    console.assert(functionsExist(), 'You have not declared all necessary functions yet')

    if (!functionsExist()) return

    console.assert(dealDamageWorks(), 'dealDamage is not working as it should')
    console.assert(pickUpItemWorks(), 'pickUpItem is not working as it should')
    console.assert(equipWeaponWorks(), 'equipWeapon is not working as it should')
    console.assert(doBattleGuardStatementWorks(), 'doBattle guard statement is not working as it should')
    console.assert(doBattleWorks(), 'doBattle is not working as it should')
    console.assert(restWorks(), 'rest is not working as it should')

    if(!allFunctionTestsPassed()) return

    console.log('%c Function tests passed! ', 'color: #32CD32')
}

function runTests(){
    heroTests()
    functionTests()
}

runTests()
