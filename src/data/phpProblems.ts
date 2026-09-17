import { Problem } from '../types';

export const phpProblems: Problem[] = [
  // --- SET A ---
  {
    id: 'php-seta-1',
    title: 'Quotient and Remainder Calculator',
    marathiTitle: 'भागाकार (Quotient) आणि बाकी (Remainder) काढणे',
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
      en: 'Uses `intdiv()` for integer quotient calculation and `%` modulo operator for remainder. Form uses POST method with error check for zero divisor.',
      mr: '`intdiv()` द्वारे पूर्णांक भागाकार आणि `%` द्वारे बाकी (Remainder) काढली जाते. 0 ने भाग दिल्यास एरर दाखवला जातो.'
    },
    keyTakeaways: [
      'Always check if divisor is 0 before dividing.',
      'Use `isset($_POST["submit"])` to trigger PHP block only when form is submitted.',
      'Set `action=""` to stay on the same page.'
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
      en: 'Stores variable $a into $temp, reassigns $a = $b, and then sets $b = $temp to complete the swap.',
      mr: '$temp नावाच्या तिसऱ्या बॉक्समध्ये $a ची किंमत ठेवून अ‍ॅड्रेस किंवा व्हॅल्यू एक्सचेंज केली जाते.'
    },
    keyTakeaways: [
      'Classic 3-variable swap algorithm.',
      'Safely checks `isset($_POST["submit"])` to avoid Notice: Undefined index warnings.'
    ],
    inputFields: [
      { name: 'a', label: 'Value of A', type: 'number', defaultValue: 10, required: true },
      { name: 'b', label: 'Value of B', type: 'number', defaultValue: 20, required: true }
    ]
  },
  {
    id: 'php-seta-3',
    title: 'Celsius to Fahrenheit Converter',
    marathiTitle: 'सेल्सिअसचे फॅरेनहाईटमध्ये रुपांतर करणे',
    subject: 'php',
    set: 'SET A',
    description: 'Converts temperature from Celsius (°C) to Fahrenheit (°F) using the formula F = (C * 9/5) + 32.',
    filename: 'celsius_fahrenheit.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Temperature Converter</title>
</head>
<body>
    <h2>Convert Celsius to Fahrenheit</h2>
    <form method="post" action="">
        Temperature in Celsius (°C): <input type="number" step="any" name="celsius" required><br><br>
        <input type="submit" name="submit" value="Convert">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $c = (float)$_POST['celsius'];
        $f = ($c * 9 / 5) + 32;

        echo "<h3>--- Result ---</h3>";
        echo "$c &deg;C = " . round($f, 2) . " &deg;F";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Uses `step="any"` in the HTML float input and computes `$f = ($c * 9 / 5) + 32` with `round()` to 2 decimals.',
      mr: 'दशांश संख्यांसाठी `step="any"` इनपुट टाईप वापरला आहे व `round($f, 2)` द्वारे पॉईंटनंतर २ अंक दाखवले आहेत.'
    },
    keyTakeaways: [
      'Formula: F = (C * 9/5) + 32.',
      'Use `round($val, 2)` for formatted display.'
    ],
    inputFields: [
      { name: 'celsius', label: 'Temperature in Celsius (°C)', type: 'number', step: 'any', defaultValue: 37, required: true }
    ]
  },
  {
    id: 'php-seta-4',
    title: 'Leap Year Checker',
    marathiTitle: 'लीप वर्ष (Leap Year) तपासणे',
    subject: 'php',
    set: 'SET A',
    description: 'Checks whether a user-entered year is a Leap Year using correct leap year logic (divisible by 400 OR divisible by 4 and not 100).',
    filename: 'leap_year.php',
    code: `<!DOCTYPE html>
<html>
<head><title>Leap Year Checker</title></head>
<body>
    <h2>Check Leap Year</h2>
    <form method="post" action="">
        Enter Year: <input type="number" name="year" required><br><br>
        <input type="submit" name="submit" value="Check Year">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $year = (int)$_POST['year'];

        if (($year % 400 == 0) || ($year % 4 == 0 && $year % 100 != 0)) {
            echo "<h3>$year is a Leap Year.</h3>";
        } else {
            echo "<h3>$year is NOT a Leap Year.</h3>";
        }
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Leap year condition: divisible by 400 OR (divisible by 4 AND NOT divisible by 100).',
      mr: 'वर्ष ४०० ने पूर्ण भाग जाणारे असेल किंवा ४ ने भाग जाणारे पण १०० ने न भाग जाणारे असेल तर ते लीप वर्ष असते.'
    },
    keyTakeaways: [
      'Condition: `($year % 400 == 0) || ($year % 4 == 0 && $year % 100 != 0)`'
    ],
    inputFields: [
      { name: 'year', label: 'Enter Year', type: 'number', defaultValue: 2024, required: true }
    ]
  },
  {
    id: 'php-seta-5',
    title: 'Switch Case Calculator (+, -, *, /)',
    marathiTitle: 'स्विच केसचा वापर करून कॅल्क्युलेटर',
    subject: 'php',
    set: 'SET A',
    description: 'Performs arithmetic operations (+, -, *, /) based on operator chosen from a dropdown select.',
    filename: 'switch_calculator.php',
    code: `<!DOCTYPE html>
<html>
<head><title>Simple Calculator</title></head>
<body>
    <h2>Calculator using Switch Case</h2>
    <form method="post" action="">
        First Number: <input type="number" step="any" name="num1" required><br><br>
        Second Number: <input type="number" step="any" name="num2" required><br><br>
        Operation:
        <select name="op" required>
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>
        </select><br><br>
        <input type="submit" name="submit" value="Calculate">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $op = $_POST['op'];
        $result = 0;

        switch ($op) {
            case '+':
                $result = $num1 + $num2;
                echo "<h3>Result: $num1 + $num2 = $result</h3>";
                break;
            case '-':
                $result = $num1 - $num2;
                echo "<h3>Result: $num1 - $num2 = $result</h3>";
                break;
            case '*':
                $result = $num1 * $num2;
                echo "<h3>Result: $num1 * $num2 = $result</h3>";
                break;
            case '/':
                if ($num2 == 0) {
                    echo "<h3 style='color:red;'>Cannot divide by zero!</h3>";
                } else {
                    $result = $num1 / $num2;
                    echo "<h3>Result: $num1 / $num2 = $result</h3>";
                }
                break;
            default:
                echo "<h3>Invalid Choice!</h3>";
        }
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Uses `switch($op)` to evaluate operator string. Handles division by zero gracefully.',
      mr: 'ड्रॉपडाऊनमधील निवडीनुसार `switch` स्टेटमेंट ऑपरेटर्सवरून अचूक गणिती उत्तर काढते.'
    },
    keyTakeaways: [
      'Clean control flow with `switch-case` and `break`.',
      'Division zero check inside case `/`.'
    ],
    inputFields: [
      { name: 'num1', label: 'First Number', type: 'number', step: 'any', defaultValue: 12, required: true },
      { name: 'num2', label: 'Second Number', type: 'number', step: 'any', defaultValue: 4, required: true },
      {
        name: 'op',
        label: 'Operation',
        type: 'select',
        defaultValue: '+',
        options: [
          { label: 'Addition (+)', value: '+' },
          { label: 'Subtraction (-)', value: '-' },
          { label: 'Multiplication (*)', value: '*' },
          { label: 'Division (/)', value: '/' }
        ],
        required: true
      }
    ]
  },
  {
    id: 'php-seta-6',
    title: 'Student Grade Evaluator',
    marathiTitle: 'टक्केवारीनुसार श्रेणी (Grade) ठरवणे',
    subject: 'php',
    set: 'SET A',
    description: 'Determines student class grade based on percentage using nested elseif conditions.',
    filename: 'student_grade.php',
    code: `<!DOCTYPE html>
<html>
<head><title>Student Grade</title></head>
<body>
    <h2>Check Student Grade</h2>
    <form method="post" action="">
        Enter Percentage: <input type="number" step="any" min="0" max="100" name="per" required><br><br>
        <input type="submit" name="submit" value="Get Grade">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $per = (float)$_POST['per'];
        $grade = "";

        if ($per < 40) {
            $grade = "Fail";
        } elseif ($per >= 40 && $per <= 50) {
            $grade = "Pass Class";
        } elseif ($per > 50 && $per <= 60) {
            $grade = "Higher Second Class";
        } elseif ($per > 60 && $per <= 70) {
            $grade = "First Class";
        } else {
            $grade = "First Class with Distinction";
        }

        echo "<h3>--- Result ---</h3>";
        echo "Percentage: $per % <br>";
        echo "<b>Grade: $grade</b>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Evaluates percentage against predefined grade bands (Fail <40, Pass 40-50, Higher 2nd 50-60, 1st 60-70, Distinction >70).',
      mr: 'विद्यार्थ्याच्या टक्केवारीनुसार श्रेणी (Grade) ठरवली जाते.'
    },
    keyTakeaways: [
      'HTML boundary validation via `min="0" max="100"`.'
    ],
    inputFields: [
      { name: 'per', label: 'Enter Percentage (0-100)', type: 'number', step: 'any', min: 0, max: 100, defaultValue: 76.5, required: true }
    ]
  },

  // --- SET B ---
  {
    id: 'php-setb-1',
    title: 'Surface Area and Volume of Cuboid',
    marathiTitle: 'क्यूबॉईडचे पृष्ठफळ (Surface Area) आणि घनफळ (Volume)',
    subject: 'php',
    set: 'SET B',
    description: 'Calculates Surface Area = 2*(lb + lh + bh) and Volume = l*b*h for length, breadth, and height of a cuboid.',
    filename: 'cuboid_calculation.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Cuboid Calculation</title>
</head>
<body>
    <h2>Cuboid Surface Area & Volume</h2>
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

        $surface_area = 2 * (($l * $b) + ($l * $h) + ($b * $h));
        $volume = $l * $b * $h;

        echo "<h3>--- Result ---</h3>";
        echo "Surface Area = " . round($surface_area, 2) . " sq. units<br>";
        echo "Volume = " . round($volume, 2) . " cubic units<br>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Formulas: Surface Area = 2*(l*b + l*h + b*h), Volume = l*b*h.',
      mr: 'लंबी, रुंदी आणि उंचीवरून Cuboid चे पृष्ठफळ आणि घनफळ अचूक काढले जाते.'
    },
    keyTakeaways: [
      'Surface Area formula: 2*(l*b + l*h + b*h)',
      'Volume formula: l*b*h'
    ],
    inputFields: [
      { name: 'l', label: 'Length (l)', type: 'number', step: 'any', defaultValue: 10, required: true },
      { name: 'b', label: 'Breadth (b)', type: 'number', step: 'any', defaultValue: 5, required: true },
      { name: 'h', label: 'Height (h)', type: 'number', step: 'any', defaultValue: 4, required: true }
    ]
  },
  {
    id: 'php-setb-2',
    title: 'Area of Circle, Square, and Rectangle',
    marathiTitle: 'वर्तुळ, चौरस आणि आयताचे क्षेत्रफळ काढणे',
    subject: 'php',
    set: 'SET B',
    description: 'Calculates area of circle (pi*r^2), square (side^2), and rectangle (length*width) from form inputs.',
    filename: 'area_calculator.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Area Calculator</title>
</head>
<body>
    <h2>Area of Circle, Square and Rectangle</h2>
    <form method="post" action="">
        Radius of Circle: <input type="number" step="any" name="r" required><br><br>
        Side of Square: <input type="number" step="any" name="s" required><br><br>
        Length of Rectangle: <input type="number" step="any" name="l" required><br><br>
        Breadth of Rectangle: <input type="number" step="any" name="w" required><br><br>
        <input type="submit" name="submit" value="Calculate All">
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

        echo "<h3>--- Areas ---</h3>";
        echo "Area of Circle: " . round($area_circle, 2) . " sq. units<br>";
        echo "Area of Square: " . round($area_square, 2) . " sq. units<br>";
        echo "Area of Rectangle: " . round($area_rectangle, 2) . " sq. units<br>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Uses `pi()` function for circle area and standard arithmetic for square and rectangle.',
      mr: '`pi()` फंक्शन वर्तुळाच्या क्षेत्रफळासाठी वापरले आहे.'
    },
    keyTakeaways: [
      'Circle: pi() * r^2',
      'Square: s^2',
      'Rectangle: l * w'
    ],
    inputFields: [
      { name: 'r', label: 'Radius of Circle (r)', type: 'number', step: 'any', defaultValue: 7, required: true },
      { name: 's', label: 'Side of Square (s)', type: 'number', step: 'any', defaultValue: 5, required: true },
      { name: 'l', label: 'Length of Rectangle (l)', type: 'number', step: 'any', defaultValue: 8, required: true },
      { name: 'w', label: 'Width of Rectangle (w)', type: 'number', step: 'any', defaultValue: 4, required: true }
    ]
  },
  {
    id: 'php-setb-3',
    title: '5 Subjects Marksheet & Percentage',
    marathiTitle: '५ विषयांची एकूण बेरीज आणि टक्केवारी (Marksheet)',
    subject: 'php',
    set: 'SET B',
    description: 'Calculates Total Marks and Percentage out of 500 for Data Structure, Digital Marketing, PHP, Software Engineering, and Big Data.',
    filename: 'student_marksheet.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Student Marksheet</title>
</head>
<body>
    <h2>Enter Subject Marks (Out of 100)</h2>
    <form method="post" action="">
        Data Structure: <input type="number" min="0" max="100" name="ds" required><br><br>
        Digital Marketing: <input type="number" min="0" max="100" name="dm" required><br><br>
        PHP: <input type="number" min="0" max="100" name="php" required><br><br>
        SE (Software Engg): <input type="number" min="0" max="100" name="se" required><br><br>
        Bigdata: <input type="number" min="0" max="100" name="bigdata" required><br><br>
        <input type="submit" name="submit" value="Calculate Result">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $ds = (float)$_POST['ds'];
        $dm = (float)$_POST['dm'];
        $php = (float)$_POST['php'];
        $se = (float)$_POST['se'];
        $bigdata = (float)$_POST['bigdata'];

        $total = $ds + $dm + $php + $se + $bigdata;
        $percentage = ($total / 500) * 100;

        echo "<h3>--- Result ---</h3>";
        echo "Data Structure: $ds / 100<br>";
        echo "Digital Marketing: $dm / 100<br>";
        echo "PHP: $php / 100<br>";
        echo "SE: $se / 100<br>";
        echo "Bigdata: $bigdata / 100<br>";
        echo "<hr>";
        echo "<b>Total Marks: " . $total . " / 500</b><br>";
        echo "<b>Percentage: " . round($percentage, 2) . "%</b><br>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Sums up 5 subject marks out of 100 and computes percentage = (Total / 500) * 100.',
      mr: '५ विषयांचे गुण जोडून ५०० पैकी एकूण बेरीज आणि टक्केवारी दाखवली जाते.'
    },
    keyTakeaways: [
      'HTML `min="0" max="100"` guards mark input range.'
    ],
    inputFields: [
      { name: 'ds', label: 'Data Structure', type: 'number', min: 0, max: 100, defaultValue: 85, required: true },
      { name: 'dm', label: 'Digital Marketing', type: 'number', min: 0, max: 100, defaultValue: 78, required: true },
      { name: 'php', label: 'PHP', type: 'number', min: 0, max: 100, defaultValue: 92, required: true },
      { name: 'se', label: 'Software Engineering', type: 'number', min: 0, max: 100, defaultValue: 88, required: true },
      { name: 'bigdata', label: 'Big Data', type: 'number', min: 0, max: 100, defaultValue: 80, required: true }
    ]
  },
  {
    id: 'php-setb-4',
    title: 'Prime Numbers between 1 to 50',
    marathiTitle: '१ ते ५० मधील मूळ संख्या (Prime Numbers) शोधणे',
    subject: 'php',
    set: 'SET B',
    description: 'Loops from 2 to 50 and outputs all prime numbers.',
    filename: 'prime_1_to_50.php',
    code: `<!DOCTYPE html>
<html>
<head><title>Prime Numbers</title></head>
<body>
    <h2>Prime Numbers Between 1 to 50:</h2>
    <?php
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
      en: 'Uses trial division up to `sqrt($i)` for maximum efficiency when determining primality.',
      mr: '१ ते ५० मधील मूळ संख्या शोधण्यासाठी २ पासून वर्गमुळापर्यंत (sqrt) भाग देऊन तपासणी केली जाते.'
    },
    keyTakeaways: [
      'Optimize primality check bound using `sqrt($i)`.'
    ],
    inputFields: []
  },
  {
    id: 'php-setb-5',
    title: 'Perfect Numbers between 1 to 100',
    marathiTitle: '१ ते १०० मधील पर्फेक्ट नंबर्स (Perfect Numbers)',
    subject: 'php',
    set: 'SET B',
    description: 'Finds numbers equal to the sum of their proper divisors (e.g. 6 = 1 + 2 + 3).',
    filename: 'perfect_numbers.php',
    code: `<!DOCTYPE html>
<html>
<head><title>Perfect Numbers</title></head>
<body>
    <h2>Perfect Numbers Between 1 to 100:</h2>
    <?php
    for ($num = 1; $num <= 100; $num++) {
        $sum = 0;
        for ($i = 1; $i <= $num / 2; $i++) {
            if ($num % $i == 0) {
                $sum += $i;
            }
        }
        if ($sum == $num && $num != 0) {
            echo "<b>$num</b> is a Perfect Number.<br>";
        }
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'A perfect number equals the sum of its divisors (excluding itself). e.g., 6 and 28.',
      mr: 'संख्या स्वतः सोडून तिच्या इतर सर्व भाजकांची बेरीज त्या संख्येइतकीच आली तर ती Perfect Number (उदा. 6, 28) असते.'
    },
    keyTakeaways: [
      'Divisor search limit: `$i <= $num / 2`.'
    ],
    inputFields: []
  },
  {
    id: 'php-setb-6',
    title: 'Reverse of a Number (e.g., 607 => 706)',
    marathiTitle: 'संख्येची उलटी क्रमाने मांडणी (Reverse Number)',
    subject: 'php',
    set: 'SET B',
    description: 'Reverses digits of an integer using a while loop with modulo 10 and division 10.',
    filename: 'reverse_number.php',
    code: `<!DOCTYPE html>
<html>
<head><title>Reverse a Number</title></head>
<body>
    <h2>Reverse of a Number</h2>
    <form method="post" action="">
        Enter a Number: <input type="number" name="num" required><br><br>
        <input type="submit" name="submit" value="Reverse">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $num = (int)$_POST['num'];
        $temp = $num;
        $rev = 0;

        while ($temp > 0) {
            $rem = $temp % 10;
            $rev = ($rev * 10) + $rem;
            $temp = (int)($temp / 10);
        }

        echo "<h3>Original Number: $num</h3>";
        echo "<h3>Reversed Number: $rev</h3>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Repeatedly extracts last digit using `$rem = $temp % 10` and builds reversed integer `$rev = ($rev * 10) + $rem`.',
      mr: 'शेवटचा अंक % 10 ने काढून उलट क्रमांकाची संख्या बनवली जाते.'
    },
    keyTakeaways: [
      'Standard arithmetic digits reversal algorithm.'
    ],
    inputFields: [
      { name: 'num', label: 'Enter a Number', type: 'number', defaultValue: 607, required: true }
    ]
  },
  {
    id: 'php-setb-7',
    title: 'Armstrong Numbers between 1 to 500',
    marathiTitle: '१ ते ५०० मधील आर्मस्ट्राँग संख्या (Armstrong Numbers)',
    subject: 'php',
    set: 'SET B',
    description: 'Displays numbers where sum of cubes of individual digits equals the number itself (e.g. 153 = 1^3 + 5^3 + 3^3).',
    filename: 'armstrong_numbers.php',
    code: `<!DOCTYPE html>
<html>
<head><title>Armstrong Numbers</title></head>
<body>
    <h2>Armstrong Numbers Between 1 to 500:</h2>
    <?php
    for ($i = 1; $i <= 500; $i++) {
        $temp = $i;
        $sum = 0;

        while ($temp > 0) {
            $rem = $temp % 10;
            $sum += ($rem * $rem * $rem);
            $temp = (int)($temp / 10);
        }

        if ($sum == $i) {
            echo $i . "<br>";
        }
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Checks if sum of cubes of digits equals original number. Output: 1, 153, 370, 371, 407.',
      mr: 'अंकांच्या घनाचा (cube) बेरीज मूळ संख्येइतकीच असल्यास ती Armstrong संख्या असते (उदा. 153).'
    },
    keyTakeaways: [
      'Digit cube sum formula.'
    ],
    inputFields: []
  },
  {
    id: 'php-setb-8',
    title: 'Operations on Indexed Array (Union & Random Traverse)',
    marathiTitle: 'इंडेक्स अरेवर क्रिया (Union आणि Random Traverse)',
    subject: 'php',
    set: 'SET B',
    description: 'Performs array operations including union using `array_unique(array_merge())` and random traversal with `shuffle()`.',
    filename: 'indexed_array_ops.php',
    code: `<?php
$array1 = array(10, 20, 30, 40);
$array2 = array(30, 40, 50, 60);

echo "<h3>Array 1:</h3>";
print_r($array1);
echo "<h3>Array 2:</h3>";
print_r($array2);

// a) Union of two arrays
$union = array_unique(array_merge($array1, $array2));
echo "<h3>a) Union of two arrays:</h3>";
print_r($union);

// b) Traverse the array elements in random order
echo "<h3>b) Traverse elements in random order:</h3>";
$random_array = $array1;
shuffle($random_array); // shuffles array
foreach ($random_array as $val) {
    echo $val . " ";
}
?>`,
    explanation: {
      en: 'Demonstrates `array_merge()` + `array_unique()` for set union and `shuffle()` for randomized output traversal.',
      mr: '`array_merge()` आणि `array_unique()` वापरून Union काढला जातो व `shuffle()` द्वारे रँडम ऑर्डरने अरे दाखवला जातो.'
    },
    keyTakeaways: [
      'Union: `array_unique(array_merge($a, $b))`',
      'Random order: `shuffle($arr)`'
    ],
    inputFields: []
  },
  {
    id: 'php-setb-9',
    title: 'Operations on Associative Array',
    marathiTitle: 'असोसिएटिव्ह अरेवर (Associative Array) विविध क्रिया',
    subject: 'php',
    set: 'SET B',
    description: 'Shows displaying keys/values, array size with `count()`, deletion via `unset()`, reversing with `array_reverse()`, and random key shuffle.',
    filename: 'associative_array_ops.php',
    code: `<?php
$student = array(
    "roll_no" => 101,
    "name"    => "Rahul",
    "course"  => "BCA",
    "city"    => "Pune"
);

// a) Display elements along with keys
echo "<h3>a) Display elements along with keys:</h3>";
foreach ($student as $key => $value) {
    echo "$key : $value <br>";
}

// b) Display size of array
echo "<h3>b) Size of the array:</h3>";
echo "Total Elements = " . count($student) . "<br>";

// c) Delete an element from the given key
echo "<h3>c) Delete an element (Deleting 'city'):</h3>";
unset($student["city"]);
print_r($student);

// d) Reverse the order of elements
echo "<h3>d) Reversed order of elements:</h3>";
$reversed = array_reverse($student);
print_r($reversed);

// e) Traverse the elements in random order
echo "<h3>e) Traverse in random order:</h3>";
$keys = array_keys($student);
shuffle($keys);
foreach ($keys as $k) {
    echo "$k : " . $student[$k] . "<br>";
}
?>`,
    explanation: {
      en: 'Covering key functions: `count()`, `unset($array[key])`, `array_reverse()`, `array_keys()`, and `shuffle()`.',
      mr: 'की आणि व्हॅल्यूचे जोडपे हाताळण्यासाठी `foreach`, `unset()`, `count()` इत्यादी फंक्शन वापरले आहेत.'
    },
    keyTakeaways: [
      'Associative array uses Key => Value pairs.',
      'Remove key with `unset($arr["key"])`.'
    ],
    inputFields: []
  },

  // --- SET C ---
  {
    id: 'php-setc-1',
    title: 'Air Ticket Reservation System & Total Cost',
    marathiTitle: 'विमान तिकीट बुकिंग फॉर्म (Air Ticket Reservation)',
    subject: 'php',
    set: 'SET C',
    description: 'Complete passenger booking details form calculating total amount payable = persons * price_per_ticket formatted with rupee symbol.',
    filename: 'air_ticket_reservation.php',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Air Ticket Reservation</title>
</head>
<body>
    <h2>Air Ticket Reservation Form</h2>
    <form method="post" action="">
        Passenger Name: <input type="text" name="name" required><br><br>
        Gender: 
        <input type="radio" name="gender" value="Male" required> Male
        <input type="radio" name="gender" value="Female"> Female
        <input type="radio" name="gender" value="Other"> Other<br><br>
        Contact No: <input type="text" name="contact" required><br><br>
        Address: <textarea name="address" required></textarea><br><br>
        Source City: <input type="text" name="source" required><br><br>
        Destination City: <input type="text" name="destination" required><br><br>
        Date of Journey: <input type="date" name="doj" required><br><br>
        Number of Persons: <input type="number" min="1" name="persons" required><br><br>
        Price per Ticket (₹): <input type="number" step="any" name="price" required><br><br>
        <input type="submit" name="submit" value="Book Tickets">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $name = htmlspecialchars($_POST['name']);
        $gender = htmlspecialchars($_POST['gender']);
        $contact = htmlspecialchars($_POST['contact']);
        $address = htmlspecialchars($_POST['address']);
        $source = htmlspecialchars($_POST['source']);
        $destination = htmlspecialchars($_POST['destination']);
        $doj = htmlspecialchars($_POST['doj']);
        $persons = (int)$_POST['persons'];
        $price = (float)$_POST['price'];

        $total_cost = $persons * $price;

        echo "<hr>";
        echo "<h2>--- Booking Summary ---</h2>";
        echo "<b>Name:</b> " . $name . "<br>";
        echo "<b>Gender:</b> " . $gender . "<br>";
        echo "<b>Contact:</b> " . $contact . "<br>";
        echo "<b>Address:</b> " . $address . "<br>";
        echo "<b>Route:</b> " . $source . " to " . $destination . "<br>";
        echo "<b>Date of Journey:</b> " . $doj . "<br>";
        echo "<b>Passengers:</b> " . $persons . "<br>";
        echo "<b>Price Per Ticket:</b> ₹" . number_format($price, 2) . "<br>";
        echo "<h3><b>Total Amount: ₹" . number_format($total_cost, 2) . "</b></h3>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Processes full HTML form with text, radio, textarea, date, and numbers. Sanitizes text with `htmlspecialchars()`.',
      mr: 'तिकीट बुकिंगच्या माहितीसाठी विविध HTML एलिमेंट्स वापरून `htmlspecialchars()` द्वारे डेटा सुरक्षितपणे दाखवला आहे.'
    },
    keyTakeaways: [
      'Sanitize string inputs using `htmlspecialchars()`.',
      'Format output values with `number_format($val, 2)`.'
    ],
    inputFields: [
      { name: 'name', label: 'Passenger Name', type: 'text', defaultValue: 'John Doe', required: true },
      {
        name: 'gender',
        label: 'Gender',
        type: 'select',
        defaultValue: 'Male',
        options: [
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' },
          { label: 'Other', value: 'Other' }
        ],
        required: true
      },
      { name: 'contact', label: 'Contact No', type: 'text', defaultValue: '+91 9876543210', required: true },
      { name: 'address', label: 'Address', type: 'textarea', defaultValue: '123 Main St, Pune', required: true },
      { name: 'source', label: 'Source City', type: 'text', defaultValue: 'Mumbai (BOM)', required: true },
      { name: 'destination', label: 'Destination City', type: 'text', defaultValue: 'Delhi (DEL)', required: true },
      { name: 'doj', label: 'Date of Journey', type: 'date', defaultValue: '2026-10-15', required: true },
      { name: 'persons', label: 'Number of Persons', type: 'number', min: 1, defaultValue: 3, required: true },
      { name: 'price', label: 'Price Per Ticket (₹)', type: 'number', step: 'any', defaultValue: 2500, required: true }
    ]
  },
  {
    id: 'php-setc-2',
    title: 'Display Number in Words using Switch Case',
    marathiTitle: 'संख्या शब्दांमध्ये (Words) रूपांतरित करणे (उदा. 345 => three four five)',
    subject: 'php',
    set: 'SET C',
    description: 'Reads digit string and converts each digit into word (zero, one, two...) using switch case.',
    filename: 'number_in_words.php',
    code: `<!DOCTYPE html>
<html>
<head><title>Number in Words</title></head>
<body>
    <h2>Convert Number to Words</h2>
    <form method="post" action="">
        Enter a Number: <input type="number" name="num" required><br><br>
        <input type="submit" name="submit" value="Convert">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $num = $_POST['num'];
        $len = strlen($num);

        echo "<h3>Output: ";
        for ($i = 0; $i < $len; $i++) {
            $digit = $num[$i];
            switch ($digit) {
                case '0': echo "zero "; break;
                case '1': echo "one "; break;
                case '2': echo "two "; break;
                case '3': echo "three "; break;
                case '4': echo "four "; break;
                case '5': echo "five "; break;
                case '6': echo "six "; break;
                case '7': echo "seven "; break;
                case '8': echo "eight "; break;
                case '9': echo "nine "; break;
            }
        }
        echo "</h3>";
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Loops over character string array representation of the number and uses switch case for word mapping.',
      mr: 'संख्येची स्ट्रिंग बनवून प्रत्येक अंकासाठी switch-case द्वारे इंग्रजी शब्द (zero to nine) प्रिंट केला जातो.'
    },
    keyTakeaways: [
      'Access string digits using `$num[$i]` index.'
    ],
    inputFields: [
      { name: 'num', label: 'Enter a Number', type: 'number', defaultValue: 345, required: true }
    ]
  },
  {
    id: 'php-setc-3',
    title: 'Dynamic Background Color by Day of Week',
    marathiTitle: 'वॉरानुसार (Day of Week) वेबपेजचा बॅकग्राऊंड कलर बदलणे',
    subject: 'php',
    set: 'SET C',
    description: 'Determines current day using `date("l")` and sets HTML body background color using switch case.',
    filename: 'bg_color_day.php',
    code: `<?php
$day = date("l"); // Current day name (e.g. Monday, Tuesday)
$bgcolor = "white";

switch ($day) {
    case "Monday":    $bgcolor = "#ffcccc"; break; // Light Red
    case "Tuesday":   $bgcolor = "#ffffcc"; break; // Light Yellow
    case "Wednesday": $bgcolor = "#ccffcc"; break; // Light Green
    case "Thursday":  $bgcolor = "#ccffff"; break; // Light Cyan
    case "Friday":    $bgcolor = "#e6ccff"; break; // Light Purple
    case "Saturday":  $bgcolor = "#ffe6cc"; break; // Light Orange
    case "Sunday":    $bgcolor = "#d9d9d9"; break; // Light Gray
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Change Background Color</title>
</head>
<body style="background-color: <?php echo $bgcolor; ?>;">
    <h2>Today is: <?php echo $day; ?></h2>
    <p>The background color is automatically set for <?php echo $day; ?>.</p>
</body>
</html>`,
    explanation: {
      en: 'Fetches `date("l")` full day name and injects color string into CSS `style="background-color: ..."` attribute.',
      mr: 'आज कोणता वार आहे त्यानुसार `switch` द्वारे रंग ठरवून `<body style="background-color: ...">` मध्ये सेट केला आहे.'
    },
    keyTakeaways: [
      'Get full day string: `date("l")`.'
    ],
    inputFields: []
  },
  {
    id: 'php-setc-4',
    title: 'Count Total Even and Odd Numbers (1 to 1000)',
    marathiTitle: '१ ते १००० मधील सम (Even) आणि विषम (Odd) संख्यांची संख्या',
    subject: 'php',
    set: 'SET C',
    description: 'Iterates from 1 to 1000 and counts even numbers ($i % 2 == 0) and odd numbers.',
    filename: 'even_odd_count.php',
    code: `<!DOCTYPE html>
<html>
<head><title>Even and Odd Count</title></head>
<body>
    <h2>Count of Even & Odd Numbers (1 to 1000)</h2>
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

    echo "<h3>Total Even Numbers between 1 to 1000: <b>$even_count</b></h3>";
    echo "<h3>Total Odd Numbers between 1 to 1000: <b>$odd_count</b></h3>";
    ?>
</body>
</html>`,
    explanation: {
      en: 'Loops 1000 times, incrementing $even_count or $odd_count based on modulo 2 test.',
      mr: '१ ते १००० मधील सम (५००) आणि विषम (५००) संख्यांची मोजणी केली जाते.'
    },
    keyTakeaways: [
      'Even condition: `$i % 2 == 0`.'
    ],
    inputFields: []
  },
  {
    id: 'php-setc-5',
    title: 'String Operations (Compare, Uppercase, Lowercase)',
    marathiTitle: 'स्ट्रिंग ऑपरेशन्स (तुलना, अप्परकेस, लोअरकेस)',
    subject: 'php',
    set: 'SET C',
    description: 'Compares strings with `strcmp()` and converts strings to uppercase (`strtoupper`) and lowercase (`strtolower`).',
    filename: 'string_basic_ops.php',
    code: `<?php
$str1 = "Hello World";
$str2 = "Apple";
$str3 = "Banana";

echo "String 1: $str1 <br>";
echo "String 2: $str2 <br>";
echo "String 3: $str3 <br><hr>";

// i) Compare string2 with string3
$cmp = strcmp($str2, $str3);
echo "<h3>i) Compare '$str2' with '$str3':</h3>";
if ($cmp == 0) {
    echo "Both strings are equal.";
} elseif ($cmp < 0) {
    echo "'$str2' is smaller than '$str3'";
} else {
    echo "'$str2' is greater than '$str3'";
}

// ii) Convert all strings to Uppercase
echo "<h3>ii) Uppercase:</h3>";
echo strtoupper($str1) . "<br>";
echo strtoupper($str2) . "<br>";
echo strtoupper($str3) . "<br>";

// iii) Convert all strings to Lowercase
echo "<h3>iii) Lowercase:</h3>";
echo strtolower($str1) . "<br>";
echo strtolower($str2) . "<br>";
echo strtolower($str3) . "<br>";
?>`,
    explanation: {
      en: 'Highlights built-in string functions `strcmp()`, `strtoupper()`, and `strtolower()`.',
      mr: 'स्ट्रिंगची तुलना व केसमधील बदल करण्यासाठी `strcmp()`, `strtoupper()`, `strtolower()` फंक्शन वापरले जातात.'
    },
    keyTakeaways: [
      '`strcmp($a, $b)` returns <0 if $a < $b, 0 if equal, >0 if $a > $b.'
    ],
    inputFields: []
  },
  {
    id: 'php-setc-6',
    title: 'String Word Case & Occurrences',
    marathiTitle: 'स्ट्रिंगचे शब्द कॅपिटल करणे आणि स्थान शोधणे',
    subject: 'php',
    set: 'SET C',
    description: 'Converts title case with `ucwords()` and finds first/last substring occurrences using `strpos()` & `strrpos()`.',
    filename: 'string_occurrences.php',
    code: `<?php
$str1 = "php is a popular scripting language. php is easy.";
$str2 = "php";

echo "String 1: <b>$str1</b> <br>";
echo "String 2 to search: <b>$str2</b> <br><hr>";

// i) Convert each word of a string
echo "<h3>i) Word Conversions:</h3>";
echo "Title Case (Each Word Capital): " . ucwords($str1) . "<br>";
echo "All Upper: " . strtoupper($str1) . "<br>";
echo "All Lower: " . strtolower($str1) . "<br>";

// ii) First and Last occurrence of string2 in string1
$first_pos = strpos($str1, $str2);
$last_pos  = strrpos($str1, $str2);

echo "<h3>ii) Occurrences:</h3>";
echo "First occurrence of '$str2' is at index: <b>$first_pos</b> <br>";
echo "Last occurrence of '$str2' is at index: <b>$last_pos</b> <br>";
?>`,
    explanation: {
      en: '`ucwords()` capitalizes first character of each word; `strpos()` gets first index and `strrpos()` finds last index.',
      mr: '`ucwords()` मुळे प्रत्येक शब्दाचे पहिले अक्षर मोठे होते; `strpos()` व `strrpos()` मुळे शब्दाचे पहिले आणि शेवटचे स्थान (Index) मिळते.'
    },
    keyTakeaways: [
      '`ucwords()` capitalizes every word.',
      '`strpos()` = first occurrence, `strrpos()` = last occurrence.'
    ],
    inputFields: []
  },
  {
    id: 'php-setc-7',
    title: 'Menu-driven program for Associative Arrays',
    marathiTitle: 'असोसिएटिव्ह अरे मेन्यू ड्राईव्हन प्रोग्राम (Sorting, Intersection & Union)',
    subject: 'php',
    set: 'SET C',
    description: 'Radio button menu for sorting by value (with/without key change), array intersection (`array_intersect`), and array union (`+`).',
    filename: 'associative_menu_driven.php',
    code: `<!DOCTYPE html>
<html>
<head><title>Associative Array Menu</title></head>
<body>
    <h2>Menu Driven Program on Associative Arrays</h2>
    <form method="post" action="">
        <label><b>Choose Operation:</b></label><br>
        <input type="radio" name="choice" value="1" required> 1. Sort by values (Change keys - Asc/Desc)<br>
        <input type="radio" name="choice" value="2"> 2. Sort by values (Without changing keys - Asc/Desc)<br>
        <input type="radio" name="choice" value="3"> 3. Intersection of two arrays<br>
        <input type="radio" name="choice" value="4"> 4. Union of two arrays<br><br>
        <input type="submit" name="submit" value="Perform Operation">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $ch = $_POST['choice'];

        $arr1 = array("a" => 30, "b" => 10, "c" => 50, "d" => 20);
        $arr2 = array("c" => 50, "d" => 20, "e" => 70);

        echo "<hr><h3>Result:</h3>";
        switch ($ch) {
            case '1':
                $asc = $arr1;
                sort($asc); // Re-indexes keys to 0, 1, 2...
                echo "<b>Ascending (Keys Changed):</b><br>";
                print_r($asc);

                $desc = $arr1;
                rsort($desc);
                echo "<br><br><b>Descending (Keys Changed):</b><br>";
                print_r($desc);
                break;

            case '2':
                $asc = $arr1;
                asort($asc); // Preserves keys
                echo "<b>Ascending (Without changing keys):</b><br>";
                print_r($asc);

                $desc = $arr1;
                arsort($desc);
                echo "<br><br><b>Descending (Without changing keys):</b><br>";
                print_r($desc);
                break;

            case '3':
                echo "<b>Intersection of Array 1 and Array 2:</b><br>";
                $intersection = array_intersect($arr1, $arr2);
                print_r($intersection);
                break;

            case '4':
                echo "<b>Union of Array 1 and Array 2:</b><br>";
                $union = $arr1 + $arr2; // Union for associative array
                print_r($union);
                break;
        }
    }
    ?>
</body>
</html>`,
    explanation: {
      en: 'Demonstrates `sort()` / `rsort()` (resets keys) vs `asort()` / `arsort()` (preserves keys), `array_intersect()`, and union operator `+`.',
      mr: '`sort()` की बदलते, तर `asort()` की जशीच्या तशी ठेवून व्हॅल्यू सॉर्ट करते.'
    },
    keyTakeaways: [
      '`asort()` keeps associative keys.',
      '`array_intersect()` finds common elements.'
    ],
    inputFields: [
      {
        name: 'choice',
        label: 'Choose Operation',
        type: 'select',
        defaultValue: '1',
        options: [
          { label: '1. Sort by values (Change keys)', value: '1' },
          { label: '2. Sort by values (Keep keys - asort)', value: '2' },
          { label: '3. Intersection of arrays', value: '3' },
          { label: '4. Union of arrays', value: '4' }
        ],
        required: true
      }
    ]
  },
  {
    id: 'php-setc-8',
    title: 'String Replace and String Reverse',
    marathiTitle: 'स्ट्रिंग मधील शब्द बदलणे (Replace) आणि उलट करणे (Reverse)',
    subject: 'php',
    set: 'SET C',
    description: 'Replaces target substring with new substring using `str_replace()` and reverses whole string using `strrev()`.',
    filename: 'string_replace_reverse.php',
    code: `<?php
$str1 = "Welcome to Java programming. Java is powerful.";
$str2 = "Java";
$str3 = "PHP";

echo "Original String 1: <b>$str1</b> <br>";
echo "String to Replace (str2): <b>$str2</b> <br>";
echo "Replacement String (str3): <b>$str3</b> <br><hr>";

// i) Replace string2 by string3 in string1
$replaced_str = str_replace($str2, $str3, $str1);
echo "<h3>i) After Replace:</h3>";
echo $replaced_str . "<br>";

// ii) Reverse and display the string
$reversed_str = strrev($str1);
echo "<h3>ii) Reversed String:</h3>";
echo $reversed_str . "<br>";
?>`,
    explanation: {
      en: 'Replaces all occurrences of `$str2` with `$str3` in `$str1` using `str_replace()` and reverses using `strrev()`.',
      mr: '`str_replace()` मुळे विशिष्ट शब्द बदलला जातो आणि `strrev()` मुळे संपूर्ण वाक्य उलट अक्षरांमध्ये छापले जाते.'
    },
    keyTakeaways: [
      'Replace syntax: `str_replace(search, replace, subject)`',
      'Reverse syntax: `strrev(string)`'
    ],
    inputFields: []
  }
];
