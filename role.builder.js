/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.builder');
 * mod.thing == 'a thing'; // true
 */

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvesting');
            if(creep.memory.mineSource == -1){
                creep.memory.mineSource = 2;
            }
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('building');
	        creep.memory.mineSource = -1;
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
               
            }
             else{
                    creep.moveTo(29,41);
                }
	    }
	    else{
	        if(!creep.memory.mineSource || creep.memory.mineSource == 2){
	            var randInt = Math.floor(Math.random()*2); //random int between 0 and 1 
	            console.log("RandInt: " + randInt);
	            creep.memory.mineSource = randInt;
	            console.log(creep.name + ": " +creep.memory.mineSource);
	        }
	        
	        
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
	    }
	}
};

module.exports = roleBuilder;