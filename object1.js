/*
//Scenario
//You’ve been hired to help a logistics company build a system to manage its fleet of
//vehicles. The system should be able to:
//1. Create individual vehicles with properties like type, make, model, year, and
//mileage.
//2. Add a method to update the mileage of a vehicle when it is used.
//3. Add a method to display the details of the vehicle in a user-friendly format.
//4. Instantiate multiple vehicles from the class and test your methods.
//Tasks
//1. Define the Vehicle Class:
//○ The constructor should include properties: type, make, model, year,
//and mileage.
//○ Use default values for mileage (e.g., 0).
//2. Add Methods:
//○ drive(distance): Increases the vehicle’s mileage by the given
//distance (in kilometers or miles).
//○ getDetails(): Returns a formatted string describing the vehicle’s
//details.
//3. Create and Use Vehicle Objects:
//○ Instantiate at least three vehicle objects with different properties (e.g.,
//a car, a truck, and a motorcycle).
//○ Use the drive method to simulate trips and update mileage.
//○ Use the getDetails method to print each vehicle’s updated
*/
// Define the Vehicle class
class Vehicle {
  constructor(type, make, model, year, mileage = 0) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  //method to update the vehicle's mileage
   drive(distance) {
  this.mileage += distance;
  }

  // Method to return a formatted string with vehicle details
  getDetails() {
    return `${this.year} ${this.make} ${this.model} (${this.type}) - Mileage: ${this.mileage} miles`;
  }
  }

// Create three vehicle objects
const car = new Vehicle('Car', 'Toyota', 'Corolla', 2018);
const truck = new Vehicle('Truck', 'Ford', 'F-150', 2007);
const motorcycle = new Vehicle('Motorcycle', 'Harley-Davidson', 'Sportster', 2021);

// Simulate driving the vehicles
car.drive(150);
truck.drive(300);
motorcycle.drive(50);

// Print vehicle details by using getDetails method
console.log(car.getDetails());       // Outputs: 2018 Toyota Corolla (Car) - Mileage: 150 miles
console.log(truck.getDetails());     // Outputs: 2007 Ford F-150 (Truck) - Mileage: 300 miles
console.log(motorcycle.getDetails()); // Outputs: 2021 Harley-Davidson Sportster (Motorcycle) - Mileage: 50 miles