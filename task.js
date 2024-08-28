brand = "Audi"
modelYear = 2000
model = "A3"
currentMileage = 6000
bigServiceMileage = 6000

console.log(`You own a ${brand} ${model} that has been driven for ${currentMileage} km`);

const kilometerkvar = bigServiceMileage - currentMileage

if (currentMileage > bigServiceMileage){
    console.log("Time for big service")
}
else if (currentMileage < bigServiceMileage){
    console.log(`You can drive ${kilometerkvar} kilometers before it's time for big service`)
} 
else {
    console.log("Perfect timing for the big service")
};
console.log("")
