    // start the game:
  
       
       // Global  Scope variables
        
        // hero selected and cooresponding stats, Health and attackPower only,
        var attacker;
        var attackerHealth;
        var attackerAttack;
        // defender selected and cooresponding stats, note that defenderAttack is actually counterAttackPower...
        var defender; 
        var defenderHealth;
        var defenderAttack; 
        // some variables to help define new classes maybe
        var name;
        var fullname;
        var pickAttacker;
        var pickDefender;
        var myAttacker = "";
        var myDefender = "";

        
        // empty array for functions if need, its defined.
        var characterArray = []; 
        // array that already contains all characters.
        var characterPick = [Luke, Vader, Solo, Fett,];    



    

        // lets make the characters
        var characters = {
                Luke: {
                    name: 'Luke',
                    fullname: 'Luke Skywalker',
                    health: 150,
                    attackPower: 20,
                    counterAttackPower: 15,
                    image: '<img src="assets/images/Luke.jpg" class="image">'
                },
                Vader: {
                    name: 'Vader',
                    fullname: 'Darth Vader',
                    health: 200,
                    attackPower: 14,
                    counterAttackPower: 25,
                    image: '<img src="./assets/images/Vader.jpg" class="image">'
                },
                Solo: {
                    name: 'Solo',
                    fullname: 'Han Solo',
                    health: 120,
                    attack: 30,
                    counterAttackPower: 12,
                    image: '<img src="./assets/images/Solo.jpg" class="image">'
                },
                Fett: {
                    name: 'Fett',
                    fullname: 'Boba Fett',
                    health: 220,
                    attackPower: 18,
                    counterAttackPower: 18,
                    image: '<img src="./assets/images/Solo.jpg" class="image">'
                },
            
        // lets make the game work:
        // starting with character selection
        };   
        $(document).readyState(function() {
            reset();
        //create an onclick event or something to get the attacker choice to the attacker zone
            $(".name").click(function(){
                if (pickAttacker == "") {
                    console.log(this);
                    $(this).appendTo(".attack-zone");
                    pickAttacker = $(this);
                    myAttacker = $(pickAttacker).attr("value");
                }




            })
        //create an onclick event to get the defender choice into the defender zone
        });
    
          
        
        // need to move the character selected as "player" div move into "attacker" div, onClckEvent?
       
        // after which we need to move the character selected as "defender" div into the area called "defender" div:

// <---close--->

