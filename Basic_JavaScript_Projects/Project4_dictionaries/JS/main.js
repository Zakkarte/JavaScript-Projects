function my_Dictionary() {                      //Declaringing function
    var Player = {
        Health:100,                             //Player health
        Type:"NPC",                             //Type
        Class:"Warrior",                        //Player class
    }
    delete Player.Class                         //Deleting value for variable Class
    document.getElementById("Dictionary").innerHTML = Player.Class;
}
