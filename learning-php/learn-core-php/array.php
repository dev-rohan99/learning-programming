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

    // PHP Array_Slice Function
    $newFruts = array_slice($fruts, 1, 2);
    $newFruts2 = array_slice($fruts, -3, 2);

    echo "<pre>";
    print_r($newFruts);
    echo "</pre>";

    echo "<pre>";
    print_r($newFruts2);
    echo "</pre>";

    // PHP Array_Splice Function
    $frutsThree = ["Orange", "Apple"];
    $frutsFour = ["Cheri", "Guaba"];
    array_splice($frutsThree, 0, 1, $frutsFour);

    echo "<pre>";
    print_r($frutsThree);
    echo "</pre>";

    // PHP Array_Merge & Array_Combine
    $foods1 = ["Rice", "Meat", "Kacchi"];
    $foods2 = ["Beaf", "KFC", "Grill"];
    $newFoodsArr = array_merge($foods1, $foods2);

    echo "<pre>";
    print_r($newFoodsArr);
    echo "</pre>";

    $colorOne = ["r" => "Red", "g" => "Green", "y" => "yellow", "p" => "Ping"];
    $colorOTwo = ["b" => "Blue"];
    $newColorsArr = array_merge($colorOne, $colorOTwo);
    
    echo "<pre>";
    print_r($newColorsArr);
    echo "</pre>";

    $colorThree = ["r" => "Red", "g" => "Green", "y" => "yellow", "p" => "Ping"];
    $colorFour = ["b" => ["color" => ["Blue", "Gray"]], 544, 44];
    $newColorsTwoArr = array_merge_recursive($colorThree, $colorFour);
    
    echo "<pre>";
    print_r($newColorsTwoArr);
    echo "</pre>";

    $foodss1 = ["Rice", "Meat", "Kacchi"];
    $foodss2 = [45, 54, 45];
    $newFoodssArr = array_combine($foodss1, $foodss2);

    echo "<pre>";
    print_r($newFoodssArr);
    echo "</pre>";

    // PHP Array Key Functions
    $arrayKeyOne = array_keys($colorThree);
    $arrayKeyTwo = array_key_first($colorThree);
    $arrayKeyThree = array_key_last($colorThree);
    $arrayKeyFour = array_key_exists("r", $colorThree);

    echo "<pre>";
    // print_r($arrayKeyOne);
    // print_r($arrayKeyTwo);
    // print_r($arrayKeyThree);
    print_r($arrayKeyFour);
    echo "</pre>";
    
    // PHP Array Intersect Functions

    function compare($a1, $a2){
        if($a1 === $a2){
            return 0;
        }
        return ($a1 > $a2) ? 1 : -1;
    }

    $a1 = ["r" => "Red", "g" => "Green", "y" => "yellow", "p" => "Ping"];
    $a2 = ["r" => "Red", "g" => "Green"];
    $a3 = ["r" => "Red", "g" => "Green", "h" => "yellow"];
    $newArr3 = array_intersect($a1, $a2, $a3);
    $newArr4 = array_intersect_key($a1, $a2, $a3);
    $newArr5 = array_intersect_assoc($a1, $a2, $a3);
    $newArr6 = array_intersect_uassoc($a1, $a2, "compare");
    $newArr7 = array_intersect_uassoc($a1, $a2, "strcasecmp");

    echo "<pre> Hello";
    print_r($newArr3);
    echo "</pre>";

    echo "<pre>";
    print_r($newArr4);
    echo "</pre>";

    echo "<pre>";
    print_r($newArr5);
    echo "</pre>";

    echo "<pre>";
    print_r($newArr6);
    echo "</pre>";

    echo "<pre> Hello";
    print_r($newArr7);
    echo "</pre>";

    // PHP Array Diff & Udiff Functions

    function compareFunc($a1, $a2){
        if($a1 === $a2){
            return 0;
        }
        return ($a1 > $a2) ? 1 : -1;
    }

    function compareValue($a1, $a2){
        if($a1 === $a2){
            return 0;
        }
        return ($a1 > $a2) ? 1 : -1;
    }

    $newArr8 = array_diff($a1, $a2, $a3);
    $newArr9 = array_diff_assoc($a1, $a2, $a3);
    $newArr10 = array_diff_uassoc($a1, $a2, "compareFunc");
    $newArr11 = array_udiff_assoc($a1, $a2, "compareFunc");
    $newArr12 = array_diff_ukey($a1, $a2, "compareFunc");
    $newArr13 = array_udiff($a1, $a2, "compareFunc");
    $newArr14 = array_udiff_uassoc($a1, $a2, "compareFunc", "compareValue");

    echo "<pre>as";
    print_r($newArr8);
    echo "</pre>";

    echo "<pre>";
    print_r($newArr9);
    echo "</pre>";

    echo "<pre>";
    print_r($newArr10);
    echo "</pre>";

    echo "<pre>";
    print_r($newArr11);
    echo "</pre>";

    echo "<pre>";
    print_r($newArr12);
    echo "</pre>";

    echo "<pre>";
    print_r($newArr13);
    echo "</pre>";

    echo "<pre>as";
    print_r($newArr14);
    echo "</pre>";

    // PHP Array_Values & Array_Unique
    $x1 = ["a" => "Red", "b" => "Green", "c" => "yellow", "d" => "Ping", "e" => "Red",];
    $newColorArr1 = array_values($x1);
    $newColorArr2 = array_unique($x1);

    echo "<pre>";
    print_r($newColorArr1);
    echo "</pre>";

    echo "<pre>";
    print_r($newColorArr2);
    echo "</pre>";

    // PHP Array_Column & Array_Chunk Function
    $x1Array = array(
        array(
            'id' => 2201,
            'first_name' => 'Anil',
            'last_name' => 'Kapoor',
        ),
        array(
            'id' => 2202,
            'first_name' => 'Salman',
            'last_name' => 'Khan',
        ),
        array(
            'id' => 2203,
            'first_name' => 'John',
            'last_name' => 'Abraham'
        )
    );

    $newX1Arr = array_column($x1Array, "first_name", "id");

    echo "<pre>";
    print_r($newX1Arr);
    echo "</pre>";

    $x1Foods = ["Rice", "Meat", "Kacchi", "Beaf", "KFC", "Grill"];
    $newX1Foods = array_chunk($x1Foods, 2);

    echo "<pre>";
    print_r($newX1Foods);
    echo "</pre>";

    $x1Age = array(
        "Mohan" => "35",
        "Aman" => "37",
        "Ram" => "43",
        "Salman" => "25"
    );
    $newX1Age = array_chunk($x1Age, 3);
    $newX1Age2 = array_chunk($x1Age, 3, true);

    echo "<pre>";
    print_r($newX1Age);
    // print_r($newX1Age2);
    echo "</pre>";

    // shorting 

    $sortFruts = array("Orange", "Banana", "Apple");
    $numberSort = [23, 4, 23, 65];

    sort($sortFruts);
    rsort($numberSort);

    echo "<pre>";
    print_r($sortFruts);
    echo "</pre>";

    echo "<pre>";
    print_r($numberSort);
    echo "</pre>";

    $sortAsoFruts = array(
        "d" => "Orange",
        "a" => "Apple",
        "z" => "Banana"
    );

    // asort($sortAsoFruts);
    // arsort($sortAsoFruts);
    // ksort($sortAsoFruts);
    krsort($sortAsoFruts);

    echo "<pre>";
    print_r($sortAsoFruts);
    echo "</pre>";

    $imageArray = array("img12.png", "img2.png", "Img90.png", "img1.png");

    // natural order array sort
    // natsort($imageArray);
    natcasesort($imageArray);

    echo "<pre>";
    print_r($imageArray);
    echo "</pre>";
    
    $sortFruts2 = array("Orange", "Banana", "Apple");
    $numberSort2 = [23, 4, 23];
    array_multisort($sortFruts2, $numberSort2);

    echo "<pre>";
    print_r($sortFruts2);
    echo "</pre>";

    echo "<pre>";
    print_r($numberSort2);
    echo "</pre>";

    // array traversing

    $frutsArrOne = array("Orange", "Banana", "Apple", "Guava");

    echo "<b>Current: </b>" . current($frutsArrOne) . "<br/>";
    echo "<b>Key: </b>" . key($frutsArrOne) . "<br/>";
    echo "<b>Position: </b>" . pos($frutsArrOne) . "<br/>";
    next($frutsArrOne);
    echo "<b>Next: </b>" . current($frutsArrOne) . "<br/>";
    prev($frutsArrOne);
    echo "<b>Prev: </b>" . current($frutsArrOne) . "<br/>";
    end($frutsArrOne);
    echo "<b>Prev: </b>" . current($frutsArrOne) . "<br/>";
    echo "<b>Prev: </b>" . key($frutsArrOne) . "<br/>";
    
    echo "<pre>";
    // print_r(each($frutsArrOne));
    echo "</pre>";

    reset($frutsArrOne);
    echo "<b>Reset: </b>" . current($frutsArrOne) . "<br/>";

    // php array list function

    $listColor = array("Red", "Green", "Blue");
    $listColor2 = array(0 => "Red", 1 => "Green", 2 => "Blue");

    list($a, $b, $c) = $listColor;
    list($x, $y, $z) = $listColor2;

    echo "Value of a: $a <br/>";
    echo "Value of b: $b <br/>";
    echo "Value of c: $c <br/><br/>";

    echo "Value of x: $x <br/>";
    echo "Value of y: $y <br/>";
    echo "Value of z: $z <br/><br/>";

    // php array extract
    
    $a = "Oranges";
    $color5 = array("a" => "Red", "b" => "Green", "c" => "Blue");

    // extract($color5);
    // extract($color5 , EXTR_OVERWRITE);
    // extract($color5 , EXTR_SKIP);
    // extract($color5 , EXTR_REFS);
    // extract($color5 , EXTR_PREFIX_SAME, "test");
    extract($color5 , EXTR_PREFIX_ALL, "test2");

    // echo "Value of a_test: $test_a <br/>";


    // echo "Value of a: $a <br/>";
    // echo "Value of b: $b <br/>";
    // echo "Value of c: $c <br/><br/>";

    echo "Value of a: $test2_a <br/>";
    echo "Value of b: $test2_b <br/>";
    echo "Value of c: $test2_c <br/><br/>";

    // php array compact

    $firstName = "Rohan";
    $lastName = "Mostofa";
    $age = 22;

    $newDataArr = compact("firstName", "lastName", "age");

    echo "<pre>";
    print_r( $newDataArr );
    echo "</pre>";

    // php array range

    $newRangeArr = range(0, 100, 10);
    $newRangeArr2 = range("r", "a");

    echo "<pre>";
    print_r( $newRangeArr );
    echo "</pre>";

    echo "<pre>";
    print_r( $newRangeArr2 );
    echo "</pre>";

    foreach( $newRangeArr2 as $letter){
        echo "Letter: $letter <br/>";
    };

    




