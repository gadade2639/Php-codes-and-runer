import { Problem } from '../types';

export const cDataStructuresProblems: Problem[] = [
  // --- SET A ---
  {
    id: 'cds-seta-1',
    title: 'Count Frequency of Element in Sorted Array',
    marathiTitle: 'शॉर्टेड अरेमध्ये विशिष्ट घटकाची वारंवारता (Count) मोजणे',
    subject: 'c_ds',
    set: 'SET A',
    description: 'Finds the number of occurrences of an element x in a sorted array of n integers.',
    filename: 'frequency_counter.c',
    code: `#include <stdio.h>

int main() {
    int n, x, count = 0;

    printf("Enter number of elements in array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d sorted elements:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the element to find frequency (x): ");
    scanf("%d", &x);

    for (int i = 0; i < n; i++) {
        if (arr[i] == x) {
            count++;
        }
    }

    printf("Output: %d (Element %d occurs %d times)\\n", count, x, count);

    return 0;
}`,
    explanation: {
      en: 'Loops through array comparing each element with target x and increments count on match.',
      mr: 'अरे मधील प्रत्येक एलिमेंट x शी मॅच करून count १ ने वाढवला जातो.'
    },
    keyTakeaways: [
      'Time complexity O(N).',
      'Uses dynamic VLA array allocation `int arr[n]` in C99.'
    ]
  },
  {
    id: 'cds-seta-2',
    title: 'Store Square of Array Elements in Another Array',
    marathiTitle: 'अरे मधील घटकांचा वर्ग (Square) दुसऱ्या अरे मध्ये साठवणे',
    subject: 'c_ds',
    set: 'SET A',
    description: 'Accepts an array of n integers, computes square of each element, stores it in array 2, and prints both.',
    filename: 'square_array.c',
    code: `#include <stdio.h>

int main() {
    int n;

    printf("Enter number of elements (n): ");
    scanf("%d", &n);

    int arr1[n], arr2[n];

    printf("Enter %d elements:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr1[i]);
        arr2[i] = arr1[i] * arr1[i]; // Storing square
    }

    printf("\\nOriginal Array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr1[i]);
    }

    printf("\\nSquared Array:  ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr2[i]);
    }
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Iterates through `arr1`, sets `arr2[i] = arr1[i] * arr1[i]`, and outputs both arrays.',
      mr: 'पहिल्या अरे मधील प्रत्येक संख्येचा वर्ग `arr1[i] * arr1[i]` करून दुसऱ्या अरे मध्ये टाकला जातो.'
    },
    keyTakeaways: [
      'Parallel array transfer with element manipulation.'
    ]
  },
  {
    id: 'cds-seta-3',
    title: 'Copy One Array into Another Array',
    marathiTitle: 'एका अरे मधील डेटा दुसऱ्या अरे मध्ये कॉपी करणे',
    subject: 'c_ds',
    set: 'SET A',
    description: 'Copies all elements from source array to destination array element by element.',
    filename: 'copy_array.c',
    code: `#include <stdio.h>

int main() {
    int n;

    printf("Enter size of array: ");
    scanf("%d", &n);

    int source[n], destination[n];

    printf("Enter %d elements for source array:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &source[i]);
        destination[i] = source[i]; // Copying
    }

    printf("\\nElements copied to destination array:\\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", destination[i]);
    }
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Executes `destination[i] = source[i]` inside array traversal loop.',
      mr: 'प्रत्येक इंडेक्सचा डेटा दुसऱ्या अरे मध्ये डायरेक्ट असाईनमेंटद्वारे कॉपी केला जातो.'
    },
    keyTakeaways: [
      'Basic array cloning logic.'
    ]
  },
  {
    id: 'cds-seta-4',
    title: 'Bubble Sort (Ascending Order)',
    marathiTitle: 'बबल सॉर्ट (Bubble Sort) - चढता क्रम',
    subject: 'c_ds',
    set: 'SET A',
    description: 'Sorts an integer array in ascending order by repeatedly swapping adjacent elements if out of order.',
    filename: 'bubble_sort.c',
    code: `#include <stdio.h>

int main() {
    int n, temp;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Bubble Sort
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("\\nSorted Array (Bubble Sort): ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Nested loops compare adjacent elements `arr[j]` and `arr[j+1]` and swap them if `arr[j] > arr[j+1]`. Time complexity O(N^2).',
      mr: 'शेजारील दोन घटकांची तुलना करून मोठी संख्या पुढे ढकलली जाते (Bubbled to top).'
    },
    keyTakeaways: [
      'Adjacent swap condition: `arr[j] > arr[j+1]`',
      'Passes required: n - 1'
    ]
  },
  {
    id: 'cds-seta-5',
    title: 'Insertion Sort (Ascending Order)',
    marathiTitle: 'इन्सर्शन सॉर्ट (Insertion Sort) - चढता क्रम',
    subject: 'c_ds',
    set: 'SET A',
    description: 'Builds sorted array one element at a time by inserting key into correct position in sorted sub-array.',
    filename: 'insertion_sort.c',
    code: `#include <stdio.h>

int main() {
    int n, key, j;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Insertion Sort
    for (int i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    printf("\\nSorted Array (Insertion Sort): ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Picks `key = arr[i]` and shifts larger elements right until correct index `j+1` is found for key.',
      mr: 'कार्ड्स सॉर्ट करण्यासारखे प्रत्येक घटक त्याच्या योग्य जागेवर सरकवला (Insert) जातो.'
    },
    keyTakeaways: [
      'Efficient for small arrays or nearly sorted data.'
    ]
  },
  {
    id: 'cds-seta-6',
    title: 'Selection Sort (Ascending Order)',
    marathiTitle: 'सिलेक्शन सॉर्ट (Selection Sort) - चढता क्रम',
    subject: 'c_ds',
    set: 'SET A',
    description: 'Repeatedly finds minimum element from unsorted portion and swaps it with first unsorted element.',
    filename: 'selection_sort.c',
    code: `#include <stdio.h>

int main() {
    int n, min_idx, temp;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Selection Sort
    for (int i = 0; i < n - 1; i++) {
        min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        // Swap minimum element with element at i
        temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }

    printf("\\nSorted Array (Selection Sort): ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Finds index of minimum value in range `[i, n-1]` and swaps with position `i`. Exactly N-1 swaps.',
      mr: 'उरलेल्या array मधील सर्वात लहान घटक शोधून (Select करून) त्याला सुरुवातीच्या जागी ठेवून swap केले जाते.'
    },
    keyTakeaways: [
      'Minimum element index tracking with `min_idx`.'
    ]
  },

  // --- SET B ---
  {
    id: 'cds-setb-1',
    title: 'Polynomial Representation & Formatting',
    marathiTitle: 'पॉलीनॉमियल (Polynomial) स्वीकारणे आणि फॉरमॅटमध्ये दाखवणे',
    subject: 'c_ds',
    set: 'SET B',
    description: 'Stores polynomial using struct Term { int coeff; int exp; } and formats output (e.g. 6x^4 + 2x^2 + 5x^1 + 3).',
    filename: 'polynomial_display.c',
    code: `#include <stdio.h>

struct Term {
    int coeff;
    int exp;
};

int main() {
    int n;
    printf("Enter total number of terms in polynomial: ");
    scanf("%d", &n);

    struct Term p[n];

    for (int i = 0; i < n; i++) {
        printf("Enter coefficient and power (exponent) for term %d: ", i + 1);
        scanf("%d %d", &p[i].coeff, &p[i].exp);
    }

    printf("\\nPolynomial: ");
    for (int i = 0; i < n; i++) {
        if (p[i].exp == 0) {
            printf("%d", p[i].coeff);
        } else {
            printf("%dx^%d", p[i].coeff, p[i].exp);
        }

        if (i != n - 1) {
            printf(" + ");
        }
    }
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Uses structure array `p[i]` for (coeff, exp) pairs and formats clean polynomial output handling degree 0 constant term.',
      mr: '`struct Term` वापरून सहगुणक (coeff) आणि घात (exp) साठवून `ax^b` या स्वरूपात प्रिंट केले जाते.'
    },
    keyTakeaways: [
      'Polynomial term structure: `{ int coeff; int exp; }`'
    ]
  },
  {
    id: 'cds-setb-2',
    title: 'Find and Replace Element in Array',
    marathiTitle: 'अरे मधील संख्या शोधून त्याच्या जागी नवीन संख्या बदलणे (Replace)',
    subject: 'c_ds',
    set: 'SET B',
    description: 'Searches for a specified value in an array and replaces all occurrences with a new replacement value.',
    filename: 'find_replace_array.c',
    code: `#include <stdio.h>

int main() {
    int n, searchVal, replaceVal, found = 0;

    printf("Enter number of elements (n): ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter element to find: ");
    scanf("%d", &searchVal);
    printf("Enter replacement value: ");
    scanf("%d", &replaceVal);

    for (int i = 0; i < n; i++) {
        if (arr[i] == searchVal) {
            arr[i] = replaceVal;
            found = 1;
        }
    }

    if (found) {
        printf("\\nArray after replacement:\\n");
        for (int i = 0; i < n; i++) {
            printf("%d ", arr[i]);
        }
        printf("\\n");
    } else {
        printf("\\nElement %d not found in array!\\n", searchVal);
    }

    return 0;
}`,
    explanation: {
      en: 'Traverses array; if element equals searchVal, updates `arr[i] = replaceVal` and sets found flag.',
      mr: 'शोधावयाचा अंक सापडल्यास त्याच्या जागी रिप्लेसमेंट व्हॅल्यू असाईन केली जाते.'
    },
    keyTakeaways: [
      'Search and inline replace pattern.'
    ]
  },
  {
    id: 'cds-setb-3',
    title: 'Addition of Two Polynomials',
    marathiTitle: 'दोन पॉलीनॉमीयलची बेरीज (Addition of Polynomials)',
    subject: 'c_ds',
    set: 'SET B',
    description: 'Adds two polynomials represented as sorted structure arrays term-by-term matching exponents.',
    filename: 'polynomial_addition.c',
    code: `#include <stdio.h>

struct Term {
    int coeff;
    int exp;
};

int main() {
    int n1, n2, n3 = 0;
    
    printf("Enter number of terms in First polynomial: ");
    scanf("%d", &n1);
    struct Term p1[n1];
    for (int i = 0; i < n1; i++) {
        printf("Term %d (coeff exp): ", i + 1);
        scanf("%d %d", &p1[i].coeff, &p1[i].exp);
    }

    printf("\\nEnter number of terms in Second polynomial: ");
    scanf("%d", &n2);
    struct Term p2[n2];
    for (int i = 0; i < n2; i++) {
        printf("Term %d (coeff exp): ", i + 1);
        scanf("%d %d", &p2[i].coeff, &p2[i].exp);
    }

    struct Term res[n1 + n2];
    int i = 0, j = 0;

    // Adding polynomials
    while (i < n1 && j < n2) {
        if (p1[i].exp == p2[j].exp) {
            res[n3].coeff = p1[i].coeff + p2[j].coeff;
            res[n3].exp = p1[i].exp;
            i++; j++; n3++;
        } else if (p1[i].exp > p2[j].exp) {
            res[n3++] = p1[i++];
        } else {
            res[n3++] = p2[j++];
        }
    }

    while (i < n1) res[n3++] = p1[i++];
    while (j < n2) res[n3++] = p2[j++];

    printf("\\nResultant Polynomial (Sum): ");
    for (int k = 0; k < n3; k++) {
        printf("%dx^%d", res[k].coeff, res[k].exp);
        if (k != n3 - 1) printf(" + ");
    }
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Uses two-pointer merge algorithm: when exponents match, coefficients add up; otherwise higher exponent term copied first.',
      mr: 'समान घात (exp) असणाऱ्या टर्म्सचे सहगुणक (coeff) जोडले जातात.'
    },
    keyTakeaways: [
      'Two-pointer linear sweep algorithm.'
    ]
  },
  {
    id: 'cds-setb-4',
    title: 'Sort Days of Week using Insertion Sort',
    marathiTitle: 'आठवड्याचे दिवस इन्सर्शन सॉर्टद्वारे (Alphabetical) क्रमवारी लावणे',
    subject: 'c_ds',
    set: 'SET B',
    description: 'Sorts array of string days (Sunday to Saturday) alphabetically using `strcmp()` and `strcpy()` in insertion sort.',
    filename: 'sort_days_insertion.c',
    code: `#include <stdio.h>
#include <string.h>

int main() {
    char days[7][20] = {
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    };
    int n = 7;
    char key[20];
    int j;

    // Insertion sort on strings
    for (int i = 1; i < n; i++) {
        strcpy(key, days[i]);
        j = i - 1;

        while (j >= 0 && strcmp(days[j], key) > 0) {
            strcpy(days[j + 1], days[j]);
            j = j - 1;
        }
        strcpy(days[j + 1], key);
    }

    printf("Sorted Days of the Week (Alphabetical Order):\\n");
    for (int i = 0; i < n; i++) {
        printf("%s\\n", days[i]);
    }

    return 0;
}`,
    explanation: {
      en: 'Uses `strcmp()` for lexicographical string comparison and `strcpy()` for string moves.',
      mr: 'स्ट्रिंगची अकारविल्हे (Alphabetical) रचना करण्यासाठी `strcmp()` आणि `strcpy()` वापरले जाते.'
    },
    keyTakeaways: [
      'String compare: `strcmp(a, b) > 0` when `a` is alphabetically after `b`.'
    ]
  },
  {
    id: 'cds-setb-5',
    title: 'Sort Names Alphabetically using Bubble Sort',
    marathiTitle: 'नावे बबल सॉर्टद्वारे (Bubble Sort) अकारविल्हे लावणे',
    subject: 'c_ds',
    set: 'SET B',
    description: 'Accepts n names from user and sorts them alphabetically using string bubble sort algorithm.',
    filename: 'sort_names_bubble.c',
    code: `#include <stdio.h>
#include <string.h>

int main() {
    int n;
    printf("Enter number of names: ");
    scanf("%d", &n);

    char names[n][50], temp[50];
    printf("Enter %d names:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%s", names[i]);
    }

    // Bubble sort on strings
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (strcmp(names[j], names[j + 1]) > 0) {
                strcpy(temp, names[j]);
                strcpy(names[j], names[j + 1]);
                strcpy(names[j + 1], temp);
            }
        }
    }

    printf("\\nNames in Alphabetical Order:\\n");
    for (int i = 0; i < n; i++) {
        printf("%s\\n", names[i]);
    }

    return 0;
}`,
    explanation: {
      en: '2D char array `names[n][50]` sorted via pairwise string comparison `strcmp(names[j], names[j+1]) > 0`.',
      mr: 'नावांची अकारविल्हे (A to Z) क्रमवारी लावण्यासाठी बबल सॉर्टचा वापर केला आहे.'
    },
    keyTakeaways: [
      '2D character matrix string array.'
    ]
  },
  {
    id: 'cds-setb-6',
    title: 'Bubble Sort with Total Swaps Count',
    marathiTitle: 'एकूण स्वॅप्स संख्या (Swap Count) मोजून बबल सॉर्ट करणे',
    subject: 'c_ds',
    set: 'SET B',
    description: 'Sorts array with Bubble Sort and tracks total number of element swap operations executed.',
    filename: 'bubble_sort_swaps.c',
    code: `#include <stdio.h>

