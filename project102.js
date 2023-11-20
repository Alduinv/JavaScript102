
class Vehicle {
    constructor(name, manufacturer, vehicleId) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.vehicleId = vehicleId;
    }
}


class Car extends Vehicle {
    constructor(name, manufacturer, vehicleId, carType) {
        super(name, manufacturer, vehicleId);
        this.carType = carType; 
    }
}


class Airplane extends Vehicle {
    constructor(name, manufacturer, vehicleId, airplaneType) {
        super(name, manufacturer, vehicleId);
        this.airplaneType = airplaneType; 
    }
}


class Employee {
    constructor(name, employeeId, dob) {
        this.name = name;
        this.employeeId = employeeId;
        this.dob = dob;
    }
}


class Driver extends Employee {
    constructor(name, employeeId, dob, licenseId) {
        super(name, employeeId, dob);
        this.licenseId = licenseId;
    }
}


class Pilot extends Employee {
    constructor(name, employeeId, dob, licenseId) {
        super(name, employeeId, dob);
        this.licenseId = licenseId;
    }
}


class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationId) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehicleId = vehicleId;
        this.reservationId = reservationId;
    }
}


function createReservation(employee, vehicle) {
    if (employee instanceof Pilot && vehicle instanceof Airplane) {
        const newReservation = new Reservation(new Date(), employee.employeeId, vehicle.vehicleId, 'Airplane-546');
        reservations.push(newReservation);
    } else if (employee instanceof Driver && vehicle instanceof Car) {
        const newReservation = new Reservation(new Date(), employee.employeeId, vehicle.vehicleId, 'Car-123');
        reservations.push(newReservation);
    } else {
        console.log('error');
    }
}

const reservations = [];
const car1 = new Car("Car1", "Manufacturer1", "ID1", "Electric");
const car2 = new Car("Car2", "Manufacturer2", "ID2", "Gas");
const plane1 = new Airplane("Plane1", "Manufacturer3", "ID3", "Jet");
const plane2 = new Airplane("Plane2", "Manufacturer4", "ID4", "Jet");
const driver1 = new Driver("Driver1", "111", "1999-01-01", "abc123");
const pilot1 = new Pilot("Pilot1", "112", "2000-01-01", "124bcd");

createReservation(pilot1, plane1); 
createReservation(driver1, car1);  
console.log(reservations);
