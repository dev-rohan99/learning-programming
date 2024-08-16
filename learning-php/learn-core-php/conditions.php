<?php

    // Conditional Statements
    $x = 15;
    $y = 25;

    if($x === $y){
        echo "Matched!";
    }else{
        echo "Not matched!";
    }

    if($x === $y): echo "Matched!";
    endif;
    echo "Not matched!";

    $marks = 70;

    if($marks >= 80 && $marks <= 100){
        echo "You are in Merit!";
    }elseif($marks >= 60 && $marks < 80){
        echo "You are in Ist Devision!";
    }elseif($marks >= 45 && $marks < 60){
        echo "You are in IIst Devision!";
    }elseif($marks >= 33 && $marks < 45){
        echo "You are in IIIst Devision!";
    }elseif($marks < 33){
        echo "You are fail!";
    }else{
        echo "Please enter valid number!";
    }

?>