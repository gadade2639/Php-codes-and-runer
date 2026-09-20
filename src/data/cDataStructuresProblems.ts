import { Problem } from '../types';

export const cDataStructuresProblems: Problem[] = [
  // --- SET A ---
  {
    id: 'cds-seta-1',
    title: 'Count Frequency of Element in Sorted Array',
    marathiTitle: 'शॉर्टेड अरेमध्ये विशिष्ट घटकाची वारंवारता (Count) मोजणे',
    questionStatement: 'Q. Write a C program to accept a sorted array of N integers and count the frequency (total number of occurrences) of a given target element X.',
    marathiQuestionStatement: 'प्रश्न: N संख्यांचा सॉर्ट केलेला अरे आणि शोधायची संख्या X स्वीकारून, त्या अरेमध्ये X ही संख्या किती वेळा आली आहे (Frequency) हे मोजणारा C प्रोग्राम लिहा.',
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
    questionStatement: 'Q. Write a C program to accept N integers into array A, calculate the square of each element, store the squared values into array B, and display both arrays.',
    marathiQuestionStatement: 'प्रश्न: N संख्यांचा अरे A स्वीकारून, त्यातील प्रत्येक घटकाचा वर्ग (Square) करून तो दुसऱ्या अरे B मध्ये साठवणारा आणि दोन्ही अरे प्रिंट करणारा C प्रोग्राम लिहा.',
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
    questionStatement: 'Q. Write a C program to accept N integers in array A1 and copy all elements from array A1 into array A2 element by element using a loop.',
    marathiQuestionStatement: 'प्रश्न: N घटकांचा अरे A1 स्वीकारून, लूपचा वापर करून A1 मधील सर्व घटक दुसऱ्या अरे A2 मध्ये कॉपी करणारा C प्रोग्राम लिहा.',
    subject: 'c_ds',
    set: 'SET A',
    description: 'Copies all elements from source array to destination array element by element.',
    filename: 'copy_array.c',
    code: `#include <stdio.h>

int main() {
    int n;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int source[n], destination[n];

    printf("Enter %d elements:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &source[i]);
    }

    // Copying loop
    for (int i = 0; i < n; i++) {
        destination[i] = source[i];
    }

    printf("Copied Destination Array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", destination[i]);
    }
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Assigns destination[i] = source[i] inside a single pass loop.',
      mr: 'लूप मधे `destination[i] = source[i]` असा असाइनमेंट करून घटक कॉपी केले जातात.'
    },
    keyTakeaways: [
      'Basic array traversal and array memory copy.'
    ]
  },
  {
    id: 'cds-seta-4',
    title: 'Find Minimum and Maximum Element in Array',
    marathiTitle: 'अरे मधील लहानात लहान (Min) आणि मोठ्यात मोठी (Max) संख्या शोधणे',
    questionStatement: 'Q. Write a C program to accept N integers in an array and find the Maximum and Minimum numbers along with their index positions.',
    marathiQuestionStatement: 'प्रश्न: N संख्यांचा अरे स्वीकारून त्यातील सर्वात लहान (Minimum) आणि सर्वात मोठी (Maximum) संख्या त्यांच्या इंडेक्स स्थानासह शोधणारा C प्रोग्राम लिहा.',
    subject: 'c_ds',
    set: 'SET A',
    description: 'Finds the largest (Maximum) and smallest (Minimum) value in an unsorted array of n numbers.',
    filename: 'min_max_array.c',
    code: `#include <stdio.h>

int main() {
    int n;

    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d numbers:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int min = arr[0];
    int max = arr[0];

    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    printf("Minimum Element = %d\\n", min);
    printf("Maximum Element = %d\\n", max);

    return 0;
}`,
    explanation: {
      en: 'Initializes min and max to arr[0] and updates them when encountering smaller or larger values.',
      mr: 'प्रथमतः `min` आणि `max` ला पहिला घटक दिला जातो, नंतर लूप मध्ये तुलना करून नवीन लहानात लहान किंवा मोठ्यात मोठी संख्या सेव्ह केली जाते.'
    },
    keyTakeaways: [
      'Linear scan array traversal in O(N) time.'
    ]
  },
  {
    id: 'cds-seta-5',
    title: 'Bubble Sort Algorithm',
    marathiTitle: 'बबल सॉर्ट (Bubble Sort) अल्गोरिदम द्वारे अरे सॉर्ट करणे',
    questionStatement: 'Q. Write a C program to accept N unsorted integers and sort them in Ascending order using Bubble Sort algorithm.',
    marathiQuestionStatement: 'प्रश्न: N संख्यांचा अनसॉर्टेड अरे स्वीकारून बबल सॉर्ट (Bubble Sort) अल्गोरिदमचा वापर करून ते घटक चढत्या क्रमाने (Ascending Order) सॉर्ट करणारा C प्रोग्राम लिहा.',
    subject: 'c_ds',
    set: 'SET A',
    description: 'Sorts an array of n integers in ascending order using Bubble Sort algorithm.',
    filename: 'bubble_sort.c',
    code: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int swapped = 0;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        if (swapped == 0) break; // Optimization
    }
}

int main() {
    int n;
    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d integers:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    bubbleSort(arr, n);

    printf("Sorted Array (Bubble Sort): ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Repeatedly swaps adjacent elements if they are in wrong order. Time Complexity O(N^2).',
      mr: 'शेजारच्या दोन घटकांची तुलना करून लहान संख्या पुढे आणि मोठी मागे टाकली जाते.'
    },
    keyTakeaways: [
      'Bubble sort pushes largest unsorted element to the end in each pass.',
      'Optimized with `swapped` flag to stop early if array gets sorted.'
    ]
  },

  // --- SET B ---
  {
    id: 'cds-setb-1',
    title: 'Linear Search Algorithm',
    marathiTitle: 'लीनियर सर्च (Linear Search) द्वारे घटक शोधणे',
    questionStatement: 'Q. Write a C program to accept N integers in an array and search for a key element X using Linear Search algorithm. Display index if found, or message if not found.',
    marathiQuestionStatement: 'प्रश्न: N संख्यांचा अरे स्वीकारून लीनियर सर्च (Linear Search) अल्गोरिदमचा वापर करून X ही संख्या अरेमध्ये आहे की नाही ते शोधणारा आणि असल्यास तिचा इंडेक्स दाखवणारा C प्रोग्राम लिहा.',
    subject: 'c_ds',
    set: 'SET B',
    description: 'Searches for a key element X sequentially from index 0 to N-1 using Linear Search algorithm.',
    filename: 'linear_search.c',
    code: `#include <stdio.h>

int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) {
            return i; // Return index where found
        }
    }
    return -1; // Not found
}

