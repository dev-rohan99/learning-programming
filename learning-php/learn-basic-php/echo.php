
<?php

    // print "<h1>Dev ',' Rohan</h1>";
    echo "<h1>Dev "," Rohan</h1>";
    print 25.65;

    $name = "Rohan Mostofa"; // string type
    echo "<h1>" .$name. "</h1>";

    $num = 546; // integer type
    echo "<h1>" .$num. "</h1>";

    $str = "54612"; // string type
    echo "<h1>" .$str. "</h1>";

    $floatNum = 23456.545; // float type
    echo "<h1>" .$floatNum. "</h1>";

    $bool = true; // boolean type
    echo "<h1>" .$bool. "</h1>";
    var_dump($bool);

    $nullType = null; // null type
    echo "<h1>" .$nullType. "</h1>";

    $skills = array("HTML", "CSS", "JavaScript"); // array type
    echo "<h1>" .$skills[0]. "</h1>";
    var_dump($skills);

    // constant variable
    define("GREETING", "Hello you! How are you today?");
    echo constant("GREETING");

?>

