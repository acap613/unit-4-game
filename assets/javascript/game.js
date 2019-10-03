// Global  Scope variables
var baseAttack = 0; // original attack strength
var player; // holds the player Object
var defender; // holds the current defender Object
var charArray = []; // array that stores the game characters (Objects)
var playerSelected = false; // flag to mark if we picked a player yet
var defenderSelected = false; // flag to mark if we picked a defender

// lets make the characters
var Luke = {
    health: 150,
    attackPower: 20,
    counterAttackPower: 15,
}
var Vader = {
    health: 200,
    attackPower: 14,
    counterAttackPower: 25,
}
var Solo = {
    health: 120,
    attack: 30,
    counterAttackPower: 12,
}
var Fett = {
    health: 220,
    attackPower: 18,
    counterAttackPower: 18,
}
// lets make some logic:
