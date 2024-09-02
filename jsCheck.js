console.log("Hello fish");
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="myFunction()">Click Me!!</button>
    <h1>GI Network Solutions</h1>
    <script>
        function myFunction(){
            alert("This is the result of your click!!!!");
        }
        function calculateFinalBill(){
            let quantity= prompt("Enter your item count: ");
            let price= prompt("Enter price : ");
            let tot= quantity*price;
            document.write("Total : $"+tot);
        }
        calculateFinalBill();


        console.log("This is the output");
        console.log("Hello"+ 12);
        //prototype base
        //can string concat
        //if you use var keyword that variable become global variable
        //if you use let or const that variable become local variable
        var vari1= "Name";
        let vari2=12;
        const vari3= 13.2;
        // vari3=23.4;
        //popUp the assigment error, bcz const value is the final value, we can't change the value of the constant variable.
        // console.log(vari3);
        var fName="Gihan";
        let age=23;
        const birthYear= 2001;
        //1st type to String concatination
        console.log(fName+" "+age+" "+birthYear);
        let currentYear=2024;
        //2nd type to String concatination
        console.log(`My name is ${fName}\nMy age is ${currentYear-birthYear}\nMy birthYear ${birthYear}`);
        //if-Else condition.
        if(currentYear-birthYear>18){
            console.log("You can drive a vehicle")
        }else{
            console.log("You can't drive a vehicle.")
        }
        //
        let licenseNumber= prompt("Enter your previous relationship count: ");
        if(licenseNumber>=5){
            console.log("You are Master.");
        }else{
            console.log("You are Looser.");
        }

        let day=Number(prompt("Enter day number: "));
        switch(day){
            case 1:
                console.log("Monday!");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
                console.log("Out of week");
        }
        let country= prompt("Enter Country: ");
        let ageElection= Number(prompt("Enter Age: "));

        if(country==="Sri Lanka" && ageElection>=18){
            console.log("You'r in UNP Party");
        }else{
            console.log("You'r in JVP Party");
        }

    </script>
</body>

</html>