int main() {
    int n, temp, swap_count = 0;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Bubble Sort with Swap Counter
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap_count++;
            }
        }
    }

    printf("\\nSorted List: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    printf("\\nTotal Number of Swaps: %d\\n", swap_count);

    return 0;
}`,
    explanation: {
      en: 'Increments `swap_count++` every time adjacent elements swap, providing sorting complexity metric.',
      mr: 'अदलाबदल (Swap) किती वेळा झाली हे मोजण्यासाठी `swap_count++` मोजले जाते.'
    },
    keyTakeaways: [
      'Tracks total structural swaps.'
    ]
  },

  // --- SET C ---
  {
    id: 'cds-setc-1',
    title: 'Multiplication of Two Polynomials',
    marathiTitle: 'दोन पॉलीनॉमीयलचा गुणाकार (Multiplication of Polynomials)',
    subject: 'c_ds',
    set: 'SET C',
    description: 'Multiplies every term of polynomial 1 with polynomial 2 (coeff1*coeff2, exp1+exp2) and combines like exponential terms.',
    filename: 'polynomial_multiplication.c',
    code: `#include <stdio.h>

struct Term {
    int coeff;
    int exp;
};

int main() {
    int n1, n2;

    printf("Enter number of terms in First polynomial: ");
    scanf("%d", &n1);
    struct Term p1[n1];
    for (int i = 0; i < n1; i++) {
        printf("Term %d (coeff exp): ", i + 1);
        scanf("%d %d", &p1[i].coeff, &p1[i].exp);
    }

    printf("\\nEnter number of terms in Second polynomial: ");
    scanf("%d", &n2);
    struct Term p2[n2];
    for (int i = 0; i < n2; i++) {
        printf("Term %d (coeff exp): ", i + 1);
        scanf("%d %d", &p2[i].coeff, &p2[i].exp);
    }

    int total_terms = n1 * n2;
    struct Term prod[total_terms];
    int k = 0;

    // Multiply every term with every other term
    for (int i = 0; i < n1; i++) {
        for (int j = 0; j < n2; j++) {
            prod[k].coeff = p1[i].coeff * p2[j].coeff;
            prod[k].exp = p1[i].exp + p2[j].exp;
            k++;
        }
    }

    // Combine like terms (same powers)
    for (int i = 0; i < k; i++) {
        for (int j = i + 1; j < k; j++) {
            if (prod[i].exp == prod[j].exp) {
                prod[i].coeff += prod[j].coeff;
                // remove duplicate term by shifting array left
                for (int m = j; m < k - 1; m++) {
                    prod[m] = prod[m + 1];
                }
                k--;
                j--;
            }
        }
    }

    printf("\\nResultant Polynomial (Product): ");
    for (int i = 0; i < k; i++) {
        printf("%dx^%d", prod[i].coeff, prod[i].exp);
        if (i != k - 1) printf(" + ");
    }
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Multiplies coefficients, adds exponents (`exp1 + exp2`), and simplifies duplicate exponent terms in resulting array.',
      mr: 'गुणताना सहगुणकांचा गुणाकार होतो आणि घातांकांची (exp) बेरीज केली जाते.'
    },
    keyTakeaways: [
      'Multiplication rules: coeff = c1 * c2, exp = e1 + e2.',
      'Includes combination pass for terms with duplicate powers.'
    ]
  },
  {
    id: 'cds-setc-2',
    title: 'Sort employee.txt File Records by Name using Bubble Sort',
    marathiTitle: 'employee.txt फाईल मधील कर्मचारी नावे बबल सॉर्टने सॉर्ट करणे',
    subject: 'c_ds',
    set: 'SET C',
    description: 'Reads employee records (empno, empname) from "employee.txt" using `fopen` & `fscanf`, sorts by name using Bubble Sort, and displays sorted list.',
    filename: 'sort_employee_file.c',
    code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Employee {
    int empno;
    char empname[50];
};

int main() {
    FILE *fp;
    struct Employee emp[100], temp;
    int n = 0;

    fp = fopen("employee.txt", "r");
    if (fp == NULL) {
        printf("Error: Could not open 'employee.txt'!\\n");
        printf("(Tip: Create 'employee.txt' with lines like: 101 John)\\n");
        return 1;
    }

    // Reading data from file
    while (fscanf(fp, "%d %s", &emp[n].empno, emp[n].empname) != EOF) {
        n++;
    }
    fclose(fp);

    // Bubble sort by empname
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (strcmp(emp[j].empname, emp[j + 1].empname) > 0) {
                temp = emp[j];
                emp[j] = emp[j + 1];
                emp[j + 1] = temp;
            }
        }
    }

    printf("--- Sorted Employee List (Alphabetical by Name) ---\\n");
    printf("Emp No\\tEmp Name\\n");
    for (int i = 0; i < n; i++) {
        printf("%d\\t%s\\n", emp[i].empno, emp[i].empname);
    }

    return 0;
}`,
    explanation: {
      en: 'Demonstrates C File I/O (`fopen`, `fscanf`, `fclose`) with structure array Bubble Sorting.',
      mr: '`fopen()` द्वारे फाईल वाचून कर्मचाऱ्यांची नावे अकारविल्हे सॉर्ट केली जातात.'
    },
    keyTakeaways: [
      'File read loop: `while (fscanf(fp, "%d %s", ...) != EOF)`.'
    ]
  },
  {
    id: 'cds-setc-3',
    title: 'Sort person.txt File Records by Age using Insertion Sort',
    marathiTitle: 'person.txt फाईल मधील व्यक्तींचे वय (Age) इन्सर्शन सॉर्टने सॉर्ट करणे',
    subject: 'c_ds',
    set: 'SET C',
    description: 'Reads person records (personno, personage) from file and sorts them by age in ascending order using Insertion Sort.',
    filename: 'sort_person_age_file.c',
    code: `#include <stdio.h>
