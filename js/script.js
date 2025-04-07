// Copyright (c) 2025 BrandonBCode All rights reserved
//
// Created by: BrandonBCode
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the salary.
 */
function calculateArea() {
  // input that takes side a, b and height of the trapezoid from the user and converts it.
  let sideA = parseFloat(document.getElementById('side-a').value);
  let sideB = parseFloat(document.getElementById('side-b').value);
  let sideH = parseFloat(document.getElementById('side-height').value);
  

  //calculates area of trapezoid
    let areaofTrapezoid = sideA + sideB / 2 * sideH;

  // output that displays the area of trapezoid.
    document.getElementById("area-trapezoid").innerHTML = "The area of the trapezoid is: " + areaofTrapezoid.toFixed(1) + " cm²";

}