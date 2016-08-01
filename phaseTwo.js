/*
	1. 
*/

var cleanMemoryCreep = require('cleanMemoryCreep');

var phaseTwo = {
	run: function(){
		var creepSize = [];
		var roomName = _.filter(Game.creeps, function(creep){return creep})[0].room.name;
		if(Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION}}).length == 1){
			creepSize = [WORK,CARRY,CARRY,MOVE,MOVE,MOVE];	
		}
		else if(Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION}}).length == 2){
			creepSize = [WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];	
		}
		else if(Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION}}).length == 3){
			creepSize = [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE];	
		}
		else if(Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION}}).length == 4){
			creepSize = [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];		
		}
		else if(Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION}}).length == 5){
			creepSize = [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];		
		}
		
		if(Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION}}).length < 5){
			buildExtensions();	
		}
		cleanMemoryCreep.run;
		spawn(creepSize);
	}
}

var spawn = function(creepSize){

	var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

    if(harvesters.length <= 5) {
            if(harvesters.length = 0){
                var newName = Game.spawns['Spawn'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
                //console.log('Spawning new harvester: ' + newName);
            }
            else{
                var newName = Game.spawns['Spawn'].createCreep(creepSize, undefined, {role: 'harvester'});
                //console.log('Spawning new harvester: ' + newName);
            }
        }
         else if(upgraders.length <= 6) {
            var newName = Game.spawns['Spawn'].createCreep(creepSize, undefined, {role: 'upgrader'});
            //console.log('Spawning new upgrader: ' + newName);
        }
        else if(builders.length <= 5) {
            var newName = Game.spawns['Spawn'].createCreep(creepSize, undefined, {role: 'builder'});
            //console.log('Spawning new builder: ' + newName);
        }
}

var buildExtensions = function(){
	var roomName = _.filter(Game.creeps, function(creep){return creep})[0].room.name;
	var spawnerPos = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_SPAWN}})[0].pos;

	var startSpawnx = spawnerPos.x - 3;
	var startSpawny = spawnerPos.y + 1;

	for(var i = 0; i < 5; i++){
		createConstructionSite(startSpawnx+i,startSpawny+i, STRUCTURE_EXTENSION);
	}

}

module.exports = phaseTwo;