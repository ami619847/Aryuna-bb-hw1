// 1. declaring the hero variable
var hero = {
  name: "Ari",
  heroic: true,
  inventory: ['sword1','sword2'],
  health: 8,
  weapon: {
    type:"sword3", 
    damage: 5
  }
};
// console.log(hero);


// 2. implementing the game logic
function rest(creature) {
  creature.health = 10
    return creature
};
//console.log(creature);

function pickUpItem(creature, item){
  creature.inventory.push(item)
  return creature
};
//console.log(creature);

function dealDamage (attacker, defender){
  defender.health = defender.health - attacker.weapon.damage
  return defender
};
//console.log(defender);
//console.log(attacker);

function equipWeapon (creature, index){
  creature.weapon = creature.inventory[index];
  creature.inventory.splice(index,1);
  return creature
};
// console.log(creature.inventory);

function doBattle(heroicCreature, creature){
  if (heroicCreature.heroic != true) {
    return null
  };
  while (heroicCreature.health > 0 && creature.health > 0) {
    dealDamage(heroicCreature, creature);
    if (creature.health > 0) {
      dealDamage(creature, heroicCreature);
      //console.log('hero = '+heroicCreature.health+', creature = '+creature.health);
    };
  };
  if (heroicCreature.health > 0) {
    return heroicCreature
  } else {
    alert("You are dead")
  };
};


// 3. UI & DOM
let imageRest = document.getElementById("imageRest");
imageRest.onclick = function() {
  rest(hero);
  console.log('You need some rest, you health is ' + hero.health);
  // console.log('imageRest was clicked');
  updateStats (hero);
};

let imageGun = document.getElementById( "imageGun" );
imageGun.onclick = function() { 
  pickUpItem(hero,{type: 'gun', damage: 5});
  console.log('Your weapon is ' + hero.weapon);
  // console.log('imageGun was clicked');
  updateStats (hero);
  weapon.parentNode.removeChild(weapon);
};

let imageEnemy = document.getElementById( "imageEnemy" );
imageEnemy.onclick = function() {
  var enemy = {
    health: 8,
    weapon: {
      type: 'knife',
      damage: 2
    }
  };
  doBattle(hero, enemy);
  console.log('Your health is ' + hero.health + ' and you damage is ' + hero.weapon.damage);
  console.log('Fight your enemy, his health is ' + enemy);
  // console.log('imageEnemy was clicked');
  updateStats (hero);
  enemy.parentNode.removeChild(enemy);
};

var imageBag = document.getElementById( "imageBag" );
imageBag.onclick = function() {
  equipWeapon(hero,window.prompt('Please choose the index of the weapon'));
  console.log(hero.weapon);
  // console.log('imageBag was clicked');
  updateStats (hero);
};

function displayStats(hero) {
  let heroName = document.getElementById("heroName");
  heroName.innerHTML = "Hero's name is ${hero.name}";

  let heroHealth = document.getElementById("heroHealth");
  heroHealth.innerHTML = "Hero's health is ${hero.health}";
  
  let heroWeapon = document.getElementById("heroWeapon");
  heroWeapon.innerHTML =  "Hero's weapon is ${hero.weapon.type} and damage ${hero.weapon.damage}";
  // console.log(hero);
};
displayStats(hero);


// 4. stats and updates
function displayInventory(hero){
  let heroInventory = document.getElementById("heroInventory");
  heroInventory.innerHTML = "Hero's inventory is " + hero.inventory;
  hero.inventory.forEach(function(entry){     
    let newWeaponType = document.createElement("weaponType");
    let newWeaponTypeContent = document.createTextNode("new weapon");
    newWeaponType.appendChild(newWeaponTypeContent);
    let newWeaponDamage = document.createElement("weaponDamage");
    let newWeponDamageValue = document.createTextNode("new weapon damage");
    newWeaponDamage.appendChild(newWeponDamageValue);
  });
  // console.log(hero.inventory);
};
displayInventory(hero);

function updateStats (hero){
  displayStats(hero)
  displayInventory(hero)
};

function changeHeroName(){
  let newHeroName = document.getElementById("newHeroName");
  let changeHeroName = document.getElementById("changeHeroName");
  changeHeroName.onclick = function(){
    hero.name = newHeroName.value
  }
  // console.log(hero.name); 
};
