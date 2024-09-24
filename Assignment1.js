console.log("Welcome to Learn JavaScript");

console.log("Even or Odd Program");

let a = prompt("Enter The number to check Even / Odd");
if(a%2==0){
    console.log("Even Number");}
    else{
        console.log("Odd Number");

    }




let persentage=prompt("Enter your Persentage");


if(persentage >= 80 && persentage <=100){
    console.log("A1 Grade")
}
else if(persentage >=101 || persentage <=0){
    console.log("Invalid Input");
}
else if(persentage >=70 && persentage <= 79){
    console.log("B Grade");
}
else if(persentage >=60 && persentage <= 69){
    console.log("C Grade");
}else if(persentage >=50 && persentage <= 59){
    console.log("D Grade");
}else{
        console.log("Fail")
}




// To print Table according to the user's wish if non so print Table of 5 ( it also asks to user the stating & Ending point )
let Table=prompt("Enter your Table ");
let stating=prompt("Enter your Starting point of Table ");
let ending=prompt("Enter your Ending point of Table ");

if(Table == ""){
    for(i=1; i<=10; i++){
        console.log("5" , "*" , i , "=" , i*5)
    }
}
else{
    for(i=stating; i<=ending; i++)
    console.log(Table , "*" , i , "=" , Table*i)
    console.log("Hamid Miya")
}

