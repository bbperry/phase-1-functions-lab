function distanceFromHqInBlocks(location) {
    return Math.abs(42-location)  
}

function distanceFromHqInFeet(location) {
    return (Math.abs(42-location))* 264 
}

function distanceTravelledInFeet(start, end) {
    return (Math.abs(start-end))* 264
}

function calculatesFarePrice(start, destination) {
    let distance = (Math.abs(start-destination))* 264;

        if (distance <= 400) {
            return distance * 0
         } else if (distance > 400 && distance < 2000) {
             return (distance-400)*.02
        }  else if (distance > 2000 && distance < 2500) {
             return 25 
        } else if (distance > 2500) {
            return 'cannot travel that far'
        }
}