int main() {
    int n, key;

    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d integers:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter key to search: ");
    scanf("%d", &key);

    int result = linearSearch(arr, n, key);

    if (result != -1) {
        printf("Element %d Found at Index %d (Position %d)\\n", key, result, result + 1);
    } else {
        printf("Element %d NOT Found in Array.\\n", key);
    }

    return 0;
}`,
    explanation: {
      en: 'Scans array index by index from 0 to n-1 until target key is found.',
      mr: 'इंडेक्स ० पासून शेवटपर्यंत एकामागोमाग एक घटक तपासून शोध घेतला जातो.'
    },
    keyTakeaways: [
      'Linear Search works on both sorted and unsorted arrays.',
      'Worst case time complexity: O(N).'
    ]
  },
  {
    id: 'cds-setb-2',
    title: 'Binary Search Algorithm',
    marathiTitle: 'बायनरी सर्च (Binary Search) अल्गोरिदम',
    questionStatement: 'Q. Write a C program to perform Binary Search on a sorted array of N integers to search for a target element X in O(log N) time complexity.',
    marathiQuestionStatement: 'प्रश्न: सॉर्ट केलेल्या अरेमध्ये बायनरी सर्च (Binary Search) अल्गोरिदमचा वापर करून X ही संख्या शोधणारा O(log N) प्रोग्राम लिहा.',
    subject: 'c_ds',
    set: 'SET B',
    description: 'Searches for key X in a sorted array by repeatedly dividing search interval in half (Divide and Conquer).',
    filename: 'binary_search.c',
    code: `#include <stdio.h>

