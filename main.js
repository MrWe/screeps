var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var spawnAlgorithm = require('spawnAlgorithm');
var phaseOne = require('phaseOne');

module.exports.loop = function () {
    

    var roomName = _.filter(Game.creeps, function(creep){return creep})[0].room.name;
    var controller = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_CONTROLLER}})[0];

    if(controller.level == 2){
        phaseOne.run();
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        creep.say("Don't Kill Me")
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
       
    }
    
}