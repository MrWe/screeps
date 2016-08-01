/*
	1. Spawn Harvesters (2)
		1. Mine nearest source
	2. Spawn Upgraders (1)
		1. Mine nearest source
	3. Spawn Harvesters (3)
	4. Spawn Upgraders (4)
	5. Mine until phaseTwo
*/

var cleanMemoryCreep = require('cleanMemoryCreep');

var phaseOne = {
	run: function(){
		var creepSize = [WORK,CARRY,CARRY,MOVE,MOVE];
		cleanMemoryCreep.run;
		spawn(creepSize);
	}
};

var spawn = function(creepSize){
	var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(harvesters <= 5){
    	var newName = Game.spawns['Spawn'].createCreep(creepSize, undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
    else if(upgraders <= 5){
    	var newName = Game.spawns['Spawn'].createCreep(creepSize, undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }
}

module.exports = phaseOne;