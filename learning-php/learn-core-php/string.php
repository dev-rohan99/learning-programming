<?php

    // php explode & implode

    $strToArr = "Helo everyone, I am Rohan Mostofa Abir.";

    $convertedArr = explode(" ", $strToArr);
    // $convertedArr = explode(" ", $strToArr, 3);
    // $convertedArr = explode(" ", $strToArr, -2); // remove in last two words/array

    // $strImplode = implode("-", $convertedArr);
    $strImplode = join("-", $convertedArr);

    echo "<pre>";
    print_r( $convertedArr );
    echo "</pre>";

    echo "<pre>";
    print_r( $strImplode );
    echo "</pre>";

    // PHP String Str_split & Chunk_split

    $splitStr = "Rohan Mostofa";

    // $doSplitStr = str_split( $splitStr );
    // $doSplitStr = str_split( $splitStr, 2 );
    $doSplitStr = chunk_split( $splitStr, 3, "." );

    echo "<pre>";
    print_r( $doSplitStr );
    echo "</pre>";

    // PHP String LowerCase & UpperCase

    $str4 = "Rohan Mostofa";

    // $newStr4 = strtolower( $str4 );
    // $newStr4 = strtoupper( $str4 );
    // $newStr4 = lcfirst( $str4 );
    // $newStr4 = ucfirst( $str4 );
    $newStr4 = ucwords( $str4 );

    echo $newStr4;

    // PHP String Length & Count

    




