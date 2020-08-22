class Form {

constructor(){

//makes the player1,2,3,4.......'s name loged in.
this.input=createInput("Name");
this.input.position(windowWidth/2,windowHeight/2-(40*2));

//makes the play button appear.
this.button=createButton("play");
this.button.position(windowWidth/2+70,windowHeight/2-(15*2));

this.Greeting=createElement("h3");
this.Greeting.position(windowWidth/2,160);

this.reset=createButton("reset")
this.reset.position(displayWidth-100,30)


}

display(){

    //makes the title i.e game's name.
    var title=createElement("h2");
    title.html("Car Racing Game");
    title.position(windowWidth/2,10);



this.reset.mousePressed(()=>{

player.updateCount(0);
game.update(0);

var mrJ=0;

for(var plr in allPlayers){

mrJ=mrJ+1;

database.ref("players/player"+mrJ).update({

name:"",
distance:0

})



}

})


this.button.mousePressed(()=>{

    //makes the name bar and the play button dissapear.
    this.input.hide();
   this.button.hide();

    // plases the name i.e the player1,2,3,4...'s name in the input box.
    player.Name=this.input.value();

//makes the no. of players increase.
    playerCount=playerCount+1;
    
    player.index=playerCount;

    // adds the date of the number of players inti the database.
    player.update();

    // makes the updation of the player's data constant.
    player.updateCount(playerCount);
 
    // gives the greeting according to name (hello_anika,trisha,sannvi,annanya..........._!).
    this.Greeting.html("Hello "+player.Name+" ! ");

})
}

//hides the thingsthat are not to be shown in the gameState=1(play).
HIDE(){

    this.input.hide();
    this.button.hide();
    this.Greeting.hide();

}

}