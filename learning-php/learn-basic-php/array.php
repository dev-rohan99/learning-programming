<?php

    $names = array("Rohan Mostofa Abir", "Rohan Mostofa Abir", "SM Abdullah", "Md Monirujjaman");
    echo $names[0] . "<br>";
    echo $names[1] . "<br>";
    echo $names[2] . "<br>";

    // Array Count & Sizeof
    echo count($names) . "<br><br>";
    echo sizeof($names)  . "<br><br>";
    echo "<pre>";
    print_r(array_count_values($names));
    echo "</pre>";
    echo "<br><br>";

    // loop 
    for($i = 0; $i < count($names); $i++){
        echo $names[$i] . "<br>";
    }

    $ages = array(20, 23, 25);
    echo $ages[0] . "<br>";
    echo $ages[1] . "<br>";
    echo $ages[2] . "<br>";

    $user = ["Rohan Mostofa Abir", 22, "Krishnapur, Chachuri Purulia, Kalia, Narail"];
    echo $user[0] . "<br>";
    echo $user[1] . "<br>";
    echo $user[2] . "<br>";
    echo "<pre>";
    print_r($user);
    echo "</pre>";

    $user2[0] = "SM Abdullah";
    $user2[1] = 23;
    $user2[2] = "Krishnapur, Chachuri Purulia, Kalia, Narail";
    echo "<pre>";
    print_r($user2);
    echo "</pre>";

    // Associative Array
    $names2 = array(
        "name1" => "Rohan Mostofa Abir", 
        "name2" => "SM Abdullah", 
        "name3" => "Md Monirujjaman"
    );
    echo $names2["name1"] . "<br>";
    echo $names2["name2"] . "<br>";
    echo $names2["name3"] . "<br>";
    echo "<pre>";
    print_r($names2);
    echo "</pre>";
    echo "<pre>";
    var_dump($names2);
    echo "</pre>";

    // Foreach Loop
    foreach($user as $data){
        echo $data . "<br>";
    }

    foreach($names2 as $data){
        echo $data . "<br>";
    }

    echo "<ul>";
    foreach($names2 as $key => $data){
        echo "<li>" . $key . ". " . $data . "</li>";
    }
    echo "</ul>";

    // Multidimensional Array
    $students = array(
        array(1, "Rohan Mostofa", "11th", 01),
        array(2, "Salman Sheikh", "11th", 02),
        array(3, "SM Abdullah", "11th", 03)
    );
    echo "<pre>";
    var_dump($students);
    echo "</pre>";

    $employees = [
        [1, "Rohan Mostofa", "Manager", 50000],
        [2, "Salman Sheikh", "Product Designer", 40000],
        [3, "SM Abdullah", "Full Stack Developer", 50000]
    ];

    // Array Count & Sizeof
    echo count($employees, 1) . "<br><br>";
    echo sizeof($employees, 1)  . "<br><br>";

    echo "<pre>";
    var_dump($employees);
    echo "</pre>";

    // for loop 
    for($row = 0; $row < count($employees); $row++){
        for($col = 0; $col < count($employees[0]); $col++){
            echo $employees[$row][$col] . " - ";
        }
        echo "<br>";
    }

    // foreach loop 
    echo "<table border='1px' cellpadding='5px'>";
    foreach($students as $v1){
        echo "<tr>";
        foreach($v1 as $v2){
            echo "<td>" . $v2 . "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";

    // Multidimensional Associative Array
    $students2 = array(
        "data1" => array( "name1" => "Rohan Mostofa", "class1" => "11th", "roll1" => 01),
        "data2" => array( "name2" => "Salman Sheikh", "class2" => "11th", "roll2" => 02),
        "data3" => array( "name3" => "SM Abdullah", "class3" => "11th", "roll3" => 03)
    );
    echo "<pre>";
    var_dump($students2);
    echo "</pre>";

    foreach($students2 as $key => $v1){
        foreach($v1 as $key => $v2){
            echo $v2 . " - ";
        }
        echo "<br>";
    }

    $employees2 = [
        "emp1" => ["nam1" => "Rohan Mostofa", "role1" => "Manager", "salary1" => 50000],
        "emp2" => ["nam2" => "Salman Sheikh", "role2" => "Product Designer", "salary2" => 40000],
        "emp3" => ["nam3" => "SM Abdullah", "role3" => "Full Stack Developer", "salary3" => 50000]
    ];

    // Array Count & Sizeof
    echo count($employees2["emp1"], 1) . "<br><br>";
    echo sizeof($employees2["emp1"], 1)  . "<br><br>";

    echo "<pre>";
    var_dump($employees2);
    echo "</pre>";

    foreach($employees2 as $key => $v1){
        foreach($v1 as $key => $v2){
            echo $v2 . " - ";
        }
        echo "<br>";
    }

    // Foreach Loop with List function
    $employees3 = [
        [1, "Rohan Mostofa", "Manager", 50000],
        [2, "Salman Sheikh", "Product Designer", 40000],
        [3, "SM Abdullah", "Full Stack Developer", 50000]
    ];

    $employees4 = [
        [
            "id" => 1,
            "name" => "Krishana",
            "designation" => "Manager",
            "salary" => 50000
        ],
        [
            "id" => 2,
            "name" => "Salman",
            "designation" => "Salesman",
            "salary" => 20000
        ],
        [
            "id" => 2,
            "name" => "Salman",
            "designation" => "Salesman",
            "salary" => 20000
        ]
    ];

    echo "<table border='1px' cellpadding='5px'>";
    foreach($employees3 as list($id, $name, $role, $salary)){
        echo "<tr><td>$id</td> <td>$name</td> <td>$role</td> <td>$salary</td></tr>";
    }
    echo "</table>";

    echo "<table border='1px' cellpadding='5px'>";
    foreach($employees4 as list("id" => $id, "name" => $name, "designation" => $role, "salary" => $salary)){
        echo "<tr><td>$id</td> <td>$name</td> <td>$role</td> <td>$salary</td></tr>";
    }
    echo "</table>";

    // Array In_array & Array_search Function
    $food = array("Orange", "Apple", "Banana");
    
    echo in_array("Apple", $food);
    echo in_array("Potol", $food);

    if(in_array("Apple", $food, true)){
        echo "Data found!";
    }else{
        echo "Data not found!";
    }

    echo array_search("Orange", $food);
    echo array_search("Potol", $food);

    if(array_search("Potol", $food, true)){
        echo "Data found!";
    }else{
        echo "Data not found!";
    }

    // Array_replace & Array_replace_recursive
    $foods = ["Rice", "Meat", "Kacchi", "Beaf", "KFC", "Grill"];
    $color = ["Red", "Green", "Blue"];
    // $veggi = ["Law", "Kumra", "Potol", "Begun"];
    $color2 = ["r" => "Red", "g" => "Green", "y" => "yellow", "p" => "Ping", 9 => "Blue"];
    $newFoodsArray = array_replace($foods, $color, $color2);
    echo "<pre>";
    print_r($newFoodsArray);
    echo "</pre>";
    
    $array1 = ["r" => array("Red"), "g" => array("Green"), "y" => array("yellow", "Coral"), "p" => array("Ping"), 9 => array("Blue")];
    $array2 = ["r" => array("Vhat"), "g" => array("Mas"), "y" => array("Gosh")];
    $newFoodsArray2 = array_replace_recursive($array1, $array2);
    echo "<pre>";
    print_r($newFoodsArray2);
    echo "</pre>";

    // delete one item from last with array_pop
    $fruts = ["Orange", "Apple"];
    array_pop($fruts);

    echo "<pre>";
    print_r($fruts);
    echo "</pre>";

    // add items with array_push
    array_push($fruts, "Cheri", "Banana");

    echo "<pre>";
    print_r($fruts);
    echo "</pre>";

    // delete one item from first with array_shift
    array_shift($fruts);

    echo "<pre>";
    print_r($fruts);
    echo "</pre>";

    // add items from first with array_unshift
    array_unshift($fruts, "Guaba", "Malta", "Lemon");

    echo "<pre>";
    print_r($fruts);
    echo "</pre>";
    

?>