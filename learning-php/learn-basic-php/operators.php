<?php

    $a = 10;
    $b = 3;
    $c = $a + $b;
    $d = $a - $b;
    $e = $a * $b;
    $f = $a / $b; 
    $g = $a ** $b; // 10 * 10 + 10 = 1000
    $h = $a % $b; // 1
    $a++;
    $a++;
    ++$a; // alternative way
    $b--;
    $b--;
    --$b; // alternative way
    // Assignment Operators
    $x = 10;
    $y = 3;
    $x **= $y;

    echo $a;
    echo $b;
    echo "<h3>" .$c. "</h3>";
    echo "<h3>" .$d. "</h3>";
    echo "<h3>" .$e. "</h3>";
    echo "<h3>" .$f. "</h3>";
    echo "<h3>" .$g. "</h3>";
    echo "<h3>" .$h. "</h3>";
    echo "---------------------------------------";
    echo "<h3>" .$x. "</h3>";

    // Comparison Operators
    $xy = 15;
    $ab = 25;

    echo $xy == $ab;
    echo $xy === $ab;
    echo $xy != $ab;
    echo $xy !== $ab;
    echo $xy <> $ab;
    echo $xy <=> $ab;
    echo $xy <= $ab;
    echo $xy >= $ab;
    echo $xy < $ab;
    echo $xy > $ab;

    $abc = 15;
    $def = 25;
    $deff = false;

    // Logical Operators = &&
    if($abc < 20 && $def > 15){
        echo "Not Matched";
    }
    // Logical Operators = &&
    if($abc < 20 and $def > 15){
        echo "Not Matched";
    }
    // Logical OR Operators = ||
    if($abc < 20 || $def > 158){
        echo "Not Matched";
    }
    // Logical Not Operators = !
    if(!($deff)){
        echo "False";
    }
    // Logical Exclusive Or Operators = !
    if($abc > 20 xor $def < 50){
        echo "True";
    }

    // tarnary operator
    $xyz = 15;
    ($xyz > 20) ? $xyz = "Greater" : $xyz = "Smaller";
    echo $xyz;

    // string operator
    $nam1 = "Rohan";
    echo "<br>" . $nam1 . " Mostofa<br>";

    $s = "I'm";
    $s .= " Full Stack Web Developer!";
    echo $s;


?>
