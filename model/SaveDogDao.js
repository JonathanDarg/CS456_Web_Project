let lstDogs = [
  {_id: 1, name: 'Buddy', breed: 'Golden Retriever', age: 3, gender: 'Male', description: 'Friendly and great with families', is_approved: 1},
  {_id: 2, name: 'Max', breed: 'German Shepherd', age: 5, gender: 'Male', description: 'Loyal and highly intelligent working dog', is_approved: 1},
  {_id: 3, name: 'Bella', breed: 'Bulldog', age: 4, gender: 'Female', description: 'Calm, courageous, and loves lounging', is_approved: 1},
  {_id: 4, name: 'Charlie', breed: 'Beagle', age: 2, gender: 'Male', description: 'Curious and energetic with a great sense of smell', is_approved: 0},
  {_id: 5, name: 'Lucy', breed: 'Poodle', age: 6, gender: 'Female', description: 'Very smart and hypoallergenic coat', is_approved: 0},
  {_id: 6, name: 'Rocky', breed: 'Rottweiler', age: 7, gender: 'Male', description: 'Confident and protective companion', is_approved: 0},
  {_id: 7, name: 'Daisy', breed: 'Dachshund', age: 1, gender: 'Female', description: 'Playful and brave with a long body', is_approved: 0},
  {_id: 8, name: 'Luna', breed: 'Siberian Husky', age: 3, gender: 'Female', description: 'Energetic with striking blue eyes', is_approved: 0}
];


// Create and save a new dog 
exports.createDog = function(dog){
  let genId = lstDogs[ lstDogs.length -1 ]._id +1;
  dog._id = genId;

  lstDogs.push( dog ); //adds dog to the array 

  return dog;
};

// Get all Dog
exports.getAllDogs = function(){
  return lstDogs;
};

// Get an Dog by its ID
exports.getDogById = function(id){
  let dog = null;
  for(let i=0; i<lstDogs.length; i++){
    if( lstDogs[i]._id === id ){
      dog = lstDogs[i]
      break
    }
  }
  return dog;
};

// Update Dogs info
exports.update = function(dog){
  let pos = -1;
  for(let i=0; i<lstDogs.length; i++){
    if( lstDogs[i]._id === dog._id ){
      pos = i; // saves the array position of the item to update
    }
  }

  if(pos >= 0 && pos < lstDogs.length){
    lstDogs[pos] = dog;
  }

}

// Delete an Dog by its ID
exports.deleteDog = function(id){
  let dog = null;
  let pos = -1;
  for(let i=0; i<lstDogs.length; i++){
      if( lstDogs[i]._id === id ){
          pos = i; // saves the array position of the item to delete
      }
  }

  if(pos >= 0 && pos < lstDogs.length){
      dog = lstDogs[pos];
      lstDogs.splice(pos,1);
  }
  
  return dog;

};