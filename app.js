//CHAPTER NO.17-20 :
//task no .1 :

var arr = [[]];


//task no .2 :
var arr = [[0,1,2,3],
[1,0,1,2],
[2,1,0,1]];

//task no .3 :
for(i=1; i<=10; i++){
    document.write(i);
}

//task no .4 
var tableNumber = +prompt("Enter a number to show its multiplication table");
var tableLength = +prompt("Enter length multiplication table");
document.write("Multiplication table of " + tableNumber + "<br>");
document.write("Length " + tableLength + "<br>");
for(i=1; i<=tableLength; i++){
    document.write(tableNumber + " X " + i + " = " + tableNumber*i );
}

//task no .5:
var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

for(var i = 0; i <= fruits.length-1; i++){
    document.write(fruits[i]+ "<br>")
}
document.write("<br>")


//task no .6 :
var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

for(var i = 0; i <= fruits.length-1; i++){
    document.write(fruits[i]+ "<br>")
}
document.write("<br>")


for(var i = 0; i <= fruits.length-1; i++){
    document.write("Element at index "+i+ " is "+fruits[i]+ "<br>")
}

// Reverse counting
document.write("<h4>" + "Reverse Counting" + "</h4>")
for(i=10; i>0; i--){
    document.write(i + ", ");
}
//Even:
document.write("<h3>Even: </h3>"+ "<br>");
for(var i = 0; i <= 20; i=i+2){
    document.write(i+ " , ");
}

//Odd:
document.write("<h3>Odd: </h3>"+ "<br>");
for(var i = 1; i <= 20; i=i+2){
    document.write(i+ " , ");
}

// series
document.write("<h3>Series: </h3>"+ "<br>");
for(var i = 0; i <= 20; i=i+2){
    document.write(i+ "k, ");
}

//task no .7 :
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt("What do you want from bakery");

var check = false;
for (var i = 0; i < A.length; i++) {

    if (search == A[i]) {
        check = true;
        document.write(search + " is available at index " + i + " in our bakery")
        
    }

}
    
    if (!check) {
        document.write("We are sorry "+ search + " is not available in our bakery");
    }
    



//task no .8 :

var arr = [24, 53, 78, 91, 12];
var largestNumber = arr[0];
for(i = 0; i < arr.length; i++){
    if(arr[i] > largestNumber){
        largestNumber = arr[i];
    }
}
document.write("Array items: " + arr + "<br>");
document.write("The largest number is " + largestNumber);

//task no .9 :

var arr = [24, 53, 78, 91, 12];
var smallestNumber = arr[0];
for(i = 0; i < arr.length; i++){
    if(arr[i] < smallestNumber){
        smallestNumber = arr[i];
    }
}
document.write("Array items: " + arr + "<br>");
document.write("The smallest number is " + smallestNumber);

document.write("Array items: " + arr + "<br>");
document.write("The smallest number is " + smallestNumber);

//task no .10 :
for(i=5; i<=100; i=i+5){
    document.write(i + ", ");
}