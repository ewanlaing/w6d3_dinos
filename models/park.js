const Park = function(name, ticketPrice, dinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaurByName = function(dinosaur){
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

Park.prototype.mostPopularDinosaur = function(){
    let mostPopularDinosaur;
    let mostVisitors = 0;
    for(dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay > mostVisitors){
            mostPopularDinosaur = dinosaur;
            mostVisitors = dinosaur.guestsAttractedPerDay;
        }
    }
    return mostPopularDinosaur;
}

Park.prototype.findDinosaursBySpecies = function(species){
    let dinosaurList = [];
    for(dinosaur of this.dinosaurs){
        if(dinosaur.species === species){
            dinosaurList.push(dinosaur);
        }
    }
    return dinosaurList;
}

Park.prototype.totalVisitorsPerDay = function(){
    let totalVisitors = 0;
    for(dinosaur of this.dinosaurs){
        totalVisitors += dinosaur.guestsAttractedPerDay;
    }
    return totalVisitors;
}

Park.prototype.totalVisitorsPerYear = function(){
    let total = this.totalVisitorsPerDay() * 365;
    return total;
}

Park.prototype.totalRevenuePerYear = function(){
    let total = this.totalVisitorsPerYear() * this.ticketPrice;
    return total;
}

Park.prototype.removeDinosaurBySpecies = function(species){
    let keepList = [];
    for(dinosaur of this.dinosaurs){
        if(dinosaur.species !== species){
            keepList.push(dinosaur);
        }
    this.dinosaurs = keepList;
    }
}

Park.prototype.dietTypes = function(){
    let carnivores = 0;
    let herbivores = 0;
    let omnivores = 0;
    for(dinosaur of this.dinosaurs){
        if(dinosaur.diet == 'carnivore'){
            carnivores ++;
        }
        else if(dinosaur.diet == 'herbivore'){
            herbivores ++;
        }
        else{
            omnivores ++;
        }
    }
    diets = {
        'carnivores': carnivores,
        'herbivores': herbivores,
        'omnivores': omnivores
    }
    return diets;
}


module.exports = Park;