int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] == key)
            return mid;

        if (arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }

    return -1;
}

int main() {
    int n, key;

    printf("Enter size of sorted array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d sorted integers:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter key to search: ");
    scanf("%d", &key);

    int result = binarySearch(arr, n, key);

    if (result != -1) {
        printf("Element %d Found at Index %d\\n", key, result);
    } else {
        printf("Element %d NOT Found in Array.\\n", key);
    }

    return 0;
}`,
    explanation: {
      en: 'Compares target key with middle element, reducing search space by half at every step. Requires sorted array.',
      mr: 'अरे मधील मधला घटक (mid) काढून शोध क्षेत्र अर्धे अर्धे केले जाते. अरे सॉर्ट असणे आवश्यक आहे.'
    },
    keyTakeaways: [
      'Time complexity O(log N).',
      'Prerequisite: Array MUST be sorted prior to binary search.'
    ]
  },
  {
    id: 'cds-setb-3',
    title: 'Insertion Sort Algorithm',
    marathiTitle: 'इन्सर्शन सॉर्ट (Insertion Sort) अल्गोरिदम',
    questionStatement: 'Q. Write a C program to accept N unsorted integers and sort them using Insertion Sort algorithm (building sorted array one item at a time).',
    marathiQuestionStatement: 'प्रश्न: इन्सर्शन सॉर्ट (Insertion Sort) अल्गोरिदमचा वापर करून N संख्यांचा अनसॉर्टेड अरे चढत्या क्रमाने सॉर्ट करणारा C प्रोग्राम लिहा.',
    subject: 'c_ds',
    set: 'SET B',
    description: 'Sorts array using Insertion Sort algorithm by inserting current element into its correct position in sorted sub-array.',
    filename: 'insertion_sort.c',
    code: `#include <stdio.h>

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        // Shift elements greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int n;

    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d integers:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    insertionSort(arr, n);

    printf("Sorted Array (Insertion Sort): ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Picks element key = arr[i] and shifts larger sorted elements to right until correct insertion slot is found.',
      mr: 'पत्त्यांच्या खेळाप्रमाणे नवीन संख्या तिच्या योग्य जागेवर (Sorted Subarray) टाकली जाते.'
    },
    keyTakeaways: [
      'Efficient for small dataset and nearly sorted arrays.',
      'In-place, stable sorting algorithm.'
    ]
  },
  {
    id: 'cds-setb-4',
    title: 'Selection Sort Algorithm',
    marathiTitle: 'सिलेक्शन सॉर्ट (Selection Sort) अल्गोरिदम',
    questionStatement: 'Q. Write a C program to accept N unsorted integers and sort them using Selection Sort algorithm by finding minimum element in unsorted region and swapping.',
    marathiQuestionStatement: 'प्रश्न: सिलेक्शन सॉर्ट (Selection Sort) अल्गोरिदमचा वापर करून अनसॉर्टेड भाग मधील लहानात लहान घटक शोधून त्याला सुरुवातीला स्वॅप करून अरे सॉर्ट करणारा C प्रोग्राम लिहा.',
    subject: 'c_ds',
    set: 'SET B',
    description: 'Sorts array by repeatedly finding minimum element from unsorted part and putting it at beginning.',
    filename: 'selection_sort.c',
    code: `#include <stdio.h>

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        // Swap smallest found element with arr[i]
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

int main() {
    int n;

    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d integers:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    selectionSort(arr, n);

    printf("Sorted Array (Selection Sort): ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Finds minimum element in unsorted subarray [i..n-1] and swaps it into index i.',
      mr: 'उरलेल्या अनसॉर्टेड भागात सर्वात लहान घटक निवडून त्याला योग्य जागेवर स्वॅप केले जाते.'
    },
    keyTakeaways: [
      'Selection Sort makes maximum N-1 swaps.',
      'Time complexity O(N^2) in all cases.'
    ]
  },

  // --- SET C ---
  {
    id: 'cds-setc-1',
    title: 'Merge Sort Algorithm',
    marathiTitle: 'मर्ज सॉर्ट (Merge Sort) - डिवाइड अँड कॉन्कर अल्गोरिदम',
    questionStatement: 'Q. Write a C program to implement Merge Sort algorithm using Divide and Conquer recursive technique to sort N numbers in O(N log N) time complexity.',
    marathiQuestionStatement: 'प्रश्न: डिवाइड अँड कॉन्कर (Divide and Conquer) पद्धतीचा वापर करून N संख्यांचा अरे O(N log N) वेळेत सॉर्ट करणारा मर्ज सॉर्ट (Merge Sort) C प्रोग्राम लिहा.',
    subject: 'c_ds',
    set: 'SET C',
    description: 'Sorts an array of n elements using recursive Divide and Conquer Merge Sort algorithm in O(N log N) time complexity.',
    filename: 'merge_sort.c',
    code: `#include <stdio.h>

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[n1], R[n2];

    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

int main() {
    int n;
    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d integers:\\n", n);
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    mergeSort(arr, 0, n - 1);

    printf("Sorted Array (Merge Sort): ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Recursively divides array into two halves, sorts them, and merges sorted subarrays.',
      mr: 'अरे दोन भागांत तोडून (Divide) नंतर एकत्र सॉर्ट (Merge) केला जातो.'
    },
    keyTakeaways: [
      'Guaranteed O(N log N) performance.',
      'Stable sorting algorithm requiring O(N) extra space.'
    ]
  },
  {
    id: 'cds-setc-2',
    title: 'Quick Sort Algorithm',
    marathiTitle: 'क्विक सॉर्ट (Quick Sort) - पिव्हॉट सॉर्टिंग अल्गोरिदम',
    questionStatement: 'Q. Write a C program to implement Quick Sort algorithm using Pivot partitioning technique (Lomuto or Hoare) to sort N unsorted integers.',
    marathiQuestionStatement: 'प्रश्न: पिव्हॉट (Pivot Element) निवडून विभाजनाच्या (Partitioning) साहाय्याने अनसॉर्टेड अरे चढत्या क्रमाने सॉर्ट करणारा क्विक सॉर्ट (Quick Sort) C प्रोग्राम लिहा.',
    subject: 'c_ds',
    set: 'SET C',
    description: 'Sorts array using Quick Sort algorithm by selecting a Pivot element, partitioning elements around pivot, and recursively sorting sub-arrays.',
    filename: 'quick_sort.c',
    code: `#include <stdio.h>

void swap(int* a, int* b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // Pivot element
    int i = (low - 1);

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int n;
    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d integers:\\n", n);
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    quickSort(arr, 0, n - 1);

    printf("Sorted Array (Quick Sort): ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    return 0;
}`,
    explanation: {
      en: 'Picks last element as pivot, partitions smaller elements to left and larger to right, then recurses.',
      mr: 'पिव्हॉट (Pivot) घटक निवडून त्यापेक्षा लहान डावीकडे आणि मोठे उजवीकडे टाकून रिकर्शन चालवले जाते.'
    },
    keyTakeaways: [
      'Average time complexity O(N log N).',
      'In-place sorting algorithm with high cache efficiency.'
    ]
  }
];
