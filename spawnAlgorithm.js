/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawnAlgorithm');
 * mod.thing == 'a thing'; // true
 */
var spawnAlgorithm = {
    run: function(){

        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
        }
    }
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        
        if(harvesters.length <= 5) {
            if(harvesters.length <= 5){
                var newName = Game.spawns['Spawn'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'harvester'});
                console.log('Spawning new harvester: ' + newName);
            }
            else{
                var newName = Game.spawns['Spawn'].createCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'harvester'});
                console.log('Spawning new harvester: ' + newName);
            }
        }
         else if(upgraders.length <= 6) {
            var newName = Game.spawns['Spawn'].createCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
        }
        else if(builders.length <= 5) {
            var newName = Game.spawns['Spawn'].createCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
       
    }
}

module.exports = spawn;