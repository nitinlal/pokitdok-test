// get a connection to the PokitDok Platform for the most recent version
var PokitDok = require('pokitdok-nodejs');
var pokitdok = new PokitDok("C1PF73kZ8ggKl5hKO2Bl", "P06UtbZFaQQf03lf9gyv5k8lMS1iOXVGVkXGEA4q");


// get a single activity
pokitdok.activities({
    id: '5317f51527a27620f2ec7533'
}, function(err, res){
    if(err) {
        return console.log(err, res.statusCode);
    }
    // print the activity name status and id
    console.log(res.data.id + ':' + res.data.name + ':' + res.data.state.name);
});