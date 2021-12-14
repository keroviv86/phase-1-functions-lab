function distanceFromHqInBlocks(someValue) {
    return Math.abs(42-someValue)
  }

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)* 264
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }


  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination) *264
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start-destination) *264
    if(distance <= 400){
        return 0
    }
    if(distance > 400 && distance <2000){
        return 0.02* (distance-400)

    }else if(distance >2000 && distance <2500){
        return 25
        
    }else if(distance > 2500){
        return 'cannot travel that far'
    }
  }