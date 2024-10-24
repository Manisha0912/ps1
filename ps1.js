

// 1)Income Tax Calculation Based on Income Slabs
// Problem:
// Write a program to calculate income tax based on the following slabs:

// Income <= 2,50,000: No tax

// Income > 2,50,000 and <= 5,00,000: 5% of the amount exceeding 2,50,000

// Income > 5,00,000 and <= 10,00,000: 12,500 + 20% of the amount exceeding 5,00,000

// Income > 10,00,000: 1,12,500 + 30% of the amount exceeding 10,00,000

// Requirements:

// Input: A variable representing income

// Output: Total tax payable


let income = prompt("Enter your annual income: "); 
let tax = 0;

if (income <= 250000) {
    tax = 0;
} else if (income > 250000 && income <= 500000) {
    tax = (income - 250000) * 0.05;
} else if (income > 500000 && income <= 1000000) {
    tax = 12500 + (income - 500000) * 0.20;
} else {
    tax = 112500 + (income - 1000000) * 0.30;
}


console.log("Total tax payable: ₹" + tax);


// 2.Shipping Cost Based on Weight and Destination

// Problem:
// Write a program that calculates the shipping cost for a parcel based on its weight and destination:

// Weight <= 1kg:

// Local: 5rs
// National: 8rs

// International: 15rs

// Weight > 1kg and <= 5kg:

// Local: 10rs

// National: 15rs

// International: 30rs

// Weight > 5kg and <= 10kg:

// Local: 20rs

// National: 25rs

// International: 50rs

// Weight > 10kg:

// Local: 30rs

// National: 35rs


// International: 70rs

// Requirements:

// Input: Two variables for weight and destination

// Output: The total shipping cost


let weight = prompt("Enter weight in kg:");
let destination = prompt("Enter destination (local, national, international):").toLowerCase(); // Convert to lowercase for easier comparison
let totalcost = 0;


if (weight <= 1) {
    if (destination === "local") {
        totalcost = 5;
    } else if (destination === "national") {
        totalcost = 8;
    } else if (destination === "international") {
        totalcost = 15;
    }
} else if (weight > 1 && weight <= 5) {
    if (destination === "local") {
        totalcost = 10;
    } else if (destination === "national") {
        totalcost = 15;
    } else if (destination === "international") {
        totalcost = 30;
    }
} else if (weight > 5 && weight <= 10) {
    if (destination === "local") {
        totalcost = 20;
    } else if (destination === "national") {
        totalcost = 25;
    } else if (destination === "international") {
        totalcost = 50;
    }
} else {
    if (destination === "local") {
        totalcost = 30;
    } else if (destination === "national") {
        totalcost = 35;
    } else if (destination === "international") {
        totalcost = 70;
    }
}

 console.log("The total shipping cost: " + totalcost + "/-");


// 3 Electricity Bill Calculation Based on Usage

// Problem:
// Write a program to calculate the electricity bill based on the number of units consumed:

// Units <= 100: 1rs per unit

// Units > 100 and <= 300: 1rs per unit for the first 100 units + 1.5rs per unit for the next 200 units

// Units > 300: 1rs per unit for the first 100 units + 1.5rs per unit for the next 200 units + 2rs per unit beyond 300

// Requirements:

// Input: A variable representing the number of units consumed

// Output: Total electricity bill amount



let units=prompt("enter the no. of units:");

if( units <= 100){
    units=1*units;
}
else if( units>100 && units<=300){
    units= (1*100)+(units-100)*1.5;
}
else{
    units=(1*100)+(1.5*200)+(units-300)*2;
}
console.log("total electricity bill amount:"+ units);