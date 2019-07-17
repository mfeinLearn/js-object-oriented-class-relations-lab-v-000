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
   //console.log(store.drivers)
  }
  trips() {
    return store.trips.filter(
            function(trip) {
                return trip;//.id === this.tripId;
            }.bind(this)
        );
  }

  passengers() {
    //debugger
    return store.passengers.filter(
            function(passenger) {
                return passenger;//.id === this.passengerId;
            }.bind(this)
        );
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
  trips() {
    return store.trips.find(
            function(trip) {
                return trip;
            }.bind(this)
        );
  }

  drivers() {
    //debugger
    return store.drivers.filter(
            function(driver) {
                return driver;
            }.bind(this)
        );
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
    //debugger
    return store.drivers.find(
            function(driver) {
                return driver.id === this.driverId;
            }.bind(this)
        );
  }
  passenger() {
    return store.passengers.find(
            function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        );
  }


}
