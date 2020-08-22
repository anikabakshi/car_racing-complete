class Player{
    constructor(){

this.Name=null;
this.distance=0;
this.index=null;

this.rank=0;

    }
    getCount(){

        //makes the following add to the database.
        var countref=database.ref("playerCount");

        //adds the value of each player into a special branch of the database.
        countref.on("value",function(data){
            playerCount=data.val()
        })
        
    }
    
    //updates the count to the database.
    updateCount(count){
database.ref("/").update({

    playerCount:count
})
    }


    //makes sure that the player data enteres the database.
update(){
    var playerindex="players/player"+this.index;
    database.ref(playerindex).set({

        name:this.Name,
        distance:this.distance,

    })
}


// makes the players info updation constant.
static getPlayerInfo(){

    var infoRef=database.ref("players");
infoRef.on("value",(data)=>{

    allPlayers=data.val();

})

}

getRank(){

database.ref("rank").on("value",(data)=>{

this.rank=data.val()

})

}

static updateRank(rank){

database.ref("/").update({

rank:rank

})

}

}