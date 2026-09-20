import { Problem } from '../types';

export const phpProblems: Problem[] = [
  // --- SET A ---
  {
    id: 'php-seta-1',
    title: 'Quotient and Remainder Calculator',
    marathiTitle: 'भागाकार (Quotient) आणि बाकी (Remainder) काढणे',
    questionStatement: 'Q. Write a PHP script to declare two integer variables (Dividend and Divisor), find their Quotient and Remainder using intdiv() and % modulo operators, and display the output safely.',
    marathiQuestionStatement: 'प्रश्न: दोन पूर्णांक संख्या (भाज्य आणि भाजक) स्वीकारून intdiv() आणि % ऑपरेटरच्या मदतीने त्यांचा भागाकार (Quotient) आणि बाकी (Remainder) शोधण्यासाठी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET A',
    description: 'Accept Dividend and Divisor from user via HTML form and calculate Quotient and Remainder safely checking division by zero.',
    marathiNote: 'झिरो (0) ने भाग दिल्यास एरर येऊ नये म्हणून `if ($divisor != 0)` अट टाकली आहे.',
    filename: 'quotient_remainder.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Quotient and Remainder</title>
</head>
<body>
    <h2>Find Quotient and Remainder</h2>
    <form method="post" action="">
        Dividend: <input type="number" name="num1" required><br><br>
        Divisor: <input type="number" name="num2" required><br><br>
        <input type="submit" name="submit" value="Calculate">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $num1 = (int)$_POST['num1'];
        $num2 = (int)$_POST['num2'];

        if ($num2 == 0) {
            echo "<h3 style='color:red;'>Error: Division by zero is not allowed.</h3>";
        } else {
            $quotient = intdiv($num1, $num2);
            $remainder = $num1 % $num2;

            echo "<h3>--- Result ---</h3>";
            echo "Quotient = " . $quotient . "<br>";
            echo "Remainder = " . $remainder . "<br>";
        }
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Uses intdiv() for integer quotient calculation and % modulo operator for remainder. Form uses POST method with error check for zero divisor.',
      mr: 'intdiv() द्वारे पूर्णांक भागाकार आणि % द्वारे बाकी (Remainder) काढली जाते. 0 ने भाग दिल्यास एरर दाखवला जातो.'
    },
    keyTakeaways: [
      'Always check if divisor is 0 before dividing.',
      'Use isset($_POST["submit"]) to trigger PHP block only when form is submitted.',
      'Set action="" to stay on the same page.'
    ],
    inputFields: [
      { name: 'num1', label: 'Dividend (भाज्य)', type: 'number', defaultValue: 25, required: true },
      { name: 'num2', label: 'Divisor (भाजक)', type: 'number', defaultValue: 4, required: true }
    ]
  },
  {
    id: 'php-seta-2',
    title: 'Swap Two Variables',
    marathiTitle: 'दोन संख्यांचे मूल्य स्वॅप (अदलाबदल) करणे',
    questionStatement: 'Q. Write a PHP script to accept two variables A and B from the user and swap their values using a temporary variable ($temp). Display values before and after swapping.',
    marathiQuestionStatement: 'प्रश्न: A आणि B या दोन संख्यांचे मूल्य स्वीकारून तिसऱ्या तात्पुरत्या ($temp) व्हेरियबलचा वापर करून त्यांच्या मूल्यांची अदलाबदल (Swapping) करणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET A',
    description: 'Swaps values of variable A and variable B using a temporary variable $temp and displays before and after values.',
    marathiNote: 'ह्यामध्ये $temp नावाचा तिसरा व्हेरिएबल वापरून मूल्य बदलले जाते.',
    filename: 'swap_variables.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Swap Variables</title>
</head>
<body>
    <h2>Swap Two Numbers</h2>
    <form method="post" action="">
        Value of A: <input type="number" name="a" required><br><br>
        Value of B: <input type="number" name="b" required><br><br>
        <input type="submit" name="submit" value="Swap Values">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $a = $_POST['a'];
        $b = $_POST['b'];

        echo "<h3>Before Swapping:</h3>";
        echo "A = " . $a . ", B = " . $b . "<br>";

        // Swapping logic
        $temp = $a;
        $a = $b;
        $b = $temp;

        echo "<h3>After Swapping:</h3>";
        echo "A = " . $a . ", B = " . $b . "<br>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Stores $a in $temp, sets $a = $b, and then sets $b = $temp to complete value exchange.',
      mr: 'प्रथमतः $a चे मूल्य $temp मध्ये सेव्ह केले जाते, नंतर $a मधे $b चे आणि $b मधे $temp चे मूल्य टाकून स्वॅपिंग पूर्ण केले जाते.'
    },
    keyTakeaways: [
      'Standard 3-variable swap algorithm.',
      'Output clearly displays state before and after operation.'
    ],
    inputFields: [
      { name: 'a', label: 'Value of A', type: 'number', defaultValue: 10, required: true },
      { name: 'b', label: 'Value of B', type: 'number', defaultValue: 20, required: true }
    ]
  },
  {
    id: 'php-seta-3',
    title: 'Celsius to Fahrenheit Converter',
    marathiTitle: 'सेल्यिअसचे (C) फॅरेनहाइटमध्ये (F) रुपांतर करणे',
    questionStatement: 'Q. Write a PHP script to convert temperature from Celsius (°C) to Fahrenheit (°F) using the conversion formula F = (C * 9/5) + 32.',
    marathiQuestionStatement: 'प्रश्न: F = (C * 9/5) + 32 या सूत्राचा वापर करून सेल्यिअस (°C) तापमानाचे फॅरेनहाइट (°F) मध्ये रूपांतर करणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET A',
    description: 'Accepts temperature in Celsius from HTML form and converts it to Fahrenheit using standard formula F = (C * 9/5) + 32.',
    marathiNote: 'गुणाकार आणि भागाकार गर्दी टाळण्यासाठी कौंस `(C * 9/5) + 32` स्पष्टपणे वापरला आहे.',
    filename: 'celsius_fahrenheit.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Temperature Converter</title>
</head>
<body>
    <h2>Celsius to Fahrenheit Converter</h2>
    <form method="post" action="">
        Temperature in Celsius (°C): <input type="number" step="any" name="celsius" required><br><br>
        <input type="submit" name="submit" value="Convert to Fahrenheit">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $celsius = (float)$_POST['celsius'];
        $fahrenheit = ($celsius * 9 / 5) + 32;

        echo "<h3>--- Result ---</h3>";
        echo "Temperature in Celsius: " . $celsius . " °C<br>";
        echo "Temperature in Fahrenheit: " . number_format($fahrenheit, 2) . " °F<br>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Applies arithmetic operators * and / with parenthesis operator precedence, then formats result with number_format().',
      mr: 'गणिताच्या नियमानुसार गुणिले ९ भागिले ५ करून ३२ मिळवले जातात. उत्तर `number_format()` द्वारे दशांश रूपात दाखवले जाते.'
    },
    keyTakeaways: [
      'Formula: $fahrenheit = ($celsius * 9 / 5) + 32;',
      'Use type casting (float) for precise decimal temperature values.'
    ],
    inputFields: [
      { name: 'celsius', label: 'Celsius (°C)', type: 'number', step: 'any', defaultValue: 37, required: true }
    ]
  },
  {
    id: 'php-seta-4',
    title: 'Leap Year Checker',
    marathiTitle: 'दिलेले वर्ष लीप वर्ष (Leap Year) आहे की नाही हे तपासणे',
    questionStatement: 'Q. Write a PHP script to accept a year from the user and check whether it is a Leap Year or not using logical operators (divisible by 400 OR divisible by 4 and not divisible by 100).',
    marathiQuestionStatement: 'प्रश्न: युजरकडून वर्ष स्वीकारून ते वर्ष लीप वर्ष (Leap Year) आहे की नाही हे लॉजिकल ऑपरेटर्सचा (divisible by 400 OR divisible by 4 and not 100) वापर करून तपासणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET A',
    description: 'Checks whether a year is a leap year using condition: `($year % 400 == 0) || ($year % 4 == 0 && $year % 100 != 0)`.',
    marathiNote: 'शतक वर्ष (जसे 2000) 400 ने पूर्ण भाग जाणे आवश्यक असते, तर सामान्य वर्ष 4 ने भाग जाणे गरजेचे असते.',
    filename: 'leap_year.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Leap Year Checker</title>
</head>
<body>
    <h2>Leap Year Checker</h2>
    <form method="post" action="">
        Enter Year: <input type="number" name="year" required><br><br>
        <input type="submit" name="submit" value="Check Year">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $year = (int)$_POST['year'];

        if (($year % 400 == 0) || ($year % 4 == 0 && $year % 100 != 0)) {
            echo "<h3 style='color:green;'>$year is a Leap Year!</h3>";
        } else {
            echo "<h3 style='color:red;'>$year is NOT a Leap Year.</h3>";
        }
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Combines modulo operator % with logical AND (&&) and logical OR (||) conditions.',
      mr: '% मॉड्युलस द्वारे बाकी 0 येते का ते पाहून && आणि || ऑपरेटर्स वापरले आहेत.'
    },
    keyTakeaways: [
      'Leap year condition incorporates both 4-year and 400-year century rules.',
      'Modulo operator `%` returns 0 for exact division.'
    ],
    inputFields: [
      { name: 'year', label: 'Year (वर्ष)', type: 'number', defaultValue: 2024, required: true }
    ]
  },
  {
    id: 'php-seta-5',
    title: 'Arithmetic Operations Calculator',
    marathiTitle: 'गणितीय क्रिया (बेरीज, वजाबाकी, गुणाकार, भागाकार) कॅल्क्युलेटर',
    questionStatement: 'Q. Write a PHP script to design an arithmetic calculator that accepts two numbers and an operator (+, -, *, /) from an HTML form and performs the corresponding calculation.',
    marathiQuestionStatement: 'प्रश्न: दोन संख्या आणि गणितीय चिन्ह (+, -, *, /) स्वीकारून त्यानुसार बेरीज, वजाबाकी, गुणाकार किंवा भागाकार करणारी PHP कॅल्क्युलेटर स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET A',
    description: 'Accepts two numbers and an operator (+, -, *, /) from HTML dropdown form and executes requested mathematical operation using switch-case or if-else.',
    marathiNote: 'फॉर्ममध्ये drop-down `<select>` चा वापर केला आहे.',
    filename: 'arithmetic_calculator.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Arithmetic Calculator</title>
</head>
<body>
    <h2>Simple Calculator</h2>
    <form method="post" action="">
        Number 1: <input type="number" step="any" name="num1" required><br><br>
        Operator: 
        <select name="operator" required>
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>
        </select><br><br>
        Number 2: <input type="number" step="any" name="num2" required><br><br>
        <input type="submit" name="submit" value="Calculate">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $num1 = (float)$_POST['num1'];
        $num2 = (float)$_POST['num2'];
        $op = $_POST['operator'];
        $result = 0;

        switch ($op) {
            case '+': $result = $num1 + $num2; break;
            case '-': $result = $num1 - $num2; break;
            case '*': $result = $num1 * $num2; break;
            case '/':
                if ($num2 == 0) {
                    echo "<h3 style='color:red;'>Error: Division by zero!</h3>";
                    exit;
                }
                $result = $num1 / $num2;
                break;
        }

        echo "<h3>Result: $num1 $op $num2 = <span style='color:blue;'>$result</span></h3>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Uses PHP switch-case construct to select mathematical operation based on user input operator.',
      mr: '`switch-case` रचनेचा वापर करून निवडलेल्या चिन्हाप्रमाणे योग्य गणितीय क्रिया पार पाडली जाते.'
    },
    keyTakeaways: [
      'Switch-case makes multi-operator selection clean and readable.',
      'Guards against division by zero in `/` case.'
    ],
    inputFields: [
      { name: 'num1', label: 'First Number', type: 'number', step: 'any', defaultValue: 15, required: true },
      { name: 'num2', label: 'Second Number', type: 'number', step: 'any', defaultValue: 5, required: true },
      {
        name: 'operator',
        label: 'Select Operator',
        type: 'select',
        defaultValue: '+',
        options: [
          { label: 'Addition (+)', value: '+' },
          { label: 'Subtraction (-)', value: '-' },
          { label: 'Multiplication (*)', value: '*' },
          { label: 'Division (/)', value: '/' }
        ]
      }
    ]
  },
  {
    id: 'php-seta-6',
    title: 'Percentage and Grade Evaluator',
    marathiTitle: 'टक्केवारीवरून (Percentage) श्रेणी (Grade) ठरवणे',
    questionStatement: 'Q. Write a PHP script to accept student percentage from user and assign Grade based on conditions: >=70 Distinction, >=60 First Class, >=50 Higher Second Class, >=40 Pass Class, <40 Fail.',
    marathiQuestionStatement: 'प्रश्न: विद्यार्थ्याची टक्केवारी स्वीकारून गुणवत्तेनुसार (Distinction, First Class, Higher Second Class, Pass Class, Fail) श्रेणी देणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET A',
    description: 'Evaluates percentage using ladder if-else-if construct to assign Distinction, First Class, Higher Second Class, Pass Class, or Fail.',
    marathiNote: '४० पेक्षा कमी गुण असल्यास Fail श्रेणी दिली जाते.',
    filename: 'grade_evaluator.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Grade Evaluator</title>
</head>
<body>
    <h2>Student Grade Calculator</h2>
    <form method="post" action="">
        Enter Percentage (%): <input type="number" step="0.01" min="0" max="100" name="per" required><br><br>
        <input type="submit" name="submit" value="Evaluate Grade">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $per = (float)$_POST['per'];
        $grade = "";

        if ($per >= 70 && $per <= 100) {
            $grade = "First Class with Distinction 🌟";
        } elseif ($per >= 60 && $per < 70) {
            $grade = "First Class";
        } elseif ($per >= 50 && $per < 60) {
            $grade = "Higher Second Class";
        } elseif ($per >= 40 && $per < 50) {
            $grade = "Pass Class";
        } else {
            $grade = "Fail ❌";
        }

        echo "<h3>--- Result ---</h3>";
        echo "Percentage: " . $per . " %<br>";
        echo "Grade: <strong>" . $grade . "</strong><br>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Evaluates ranges sequentially with if-elseif-else logic starting from highest grade boundary.',
      mr: '`if-elseif-else` च्या साखळीचा वापर करून टक्केवारीच्या मर्यादेनुसार ग्रेड ठरवली जाते.'
    },
    keyTakeaways: [
      'Sequential range testing from highest threshold (70%) down to lowest (40%).'
    ],
    inputFields: [
      { name: 'per', label: 'Percentage (%)', type: 'number', step: '0.01', defaultValue: 75.5, min: 0, max: 100, required: true }
    ]
  },

  // --- SET B ---
  {
    id: 'php-setb-1',
    title: 'Cuboid Surface Area & Volume Calculator',
    marathiTitle: 'इष्टिकाचितीचे (Cuboid) पृष्ठफळ आणि घनफळ काढणे',
    questionStatement: 'Q. Write a PHP script to accept Length, Breadth, and Height of a Cuboid and calculate its Total Surface Area (2*(l*b + l*h + b*h)) and Volume (l*b*h).',
    marathiQuestionStatement: 'प्रश्न: इष्टिकाचितीची (Cuboid) लांबी (l), रुंदी (b) आणि उंची (h) स्वीकारून तिचे एकूण पृष्ठफळ (Surface Area) आणि घनफळ (Volume) काढणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET B',
    description: 'Calculates Surface Area = 2*(l*b + l*h + b*h) and Volume = l*b*h of a cuboid based on HTML form inputs.',
    marathiNote: 'Surface Area = 2*(l*b + l*h + b*h) आणि Volume = l*b*h ही सूत्रे वापरली आहेत.',
    filename: 'cuboid_calculator.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Cuboid Calculator</title>
</head>
<body>
    <h2>Surface Area and Volume of Cuboid</h2>
    <form method="post" action="">
        Length (l): <input type="number" step="any" name="l" required><br><br>
        Breadth (b): <input type="number" step="any" name="b" required><br><br>
        Height (h): <input type="number" step="any" name="h" required><br><br>
        <input type="submit" name="submit" value="Calculate">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $l = (float)$_POST['l'];
        $b = (float)$_POST['b'];
        $h = (float)$_POST['h'];

        $surface_area = 2 * ($l * $b + $l * $h + $b * $h);
        $volume = $l * $b * $h;

        echo "<h3>--- Result ---</h3>";
        echo "Surface Area = " . number_format($surface_area, 2) . " sq. units<br>";
        echo "Volume = " . number_format($volume, 2) . " cubic units<br>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Applies geometric formulas for 3D cuboid measurement.',
      mr: 'त्रिमितीय भौमितिक सूत्रांचा वापर करून घनफळ आणि पृष्ठफळ काढले जाते.'
    },
    keyTakeaways: [
      '3D geometry math formulas implemented cleanly.',
      'Form inputs restricted to positive floats.'
    ],
    inputFields: [
      { name: 'l', label: 'Length (l)', type: 'number', step: 'any', defaultValue: 10, required: true },
      { name: 'b', label: 'Breadth (b)', type: 'number', step: 'any', defaultValue: 5, required: true },
      { name: 'h', label: 'Height (h)', type: 'number', step: 'any', defaultValue: 4, required: true }
    ]
  },
  {
    id: 'php-setb-2',
    title: 'Area of Shapes (Circle, Square, Rectangle)',
    marathiTitle: 'वर्तुळ, चौरस आणि आयत यांचे क्षेत्रफळ काढणे',
    questionStatement: 'Q. Write a PHP script to accept dimensions for Circle (Radius), Square (Side), and Rectangle (Length & Width) and display the Area of all three geometric shapes.',
    marathiQuestionStatement: 'प्रश्न: वर्तुळाची त्रिज्या (r), चौरसाची बाजू (s), आणि आयताची लांबी (l) व रुंदी (w) स्वीकारून तिन्ही भौमितिक आकारांचे क्षेत्रफळ (Area) काढणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET B',
    description: 'Calculates Area of Circle (πr²), Area of Square (s²), and Area of Rectangle (l*w) in a single unified PHP form.',
    marathiNote: 'वर्तुळाच्या क्षेत्रफळासाठी `pi()` किंवा `3.14159` चा वापर केला आहे.',
    filename: 'shapes_area.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Area of Shapes</title>
</head>
<body>
    <h2>Calculate Area of Shapes</h2>
    <form method="post" action="">
        <h3>1. Circle</h3>
        Radius (r): <input type="number" step="any" name="r" required><br>

        <h3>2. Square</h3>
        Side (s): <input type="number" step="any" name="s" required><br>

        <h3>3. Rectangle</h3>
        Length (l): <input type="number" step="any" name="l" required><br>
        Width (w): <input type="number" step="any" name="w" required><br><br>

        <input type="submit" name="submit" value="Calculate All Areas">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $r = (float)$_POST['r'];
        $s = (float)$_POST['s'];
        $l = (float)$_POST['l'];
        $w = (float)$_POST['w'];

        $area_circle = pi() * $r * $r;
        $area_square = $s * $s;
        $area_rectangle = $l * $w;

        echo "<h3>--- Calculated Areas ---</h3>";
        echo "Area of Circle (r=$r) = " . number_format($area_circle, 2) . " sq. units<br>";
        echo "Area of Square (s=$s) = " . number_format($area_square, 2) . " sq. units<br>";
        echo "Area of Rectangle (l=$l, w=$w) = " . number_format($area_rectangle, 2) . " sq. units<br>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Uses pi() built-in math function for circle area and standard algebraic multiplication for square and rectangle.',
      mr: '`pi()` फंक्शन वर्तुळाच्या क्षेत्रफळासाठी वापरून गणितीय उत्तर शोधले आहे.'
    },
    keyTakeaways: [
      'PHP built-in math function `pi()` gives high precision PI value.'
    ],
    inputFields: [
      { name: 'r', label: 'Circle Radius (r)', type: 'number', step: 'any', defaultValue: 7, required: true },
      { name: 's', label: 'Square Side (s)', type: 'number', step: 'any', defaultValue: 6, required: true },
      { name: 'l', label: 'Rectangle Length (l)', type: 'number', step: 'any', defaultValue: 12, required: true },
      { name: 'w', label: 'Rectangle Width (w)', type: 'number', step: 'any', defaultValue: 8, required: true }
    ]
  },
  {
    id: 'php-setb-3',
    title: 'Student Marksheet Generator',
    marathiTitle: 'विद्यार्थ्याचे गुणपत्रक (Marksheet) तयार करणे',
    questionStatement: 'Q. Write a PHP script to accept marks of 5 subjects (DS, DM, PHP, SE, BigData) out of 100, calculate Total Marks (out of 500), Percentage, and print a formatted student mark sheet.',
    marathiQuestionStatement: 'प्रश्न: ५ विषयांचे गुण (प्रत्येकी १०० पैकी) स्वीकारून एकूण गुण (५०० पैकी) आणि टक्केवारी (Percentage) दाखवणारे विद्यार्थी गुणपत्रक (Marksheet) जनरेट करणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET B',
    description: 'Accepts marks of 5 subjects (Data Structure, Digital Marketing, PHP, Software Engg, BigData) out of 100, calculates total (500) and percentage.',
    marathiNote: 'सर्व ५ विषयांची बेरीज करून भागिले ५ केल्यास टक्केवारी मिळते.',
    filename: 'student_marksheet.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Student Marksheet</title>
</head>
<body>
    <h2>Enter Subject Marks (out of 100)</h2>
    <form method="post" action="">
        Data Structure: <input type="number" min="0" max="100" name="sub1" required><br><br>
        Digital Marketing: <input type="number" min="0" max="100" name="sub2" required><br><br>
        PHP Scripting: <input type="number" min="0" max="100" name="sub3" required><br><br>
        Software Engineering: <input type="number" min="0" max="100" name="sub4" required><br><br>
        Big Data Analytics: <input type="number" min="0" max="100" name="sub5" required><br><br>
        <input type="submit" name="submit" value="Generate Marksheet">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $s1 = (float)$_POST['sub1'];
        $s2 = (float)$_POST['sub2'];
        $s3 = (float)$_POST['sub3'];
        $s4 = (float)$_POST['sub4'];
        $s5 = (float)$_POST['sub5'];

        $total = $s1 + $s2 + $s3 + $s4 + $s5;
        $percentage = ($total / 500) * 100;

        echo "<h3>--- MARKSHEET ---</h3>";
        echo "Data Structure: $s1 / 100<br>";
        echo "Digital Marketing: $s2 / 100<br>";
        echo "PHP Scripting: $s3 / 100<br>";
        echo "Software Engineering: $s4 / 100<br>";
        echo "Big Data Analytics: $s5 / 100<br>";
        echo "<hr>";
        echo "<strong>Total Marks:</strong> $total / 500<br>";
        echo "<strong>Percentage:</strong> " . number_format($percentage, 2) . " %<br>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Sums 5 numerical variables and calculates percentage over 500 total possible marks.',
      mr: 'पाच विषयांच्या गुणांची बेरीज करुन एकूण टक्केवारी ५०० पैकी काढली आहे.'
    },
    keyTakeaways: [
      'HTML input validation restricts input range from 0 to 100.'
    ],
    inputFields: [
      { name: 'sub1', label: 'Data Structure', type: 'number', defaultValue: 82, min: 0, max: 100, required: true },
      { name: 'sub2', label: 'Digital Marketing', type: 'number', defaultValue: 75, min: 0, max: 100, required: true },
      { name: 'sub3', label: 'PHP Scripting', type: 'number', defaultValue: 91, min: 0, max: 100, required: true },
      { name: 'sub4', label: 'Software Engg', type: 'number', defaultValue: 68, min: 0, max: 100, required: true },
      { name: 'sub5', label: 'Big Data Analytics', type: 'number', defaultValue: 85, min: 0, max: 100, required: true }
    ]
  },
  {
    id: 'php-setb-4',
    title: 'Prime Numbers Generator (1 to 50)',
    marathiTitle: '१ ते ५० मधील मूळ संख्या (Prime Numbers) शोधणे',
    questionStatement: 'Q. Write a PHP script to generate and print all Prime Numbers between 1 and 50 using nested loops and division check.',
    marathiQuestionStatement: 'प्रश्न: नेस्टेड लूपचा (Nested Loops) वापर करून १ ते ५० या दरम्यानच्या सर्व मूळ संख्या (Prime Numbers) शोधून प्रिंट करणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET B',
    description: 'Finds and prints all prime numbers between 1 and 50 using nested for loops.',
    marathiNote: 'ज्या संख्येला फक्त १ ने आणि स्वतःने भाग जातो तिला Prime Number म्हणतात.',
    filename: 'prime_numbers.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Prime Numbers 1 to 50</title>
</head>
<body>
    <h2>Prime Numbers Between 1 and 50</h2>

    <?php
    echo "<h3>List of Prime Numbers:</h3>";

    for ($i = 2; $i <= 50; $i++) {
        $isPrime = true;

        for ($j = 2; $j <= sqrt($i); $j++) {
            if ($i % $j == 0) {
                $isPrime = false;
                break;
            }
        }

        if ($isPrime) {
            echo $i . " ";
        }
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Inner loop checks division up to sqrt($i); if remainder is 0, number is composite, otherwise prime.',
      mr: 'नेस्टेड लूप वापरून १ ने आणि स्वतःनेच भाग जाणाऱ्या संख्या शोधून प्रिंट केल्या जातात.'
    },
    keyTakeaways: [
      'Optimization: Limit divisor loop to sqrt($i).',
      'First prime number starts at 2.'
    ]
  },
  {
    id: 'php-setb-5',
    title: 'Perfect Numbers Generator (1 to 100)',
    marathiTitle: '१ ते १०० मधील परफेक्ट संख्या (Perfect Numbers) शोधणे',
    questionStatement: 'Q. Write a PHP script to find and print all Perfect Numbers between 1 and 100 (A perfect number is a number equal to the sum of its proper divisors, e.g. 6 = 1 + 2 + 3).',
    marathiQuestionStatement: 'प्रश्न: ज्या संख्येच्या सर्व भाजकांची बेरीज त्या संख्येइतकीच येते (उदा. ६ = १+२+३), अशा १ ते १०० मधील सर्व परफेक्ट संख्या (Perfect Numbers) शोधणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET B',
    description: 'Checks if sum of proper divisors equals the original number for range 1 to 100 (e.g., 6 = 1 + 2 + 3).',
    marathiNote: 'उदा. ६ चे भाजक १, २, ३ आहेत आणि १+२+३ = ६ म्हणून ६ हा Perfect Number आहे.',
    filename: 'perfect_numbers.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Perfect Numbers 1 to 100</title>
</head>
<body>
    <h2>Perfect Numbers Between 1 and 100</h2>

    <?php
    echo "<h3>Perfect Numbers Found:</h3>";

    for ($num = 1; $num <= 100; $num++) {
        $sum = 0;

        for ($i = 1; $i <= $num / 2; $i++) {
            if ($num % $i == 0) {
                $sum += $i;
            }
        }

        if ($sum == $num && $num != 0) {
            echo "<strong>$num</strong> is a Perfect Number (Sum of divisors = $sum)<br>";
        }
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Sums proper divisors of $num up to $num/2 and tests if $sum == $num.',
      mr: 'संख्या १ ते १०० पर्यंत तपासून तिच्या अर्ध्या भागापर्यंतच्या सर्व भाजकांची बेरीज संख्या स्वतःयेते का ते तपासले आहे.'
    },
    keyTakeaways: [
      'Perfect number definition: Sum of proper divisors equals number itself.',
      '6 and 28 are the prime perfect numbers under 100.'
    ]
  },
  {
    id: 'php-setb-6',
    title: 'Reverse an Integer Number',
    marathiTitle: 'पूर्णांक संख्या उलट (Reverse) करणे',
    questionStatement: 'Q. Write a PHP script to accept an integer number from the user and reverse its digits using a while loop and arithmetic operations (% 10 and / 10).',
    marathiQuestionStatement: 'प्रश्न: युजरकडून पूर्णांक संख्या स्वीकारून while लूप आणि % 10 चा वापर करून त्या संख्येचे अंक उलट (Reverse Number) करणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET B',
    description: 'Reverses digits of an integer using while loop with modulo 10 and integer division.',
    marathiNote: 'While loop वापरून % 10 ने शेवटचा अंक काढून नवीन संख्येत जोडला जातो.',
    filename: 'reverse_number.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Reverse Number</title>
</head>
<body>
    <h2>Reverse an Integer Number</h2>
    <form method="post" action="">
        Enter Number: <input type="number" name="num" required><br><br>
        <input type="submit" name="submit" value="Reverse">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $num = (int)$_POST['num'];
        $temp = abs($num);
        $rev = 0;

        while ($temp > 0) {
            $rem = $temp % 10;
            $rev = ($rev * 10) + $rem;
            $temp = (int)($temp / 10);
        }

        if ($num < 0) {
            $rev = -$rev;
        }

        echo "<h3>Original Number: $num</h3>";
        echo "<h3 style='color:green;'>Reversed Number: $rev</h3>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Extracts last digit via $temp % 10, appends to $rev = ($rev * 10) + $rem, and shrinks $temp = $temp / 10.',
      mr: '% 10 ने शेवटचा अंक मिळवला जातो आणि ($rev * 10) + $rem करून उलट संख्या बनवली जाते.'
    },
    keyTakeaways: [
      'Standard number digit reversal algorithm using while loop.',
      'Handles negative integers using `abs()`.'
    ],
    inputFields: [
      { name: 'num', label: 'Enter Integer Number', type: 'number', defaultValue: 12345, required: true }
    ]
  },
  {
    id: 'php-setb-7',
    title: 'Armstrong Numbers Generator (1 to 500)',
    marathiTitle: '१ ते ५०० मधील आर्मस्ट्राँग संख्या (Armstrong Numbers) शोधणे',
    questionStatement: 'Q. Write a PHP script to find and print all Armstrong Numbers between 1 and 500 (An Armstrong number is a number where the sum of the cubes of its digits equals the number itself, e.g. 153 = 1³ + 5³ + 3³).',
    marathiQuestionStatement: 'प्रश्न: ज्या संख्येतील अंकांच्या घनांची बेरीज (Sum of Cubes) त्या संख्येइतकीच येते (उदा. १५३ = १³ + ५³ + ३³), अशा १ ते ५०० मधील आर्मस्ट्राँग संख्या (Armstrong Numbers) शोधणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET B',
    description: 'Finds all 3-digit Armstrong numbers between 1 and 500 where sum of cubes of digits equals the number (e.g. 153 = 1³ + 5³ + 3³).',
    marathiNote: 'उदा. 153 मधील अंकांच्या घनांची बेरीज 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 येते.',
    filename: 'armstrong_numbers.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Armstrong Numbers 1 to 500</title>
</head>
<body>
    <h2>Armstrong Numbers Between 1 and 500</h2>

    <?php
    echo "<h3>Armstrong Numbers Found:</h3>";

    for ($i = 1; $i <= 500; $i++) {
        $temp = $i;
        $sum = 0;

        while ($temp > 0) {
            $rem = $temp % 10;
            $sum += ($rem * $rem * $rem);
            $temp = (int)($temp / 10);
        }

        if ($sum == $i) {
            echo "<strong>$i</strong> is an Armstrong Number<br>";
        }
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Extracts digits, cubes each digit, sums them up, and compares against original number.',
      mr: 'प्रत्येक अंकाचा घन (Cube) करून बेरीज मुळ संख्येशी जुळते का ते तपासले आहे.'
    },
    keyTakeaways: [
      '3-digit Armstrong formula: $sum += $rem * $rem * $rem;',
      'Examples under 500: 1, 153, 370, 371, 407.'
    ]
  },
  {
    id: 'php-setb-8',
    title: 'Array Union and Random Order Traversal',
    marathiTitle: 'अरे युनियन (Union) आणि यादृच्छिक (Random Order) घटक प्रिंट करणे',
    questionStatement: 'Q. Write a PHP script to perform array operations: a) Find the Union of two indexed arrays b) Traverse and display array elements in random order.',
    marathiQuestionStatement: 'प्रश्न: दोन इंडेक्सड् अरेवरील क्रिया पार पाडणारी PHP स्क्रिप्ट लिहा: अ) दोन अरेचा युनियन (Union) शोधणे आ) अरे मधील घटक यादृच्छिक (Random) क्रमाने प्रिंट करणे.',
    subject: 'php',
    set: 'SET B',
    description: 'Performs array operations: a) Computes Union of two arrays b) Displays array elements in random shuffled order.',
    marathiNote: '`array_unique(array_merge($a1, $a2))` चा वापर युनियनसाठी आणि `shuffle()` चा वापर रँडम क्रमासाठी केला आहे.',
    filename: 'array_union_random.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Array Operations</title>
</head>
<body>
    <h2>Array Union & Random Traversal</h2>

    <?php
    $arr1 = array(10, 20, 30, 40);
    $arr2 = array(30, 40, 50, 60);

    echo "<h3>Array 1: " . implode(", ", $arr1) . "</h3>";
    echo "<h3>Array 2: " . implode(", ", $arr2) . "</h3>";

    // a) Union of two arrays
    $union = array_unique(array_merge($arr1, $arr2));
    echo "<h3>a) Union of Arrays:</h3>";
    echo "[" . implode(", ", $union) . "]<br>";

    // b) Random Order Traversal
    $shuffled = $arr1;
    shuffle($shuffled);
    echo "<h3>b) Random Order Traversal of Array 1:</h3>";
    foreach ($shuffled as $val) {
        echo $val . " ";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Combines array_merge() and array_unique() for mathematical union set, and shuffle() for randomized array traversal.',
      mr: '`array_merge()` आणि `array_unique()` ने युनियन बनवला जातो आणि `shuffle()` ने घटक रँडम दाखवले जातात.'
    },
    keyTakeaways: [
      'array_unique() removes duplicate values.',
      'shuffle() randomly reorders elements in-place.'
    ]
  },
  {
    id: 'php-setb-9',
    title: 'Associative Array Key-Value Operations',
    marathiTitle: 'असोसिएटिव्ह अरे - की-व्हॅल्यू जोड्या, साईझ आणि एलिमेंट डिलीट करणे',
    questionStatement: 'Q. Write a PHP script to demonstrate Associative Array operations: a) Display element along with key b) Display size of array c) Delete an element using unset().',
    marathiQuestionStatement: 'प्रश्न: असोसिएटिव्ह अरेवरील (Associative Array) क्रिया करणारी PHP स्क्रिप्ट लिहा: अ) की (Key) सह व्हॅल्यू प्रिंट करणे आ) अरेचा आकार (count/size) दाखवणे इ) unset() वापरून विशिष्ट घटक डिलीट करणे.',
    subject: 'php',
    set: 'SET B',
    description: 'Associative array operations: a) Displays key-value pairs b) Displays size of array using count() c) Deletes an element using unset().',
    marathiNote: '`foreach($arr as $key => $val)` द्वारे की आणि व्हॅल्यू दोन्ही दाखवले जातात.',
    filename: 'associative_array_ops.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Associative Array Operations</title>
</head>
<body>
    <h2>Associative Array Operations</h2>

    <?php
    $student = array(
        "roll_no" => 101,
        "name" => "Rahul",
        "course" => "BCA",
        "city" => "Pune"
    );

    // a) Display elements along with key
    echo "<h3>a) Elements with Keys:</h3>";
    foreach ($student as $key => $value) {
        echo "Key: <strong>$key</strong> | Value: <strong>$value</strong><br>";
    }

    // b) Display size of array
    $size = count($student);
    echo "<h3>b) Size of Array:</h3>";
    echo "Total Elements = $size<br>";

    // c) Delete an element from array
    unset($student["city"]);

    echo "<h3>c) Array After Deleting 'city' Key:</h3>";
    echo "<pre>";
    print_r($student);
    echo "</pre>";
    ?>
</body>
</html>`,
    explanation: {
      en: 'Iterates key-value pairs using foreach ($arr as $k => $v), gets length via count(), and removes element via unset($arr["key"]).',
      mr: '`foreach` द्वारे की-व्हॅल्यू दाखवले जातात, `count()` ने साईझ आणि `unset()` ने एलिमेंट काढला जातो.'
    },
    keyTakeaways: [
      'Associative arrays store key => value mappings.',
      'unset() permanently deletes array element by key.'
    ]
  },

  // --- SET C ---
  {
    id: 'php-setc-1',
    title: 'Air Ticket Reservation System',
    marathiTitle: 'विमान तिकीट आरक्षण (Air Ticket Reservation) प्रणाली',
    questionStatement: 'Q. Write a PHP script to accept Air Ticket Reservation details (Passenger Name, Gender, Contact, Address, Source, Destination, Date of Journey, No. of Passengers, Price per Ticket) and print a formatted receipt displaying Total Ticket Amount.',
    marathiQuestionStatement: 'प्रश्न: विमान तिकीट आरक्षणाची माहिती (प्रवाशाचे नाव, लिंग, संपर्क, पत्ता, सुरुवात स्थान, अंतिम स्थान, प्रवासाची तारीख, प्रवाशांची संख्या, एका तिकिटाची किंमत) स्वीकारून एकूण रकमेसह तिकीट पावती (Receipt) जनरेट करणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET C',
    description: 'Comprehensive Air Ticket Reservation System taking passenger details, route, journey date, seat count, ticket price, and calculating total cost.',
    marathiNote: 'प्रवाशांची संख्या * तिकिटाची किंमत = एकूण रक्कम हिशोब केला जातो.',
    filename: 'air_ticket_reservation.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Air Ticket Reservation</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .ticket { border: 2px solid #333; padding: 20px; width: 450px; background: #f9f9f9; }
        .header { text-align: center; color: #1e3a8a; }
    </style>
</head>
<body>
    <h2>Air Ticket Reservation Form</h2>
    <form method="post" action="">
        Passenger Name: <input type="text" name="name" required><br><br>
        Gender: 
        <input type="radio" name="gender" value="Male" checked> Male
        <input type="radio" name="gender" value="Female"> Female<br><br>
        Contact No: <input type="text" name="contact" required><br><br>
        Address: <textarea name="address" required></textarea><br><br>
        Source: <input type="text" name="source" required><br><br>
        Destination: <input type="text" name="destination" required><br><br>
        Date of Journey: <input type="date" name="doj" required><br><br>
        No. of Passengers: <input type="number" min="1" name="persons" value="1" required><br><br>
        Price per Ticket (₹): <input type="number" step="any" name="price" required><br><br>

        <input type="submit" name="submit" value="Book Ticket">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $gender = $_POST['gender'];
        $contact = $_POST['contact'];
        $address = $_POST['address'];
        $source = $_POST['source'];
        $destination = $_POST['destination'];
        $doj = $_POST['doj'];
        $persons = (int)$_POST['persons'];
        $price = (float)$_POST['price'];

        $total_cost = $persons * $price;

        echo "<br><div class='ticket'>";
        echo "<h2 class='header'>✈️ AIR TICKET RESERVATION RECEIPT</h2>";
        echo "<hr>";
        echo "<p><strong>Passenger Name:</strong> $name</p>";
        echo "<p><strong>Gender:</strong> $gender | <strong>Contact:</strong> $contact</p>";
        echo "<p><strong>Address:</strong> $address</p>";
        echo "<p><strong>Route:</strong> $source ➔ $destination</p>";
        echo "<p><strong>Date of Journey:</strong> $doj</p>";
        echo "<p><strong>Passengers:</strong> $persons person(s)</p>";
        echo "<p><strong>Rate Per Ticket:</strong> ₹" . number_format($price, 2) . "</p>";
        echo "<hr>";
        echo "<h3 style='color:green;'>Total Amount Payable: ₹" . number_format($total_cost, 2) . "</h3>";
        echo "</div>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Extracts HTML form variables, calculates total ticket cost ($persons * $price), and formats an HTML ticket card.',
      mr: 'फॉर्म मधून माहिती घेऊन एकूण प्रवास खर्च ($persons * $price) गुणून सुंदर तिकीट पावती (Receipt) जनरेट केली आहे.'
    },
    keyTakeaways: [
      'Multi-input HTML form processing with text, radio, textarea, date, and number fields.'
    ],
    inputFields: [
      { name: 'name', label: 'Passenger Name', type: 'text', defaultValue: 'John Doe', required: true },
      { name: 'contact', label: 'Contact Number', type: 'text', defaultValue: '+91 9876543210', required: true },
      { name: 'source', label: 'Source City', type: 'text', defaultValue: 'Mumbai', required: true },
      { name: 'destination', label: 'Destination City', type: 'text', defaultValue: 'Delhi', required: true },
      { name: 'doj', label: 'Date of Journey', type: 'date', defaultValue: '2026-10-15', required: true },
      { name: 'persons', label: 'No. of Passengers', type: 'number', defaultValue: 2, min: 1, required: true },
      { name: 'price', label: 'Price Per Ticket (₹)', type: 'number', defaultValue: 3500, required: true }
    ]
  },
  {
    id: 'php-setc-2',
    title: 'Convert Number to Words',
    marathiTitle: 'संख्या शब्दांमध्ये (Number to Words) रुपांतरित करणे',
    questionStatement: 'Q. Write a PHP script to accept a number from the user and convert each of its digits into corresponding words (e.g., 512 -> Five One Two).',
    marathiQuestionStatement: 'प्रश्न: युजरकडून कोणतीही संख्या स्वीकारून तिच्या प्रत्येक अंकाचे शब्दांमध्ये (उदा. ५१२ -> Five One Two) भाषांतर करणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET C',
    description: 'Converts a given integer number into individual words (e.g. 512 -> Five One Two) using array or switch mapping.',
    marathiNote: 'प्रत्येक अंकाचे (0-9) इंग्रजी शब्दांशी मॅपिंग असोसिएशन वापरून केले आहे.',
    filename: 'number_to_words.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Number to Words</title>
</head>
<body>
    <h2>Convert Digits to Words</h2>
    <form method="post" action="">
        Enter Number: <input type="number" name="num" required><br><br>
        <input type="submit" name="submit" value="Convert to Words">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $num = $_POST['num'];
        $numStr = (string)$num;

        $wordsMap = array(
            '0' => 'Zero', '1' => 'One', '2' => 'Two', '3' => 'Three', '4' => 'Four',
            '5' => 'Five', '6' => 'Six', '7' => 'Seven', '8' => 'Eight', '9' => 'Nine'
        );

        echo "<h3>Original Number: $num</h3>";
        echo "<h3>In Words: <span style='color:blue;'>";

        for ($i = 0; $i < strlen($numStr); $i++) {
            $digit = $numStr[$i];
            if (isset($wordsMap[$digit])) {
                echo $wordsMap[$digit] . " ";
            }
        }

        echo "</span></h3>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Casts number to string, loops characters, and uses array lookup for digit word translation.',
      mr: 'संख्येचे स्ट्रिंग मध्ये रूपांतर करून प्रत्येक अंकाची तुलना `array` मधील इंग्रजी शब्दांशी करून प्रिंट केले आहे.'
    },
    keyTakeaways: [
      'String character array indexing $numStr[$i].',
      'Associative array map digit -> word string.'
    ],
    inputFields: [
      { name: 'num', label: 'Enter Number', type: 'number', defaultValue: 512, required: true }
    ]
  },
  {
    id: 'php-setc-3',
    title: 'Dynamic Web Page Background Color by Day',
    marathiTitle: 'दिवसानुसार (Day of Week) वेब पेजचा बॅकग्राऊंड रंग बदलणे',
    questionStatement: 'Q. Write a PHP script to get the current day of the week (e.g., Monday, Tuesday) and automatically change the background color of the web page dynamically based on the day.',
    marathiQuestionStatement: 'प्रश्न: आजचा दिवस (Day of Week) शोधून काढणाऱ्या आणि त्या गुणधर्मानुसार वेब पेजचा बॅकग्राऊंड कलर (Background Color) आपोआप बदलणाऱ्या PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET C',
    description: 'Gets current day name using date("l") and sets inline dynamic background-color CSS based on day of week.',
    marathiNote: '`date("l")` आजचा वार शोधते (उदा. Monday) आणि त्यानुसार CSS बदलली जाते.',
    filename: 'dynamic_bg_day.php',
    code: `<?php
$day = date("l"); // Full day name (e.g. Monday)

$bgColors = array(
    "Monday"    => "#fca5a5", // Soft Red
    "Tuesday"   => "#fef08a", // Soft Yellow
    "Wednesday" => "#86efac", // Soft Green
    "Thursday"  => "#7dd3fc", // Soft Blue
    "Friday"    => "#c084fc", // Soft Purple
    "Saturday"  => "#fdba74", // Soft Orange
    "Sunday"    => "#cbd5e1"  // Soft Gray
);

$currentColor = isset($bgColors[$day]) ? $bgColors[$day] : "#ffffff";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Dynamic Day Background Color</title>
</head>
<body style="background-color: <?php echo $currentColor; ?>; font-family: Arial; padding: 40px;">
    <h2>Dynamic Background Color by Day</h2>
    <h3>Today is: <span style="color:#1e3a8a;"><?php echo $day; ?></span></h3>
    <p>The background color is automatically set to <strong><?php echo $currentColor; ?></strong> for <?php echo $day; ?>.</p>
</body>
</html>`,
    explanation: {
      en: 'Fetches server day using date("l") and injects corresponding color hex code into <body> inline CSS style.',
      mr: '`date("l")` द्वारे वार शोधून <body> च्या CSS `background-color` मध्ये डायनॅमिक रंग भरला जातो.'
    },
    keyTakeaways: [
      'date("l") gives full textual representation of day of the week.',
      'Inline CSS injection via PHP string interpolation.'
    ]
  },
  {
    id: 'php-setc-4',
    title: 'Even and Odd Numbers Counter (1 to 1000)',
    marathiTitle: '१ ते १००० मधील सम (Even) आणि विषम (Odd) संख्या मोजणे',
    questionStatement: 'Q. Write a PHP script to count and display the total number of Even and Odd integers between 1 and 1000 using a loop and modulo 2 condition.',
    marathiQuestionStatement: 'प्रश्न: १ ते १००० या संख्यांच्या दरम्यान असणाऱ्या एकूण सम संख्या (Even Numbers) आणि विषम संख्या (Odd Numbers) मोजणारी PHP स्क्रिप्ट लिहा.',
    subject: 'php',
    set: 'SET C',
    description: 'Counts total number of even numbers ($i % 2 == 0) and odd numbers between range 1 to 1000.',
    marathiNote: 'Modulo 2 वापरून संख्या सम आहे की विषम हे शोधून काउंटर वाढवला जातो.',
    filename: 'even_odd_counter.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Even & Odd Counter</title>
</head>
<body>
    <h2>Even and Odd Numbers Counter (1 to 1000)</h2>

    <?php
    $even_count = 0;
    $odd_count = 0;

    for ($i = 1; $i <= 1000; $i++) {
        if ($i % 2 == 0) {
            $even_count++;
        } else {
            $odd_count++;
        }
    }

    echo "<h3>--- Analysis Result ---</h3>";
    echo "<p style='color:blue;'>Total Even Numbers: <strong>$even_count</strong></p>";
    echo "<p style='color:red;'>Total Odd Numbers: <strong>$odd_count</strong></p>";
    ?>
</body>
</html>`,
    explanation: {
      en: 'Loops from 1 to 1000 and increments $even_count if $i % 2 == 0, else increments $odd_count.',
      mr: '१ ते १००० लूप चालवून % २ ने भाग गेल्यास सम आणि न गेल्यास विषम काउंटर १ ने वाढवला जातो.'
    },
    keyTakeaways: [
      'Simple counter loop pattern.',
      'Modulo 2 division classifies even vs odd numbers.'
    ]
  },
  {
    id: 'php-setc-5',
    title: 'String Comparison & Case Conversion',
    marathiTitle: 'स्ट्रिंग तुलना (Compare) आणि अप्परकेस/लोअरकेस केस रुपांतर',
    questionStatement: 'Q. Write a PHP script to perform string operations: i) Compare two strings using strcmp() ii) Convert a string to Uppercase using strtoupper() iii) Convert a string to Lowercase using strtolower().',
    marathiQuestionStatement: 'प्रश्न: स्ट्रिंगवरील प्रक्रिया पार पाडणारी PHP स्क्रिप्ट लिहा: १) strcmp() द्वारे दोन स्ट्रिंगची तुलना करणे २) strtoupper() द्वारे अप्परकेस करणे ३) strtolower() द्वारे लोअरकेस करणे.',
    subject: 'php',
    set: 'SET C',
    description: 'Demonstrates PHP string functions: i) Compare two strings using strcmp() ii) Convert to Uppercase (strtoupper) iii) Convert to Lowercase (strtolower).',
    marathiNote: '`strcmp()`, `strtoupper()` आणि `strtolower()` या इनबिल्ट फंक्शन्सचा वापर केला आहे.',
    filename: 'string_case_compare.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>String Case & Comparison</title>
</head>
<body>
    <h2>String Operations</h2>

    <?php
    $str1 = "Hello World";
    $str2 = "Apple";
    $str3 = "Banana";

    // i) Compare two strings
    $cmp = strcmp($str2, $str3);
    echo "<h3>i) String Comparison ('$str2' vs '$str3'):</h3>";
    if ($cmp == 0) {
        echo "Both strings are equal.<br>";
    } elseif ($cmp < 0) {
        echo "'$str2' is smaller than '$str3'<br>";
    } else {
        echo "'$str2' is greater than '$str3'<br>";
    }

    // ii) Convert to Uppercase
    echo "<h3>ii) Convert to Uppercase:</h3>";
    echo strtoupper($str1) . "<br>";

    // iii) Convert to Lowercase
    echo "<h3>iii) Convert to Lowercase:</h3>";
    echo strtolower($str1) . "<br>";
    ?>
</body>
</html>`,
    explanation: {
      en: 'Uses PHP string built-in utilities strcmp(), strtoupper(), and strtolower().',
      mr: 'स्ट्रिंग तुलना आणि अक्षर केस बदलण्यासाठी PHP च्या इनबिल्ट स्ट्रिंग फंक्शन्सचा वापर केला आहे.'
    },
    keyTakeaways: [
      'strcmp() returns 0 if equal, <0 if string1 < string2, >0 if string1 > string2.',
      'strtoupper() and strtolower() transform character case.'
    ]
  },
  {
    id: 'php-setc-6',
    title: 'Word Case Conversions & Occurrence Search',
    marathiTitle: 'टायटल केस (Title Case) आणि पहिल्या/शेवटच्या शब्दाचे स्थान शोधणे',
    questionStatement: 'Q. Write a PHP script to perform string operations: i) Convert words in a string to Title Case (ucwords), Uppercase, and Lowercase ii) Find the first and last occurrence index of a word in a sentence using strpos() and strrpos().',
    marathiQuestionStatement: 'प्रश्न: स्ट्रिंगवरील क्रिया करणारी PHP स्क्रिप्ट लिहा: १) ucwords() ने शब्दांचे पहिले अक्षर मोठे करणे २) strpos() आणि strrpos() द्वारे वाक्यातील विशिष्ट शब्दाचे पहिले आणि शेवटचे स्थान (Occurrence Index) शोधणे.',
    subject: 'php',
    set: 'SET C',
    description: 'String operations: i) Convert words to Title Case (ucwords), Uppercase, Lowercase ii) Find first and last occurrence index of a word using strpos() and strrpos().',
    marathiNote: '`ucwords()` सर्व शब्दांचे पहिले अक्षर कॅपिटल करते; `strpos()` पहिली जागा तर `strrpos()` शेवटची जागा सांगते.',
    filename: 'word_search_case.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Word Case & Occurrence</title>
</head>
<body>
    <h2>String Operations</h2>

    <?php
    $text = "php is a popular scripting language. php is easy.";
    $search = "php";

    // i) Word Case Conversions
    echo "<h3>i) Word Case Conversions:</h3>";
    echo "Original: <i>$text</i><br>";
    echo "Title Case (ucwords): <strong>" . ucwords($text) . "</strong><br>";
    echo "Uppercase (strtoupper): <strong>" . strtoupper($text) . "</strong><br>";
    echo "Lowercase (strtolower): <strong>" . strtolower($text) . "</strong><br>";

    // ii) First and Last Occurrence
    $first_pos = strpos($text, $search);
    $last_pos = strrpos($text, $search);

    echo "<h3>ii) Occurrences of word '$search':</h3>";
    echo "First Occurrence Index: <strong>$first_pos</strong><br>";
    echo "Last Occurrence Index: <strong>$last_pos</strong><br>";
    ?>
</body>
</html>`,
    explanation: {
      en: 'Demonstrates ucwords() for Title Case formatting, strpos() for first substring match index, and strrpos() for last index match.',
      mr: '`ucwords()` टायटल केससाठी, `strpos()` पहिल्या मॅचसाठी आणि `strrpos()` शेवटच्या मॅचच्या स्थानासाठी वापरले आहे.'
    },
    keyTakeaways: [
      'ucwords() capitalizes the first character of each word in a string.',
      'strpos() searches from start, strrpos() searches from end.'
    ]
  },
  {
    id: 'php-setc-7',
    title: 'Associative Array Menu-Driven Sorting & Set Operations',
    marathiTitle: 'मेनू-ड्रिव्हन असोसिएटिव्ह अरे सॉर्टिंग, इंटरसेक्शन आणि युनियन',
    questionStatement: 'Q. Write a menu-driven PHP script to perform operations on associative arrays: 1) Sort by values in Ascending/Descending order without preserving keys (sort/rsort) 2) Sort by values preserving keys (asort/arsort) 3) Find Intersection of two arrays (array_intersect) 4) Find Union of two arrays.',
    marathiQuestionStatement: 'प्रश्न: असोसिएटिव्ह अरेसाठी मेनू-ड्रिव्हन PHP स्क्रिप्ट लिहा: १) की न जपता मूल्यांनुसार सॉर्ट करणे (sort/rsort) २) की जपून मूल्यांनुसार सॉर्ट करणे (asort/arsort) ३) दोन अरेचा इंटरसेक्शन (array_intersect) शोधणे ४) युनियन (Union) शोधणे.',
    subject: 'php',
    set: 'SET C',
    description: 'Menu-driven PHP script for associative arrays: 1) Sort by values ascending/descending without preserving keys (sort/rsort) 2) Sort preserving keys (asort/arsort) 3) Array Intersection (array_intersect) 4) Array Union.',
    marathiNote: 'सॉर्टिंग फंक्शन्स: sort (की रिसेट होते), asort (की जपली जाते), array_intersect (सामायिक घटक).',
    filename: 'array_menu_operations.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Associative Array Menu Operations</title>
</head>
<body>
    <h2>Menu-Driven Associative Array Operations</h2>
    <form method="post" action="">
        <label>Select Operation:</label><br>
        <input type="radio" name="choice" value="1" checked> 1. Sort by values (without preserving keys)<br>
        <input type="radio" name="choice" value="2"> 2. Sort by values (preserving keys - asort/arsort)<br>
        <input type="radio" name="choice" value="3"> 3. Intersection of two arrays (array_intersect)<br>
        <input type="radio" name="choice" value="4"> 4. Union of two arrays<br><br>

        <input type="submit" name="submit" value="Perform Operation">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $ch = $_POST['choice'];

        $arr1 = array("a" => 30, "b" => 10, "c" => 50, "d" => 20);
        $arr2 = array("c" => 50, "d" => 20, "e" => 70);

        echo "<h3>Original Array 1:</h3><pre>"; print_r($arr1); echo "</pre>";

        switch ($ch) {
            case "1":
                $temp1 = $arr1;
                sort($temp1);
                echo "<h3>Values Ascending (sort - keys reset):</h3><pre>"; print_r($temp1); echo "</pre>";
                $temp2 = $arr1;
                rsort($temp2);
                echo "<h3>Values Descending (rsort - keys reset):</h3><pre>"; print_r($temp2); echo "</pre>";
                break;

            case "2":
                $temp1 = $arr1;
                asort($temp1);
                echo "<h3>Values Ascending (asort - keys preserved):</h3><pre>"; print_r($temp1); echo "</pre>";
                $temp2 = $arr1;
                arsort($temp2);
                echo "<h3>Values Descending (arsort - keys preserved):</h3><pre>"; print_r($temp2); echo "</pre>";
                break;

            case "3":
                $intersect = array_intersect($arr1, $arr2);
                echo "<h3>Intersection of Array 1 and Array 2:</h3><pre>"; print_r($intersect); echo "</pre>";
                break;

            case "4":
                $union = $arr1 + $arr2; // Array union operator
                echo "<h3>Union of Array 1 and Array 2:</h3><pre>"; print_r($union); echo "</pre>";
                break;
        }
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Highlights PHP associative array sorting differences: sort() reindexes keys numerically, asort() maintains key-value pairs, array_intersect() finds shared values, and + operator merges unique keys.',
      mr: '`sort()` की रिसेट करतो, `asort()` की-व्हॅल्यू जोडी जपतो, `array_intersect()` दोन्हीतील समान घटक शोधतो.'
    },
    keyTakeaways: [
      'sort() vs asort(): asort preserves key associations.',
      'array_intersect() matches identical values across arrays.',
      'Array union + operator preserves left array keys.'
    ],
    inputFields: [
      {
        name: 'choice',
        label: 'Select Operation',
        type: 'select',
        defaultValue: '1',
        options: [
          { label: '1. Sort values (Keys reset - sort/rsort)', value: '1' },
          { label: '2. Sort values (Keys preserved - asort/arsort)', value: '2' },
          { label: '3. Intersection of Arrays (array_intersect)', value: '3' },
          { label: '4. Union of Arrays', value: '4' }
        ]
      }
    ]
  },
  {
    id: 'php-setc-8',
    title: 'String Word Replacement and Reversal',
    marathiTitle: 'स्ट्रिंगमधील शब्द बदलणे (Replace) आणि स्ट्रिंग उलट (Reverse) करणे',
    questionStatement: 'Q. Write a PHP script to perform string operations: i) Replace all occurrences of a word in a sentence with another word using str_replace() ii) Reverse a given string using strrev().',
    marathiQuestionStatement: 'प्रश्न: स्ट्रिंगवरील क्रिया करणारी PHP स्क्रिप्ट लिहा: १) str_replace() चा वापर करून वाक्यातील ठराविक शब्द दुसऱ्या शब्दाने बदलणे २) strrev() चा वापर करून पूर्ण स्ट्रिंग उलट (Reverse) करणे.',
    subject: 'php',
    set: 'SET C',
    description: 'String operations: i) Replace a word in a string with another word using str_replace() ii) Reverse a given string using strrev().',
    marathiNote: '`str_replace("शोधायचा शब्द", "नवीन शब्द", $वाक्य)` आणि `strrev()` वापरा.',
    filename: 'string_replace_reverse.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>String Replace & Reverse</title>
</head>
<body>
    <h2>String Operations</h2>

    <?php
    $text = "Welcome to Java programming. Java is powerful.";
    $search = "Java";
    $replace = "PHP";

    echo "<h3>Original String:</h3>";
    echo "<i>$text</i><br>";

    // i) Replace a word in a string
    $new_text = str_replace($search, $replace, $text);
    echo "<h3>i) After Word Replacement ('$search' ➔ '$replace'):</h3>";
    echo "<strong>$new_text</strong><br>";

    // ii) Reverse a given string
    $reversed = strrev($text);
    echo "<h3>ii) Reversed String (strrev):</h3>";
    echo "<strong>$reversed</strong><br>";
    ?>
</body>
</html>`,
    explanation: {
      en: 'Uses str_replace($search, $replace, $subject) for string replacement and strrev() for string reversal.',
      mr: '`str_replace()` ने शब्द बदलला जातो आणि `strrev()` ने संपूर्ण स्ट्रिंग उलटी केली जाते.'
    },
    keyTakeaways: [
      'str_replace() is case-sensitive string replacement.',
      'strrev() reverses string characters in O(N).'
    ]
  }
];
