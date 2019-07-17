let store = { drivers: [], passengers: [], trips: []};
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    // if(trip){
    //   this.setTrip(trip)
    // }

    // insert in the driver to the store
   store.drivers.push(this)
  }
}

class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
    // if(trip){
    //   this.setTrip(trip)
    // }

    // insert in the driver to the store
   store.passengers.push(this)
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    this.passengerId = passenger.id
    //this.driverId = driverId
    this.driverId = driver.id
    // if(trip){
    //   this.setTrip(trip)
    // }

    // insert in the driver to the store
   store.trips.push(this)
  }
  driver() {
    return this.driver.find(
            function(driver) {
                return driver.id === this.driverId;
            }.bind(this)
        );
  }
  passenger() {
    return this.passenger.find(
            function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        );
  }


}
