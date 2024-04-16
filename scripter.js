// Author: Nevil Patel, 000892482

function group_1_choice_1() {
    var i = document.getElementById("q1_input").value;
    var o = document.getElementById("q1_output");
  
    if (!isNaN(i)) {
      if (i === "0" || (i >= "13" && i <= "17")) {
        o.value = "In range";
      } else {
        o.value = "Out of range";
      }
    } else {
      o.value = "Not a number";
    }
  }


function group_1_choice_3() {
    var input = document.getElementById("q2_input").value;
    var pO = document.getElementById("q2_output_1"); 
    var aO = document.getElementById("q2_output_2");
  
    if (!isNaN(input)) {
      var side = parseInt(input);
  
      if (side > 0) {
        var perimeter = 4 * side;
        var area = side * side;
  
        pO.value = perimeter;
        aO.value = area;
      } else {
        pO.value = "Can't calculate";
        aO.value = "Can't calculate";
      }
    } else {
      pO.value = "Can't calculate";
      aO.value = "Can't calculate";
    }
}

function group_2_choice_1() {
  var i = document.getElementById("q3_input").value.toLowerCase();
  var o = document.getElementById("q3_output");

  if (i.length === 1) {
    var isVowel = false;
    var input = i.toLowerCase();

    if (
      input === 'a' ||
      input === 'e' ||
      input === 'i' ||
      input === 'o' ||
      input === 'u'
    ) {
      isVowel = true;
    }

    if (isVowel) {
      o.value = "A Vowel";
    } else if (input === 'y') {
      o.value = "Sometimes";
    } else {
      o.value = "Not a vowel";
    }
  } else {
    o.value = "Not a vowel";
  }
}



function group_2_choice_3() {
    var i = parseInt(document.getElementById("q4_input").value);
    var o = document.getElementById("q4_output");
  
    if (Number.isInteger(i) && i >= 0) {
        var factorial = 1;
      
        for (var n = 1; n <= i; n++) {
            factorial *= n;
        }
      
        o.value = factorial;
    } else {
        o.value = "Cannot compute factorial value";
    }
}


function group_3_choice_2() {
  var i = document.getElementById("q5_input").value;
  var o = document.getElementById("q5_output");

  if (i.length < 3) {
      o.value = "Invalid formula";
      return;
  }

  var operator = i[1];
  var num1 = parseFloat(i[0]);
  var num2 = parseFloat(i[2]);
  var result;

  switch (operator) {
      case '+':
          result = num1 + num2;
          break;
      case '-':
          result = num1 - num2;
          break;
      case '*':
          result = num1 * num2;
          break;
      case '/':
          result = num1 / num2;
          break;
      case '%':
          result = num1 % num2;
          break;
      default:
          o.value = "Invalid operator";
          return;
  }

  if (isNaN(result)) {
      o.value = "Invalid formula";
  } else {
      o.value = result;
  }
}
