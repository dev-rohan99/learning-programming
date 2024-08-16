<?php

    // while loop
    $a = 1;
    while($a <= 5){
        echo $a.". " ."Never give up!<br>";
        $a++;
    };

    // do while loop
    $b = 1;
    do{
        echo $b.". " ."Never give up!<br>";
        $b++;
    }while($b <= 5);

    // for loop
    for($i = 1; $i <= 10; $i++){
        echo $i.". " ."Never give up!<br>";
    };

    // nested loop
    for($x = 1; $x <= 100; $x += 10){
        for($y = $x; $y < $x + 10; $y++){
            echo $y ." ";
        }
    };

    // continue and break statement
    for($z = 1; $z <= 10; $z++){
        if($z == 3){
            // echo "Never give up!<br>";
            continue;
        }
        echo "Never give up!<br>";
    };

    // go to statement
    for($m = 1; $m <= 10; $m++){
        if($m == 3){
            // echo "Never give up!<br>";
            goto abc;
        }
        echo $m;
    };
    echo "Never give up!<br>";
    abc:
    echo "Never give up man!<br>";
    


?>