#include <stdlib.h>

struct Person {
    int personno;
    int personage;
};

int main() {
    FILE *fp;
    struct Person p[100], key;
    int n = 0, j;

    fp = fopen("person.txt", "r");
    if (fp == NULL) {
        printf("Error: Could not open 'person.txt'!\\n");
        printf("(Tip: Create 'person.txt' with lines like: 1 25)\\n");
        return 1;
    }

    // Reading data from file
    while (fscanf(fp, "%d %d", &p[n].personno, &p[n].personage) != EOF) {
        n++;
    }
    fclose(fp);

    // Insertion Sort by Age
    for (int i = 1; i < n; i++) {
        key = p[i];
        j = i - 1;

        while (j >= 0 && p[j].personage > key.personage) {
            p[j + 1] = p[j];
            j = j - 1;
        }
        p[j + 1] = key;
    }

    printf("--- Sorted Person List (Ascending by Age) ---\\n");
    printf("Person No\\tAge\\n");
    for (int i = 0; i < n; i++) {
        printf("%d\\t\\t%d\\n", p[i].personno, p[i].personage);
    }

    return 0;
}`,
    explanation: {
      en: 'Structure insertion sort comparing struct member `p[j].personage > key.personage`.',
      mr: 'फाइल मधील वयाची तुलना करून सर्वात लहान वय आधी येईल अशा प्रकारे सॉर्ट केले जाते.'
    },
    keyTakeaways: [
      'Sorting struct records based on numeric field.'
    ]
  },
  {
    id: 'cds-setc-4',
    title: 'Sorting Integers in Descending Order (Bubble, Insertion, Selection)',
    marathiTitle: 'पूर्णांक संख्यांचा उतरता क्रम (Descending Order) - तिन्ही पद्धती',
    subject: 'c_ds',
    set: 'SET C',
    description: 'Demonstrates Descending Order sorting for all three algorithms (Bubble Sort, Insertion Sort, Selection Sort) in a single modular program.',
    filename: 'descending_sort_all.c',
    code: `#include <stdio.h>

