<?php

    function helloFunc(){
        echo "Hello world!<br>";
    }
    helloFunc();

    function myFunction($name, $age){ // parameter = name, age
        echo "My name is " . $name . " & i'm " . $age . " years old.";
    }
    myFunction("Rohan Mostofa Abir", 21); // argument

    function myFunctionTwo($name = "Rohan Mostofa", $age = 21){ // parameter = name, age
        echo "<br>My name is " . $name . " & i'm " . $age . " years old.";
    }
    myFunctionTwo(); // argument

    function myReturnFunc($numbOne, $numbTwo){
        return "<br>" . $numbOne ** $numbTwo;
    }
    $x = myReturnFunc(50, 3);
    echo $x;

    // Function Argument By Reference
    function myFunctionThree($name){
        echo "<br>My name is " . $name . ".";
    }
    $nam = "Rohan Mostofa Abir";
    myFunctionThree($nam);

    // Variable Functions
    function wow($name){
        echo "<br>Hello World! " . $name . ".";
    }
    $func = "wow";
    $func("Rohan Mostofa Abir");

    // $sayHello = function($name){
    //     echo "<br>Hello World! " . $name . ".";
    // }
    // $sayHello("Rohan Mostofa Abir");

    // Recursive Function
    function display($number){
        if($number < 5){
            echo "$number <br>";
            display($number + 1);
        }
    }
    display(2);

    function factorial($n) {
        if($n == 0){
            return 1;
        }else{
            return ($n * factorial($n - 1));
        }
    }
    echo factorial(5);

    // Global & Local Variable
    $ab = 10;
    $xy = 15;
    $yz = 25;

    function test(){
        global $xy, $yz;
        // echo $ab; // this varible is global 
        $xy += $yz;
        // echo $xy;
    }
    test();
    echo "<br>" . $xy;


?>