void bubbleSortDesc(int arr[], int n) {
    int temp;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) { // '<' for Descending
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

void insertionSortDesc(int arr[], int n) {
    int key, j;
    for (int i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] < key) { // '<' for Descending
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

void selectionSortDesc(int arr[], int n) {
    int max_idx, temp;
    for (int i = 0; i < n - 1; i++) {
        max_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] > arr[max_idx]) { // '>' for Descending
                max_idx = j;
            }
        }
        temp = arr[max_idx];
        arr[max_idx] = arr[i];
        arr[i] = temp;
    }
}

int main() {
    int n = 5;
    int a1[] = {12, 45, 23, 5, 89};
    int a2[] = {12, 45, 23, 5, 89};
    int a3[] = {12, 45, 23, 5, 89};

    bubbleSortDesc(a1, n);
    insertionSortDesc(a2, n);
    selectionSortDesc(a3, n);

    printf("Bubble Sort Descending:    ");
    for (int i = 0; i < n; i++) printf("%d ", a1[i]);

    printf("\\nInsertion Sort Descending: ");
    for (int i = 0; i < n; i++) printf("%d ", a2[i]);

    printf("\\nSelection Sort Descending: ");
    for (int i = 0; i < n; i++) printf("%d ", a3[i]);
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Flips comparison operators (`<` instead of `>` in Bubble/Insertion, and find `max_idx` instead of `min_idx` in Selection) to achieve descending order.',
      mr: 'उतरत्या क्रमासाठी (Descending) तुलना चिन्ह बदलून मोठे मूल्य आधी ठेवले जाते.'
    },
    keyTakeaways: [
      'Descending Bubble: `if (arr[j] < arr[j+1])`',
      'Descending Insertion: `while (j >= 0 && arr[j] < key)`',
      'Descending Selection: `if (arr[j] > arr[max_idx])`'
    ]
  }
];
