📅 18/03/2024

# fundamental algorithms
Preparing for a coding test involves understanding and practicing various algorithms and data structures commonly used in programming. Here's a list of fundamental algorithms you should be familiar with:

1. **Sorting Algorithms**:
    - Bubble Sort
    - Selection Sort
    - Insertion Sort
    - Merge Sort
    - Quick Sort
    - Heap Sort
    - Counting Sort
    - Radix Sort

2. **Searching Algorithms**:
    - Linear Search
    - Binary Search
    - Depth-First Search (DFS)
    - Breadth-First Search (BFS)

3. **Graph Algorithms**:
    - Depth-First Search (DFS)
    - Breadth-First Search (BFS)
    - Dijkstra's Algorithm (Shortest Path)
    - Bellman-Ford Algorithm (Shortest Path)
    - Floyd-Warshall Algorithm (All Shortest Paths)
    - Prim's Algorithm (Minimum Spanning Tree)
    - Kruskal's Algorithm (Minimum Spanning Tree)

4. **Dynamic Programming**:
    - Fibonacci Sequence
    - Knapsack Problem
    - Longest Common Subsequence
    - Coin Change Problem
    - Matrix Chain Multiplication
    - Edit Distance

5. **Greedy Algorithms**:
    - Activity Selection Problem
    - Fractional Knapsack Problem
    - Huffman Coding
    - Prim's Algorithm (Minimum Spanning Tree)
    - Kruskal's Algorithm (Minimum Spanning Tree)
    - Dijkstra's Algorithm (Shortest Path)

6. **Tree Algorithms**:
    - Tree Traversals (Inorder, Preorder, Postorder)
    - Binary Search Tree (Insertion, Deletion, Search)
    - Lowest Common Ancestor (LCA)
    - AVL Trees (Balanced Binary Search Trees)
    - Segment Trees
    - Fenwick Trees (Binary Indexed Trees)

7. **String Algorithms**:
    - String Matching (Brute Force, Rabin-Karp, KMP)
    - Longest Common Substring
    - Longest Palindromic Substring
    - Edit Distance
    - Trie Data Structure

8. **Backtracking**:
    - N-Queens Problem
    - Sudoku Solver
    - Subset Sum
    - Hamiltonian Cycle
    - Knight's Tour

9. **Mathematical Algorithms**:
    - Sieve of Eratosthenes (Prime Numbers)
    - Euclidean Algorithm (GCD)
    - Modular Arithmetic
    - Sieve of Atkin (Prime Numbers)
    - Fast Exponentiation (Modular Exponentiation)

10. **Miscellaneous**:
    - Topological Sorting
    - Interval Scheduling
    - Maximum Subarray Sum
    - Convex Hull (Graham Scan, Jarvis March)
    - Stable Marriage Problem

Understanding the time and space complexities of these algorithms is crucial for optimizing your solutions. Additionally, practicing coding problems on platforms like LeetCode, HackerRank, and Codeforces will help reinforce your understanding and improve your problem-solving skills.

# algorithm along with an example code implementation in JavaScript:

1. **Bubble Sort**:
    - Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
    
    ```javascript
    function bubbleSort(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
    ```

2. **Selection Sort**:
    - Selection Sort divides the input list into two parts: the sorted sublist and the unsorted sublist. It repeatedly finds the minimum element from the unsorted sublist and swaps it with the first element of the unsorted sublist.

    ```javascript
    function selectionSort(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            // Swap arr[i] and arr[minIndex]
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        return arr;
    }
    ```

3. **Insertion Sort**:
    - Insertion Sort builds the final sorted array one item at a time by repeatedly taking the next element from the unsorted part and inserting it into its correct position in the sorted part.

    ```javascript
    function insertionSort(arr) {
        const n = arr.length;
        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        return arr;
    }
    ```

4. **Merge Sort**:
    - Merge Sort divides the array into halves, recursively sorts the halves, and then merges them back together.

    ```javascript
    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        
        const middle = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, middle));
        const right = mergeSort(arr.slice(middle));
        
        return merge(left, right);
    }
    
    function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
    
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
    
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
    ```

5. **Quick Sort**:
    - Quick Sort selects a 'pivot' element from the array and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot. It then recursively sorts the sub-arrays.

    ```javascript
    function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        
        const pivot = arr[arr.length - 1];
        const left = [];
        const right = [];
        
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
    ```

These are just a few examples. Let me know if you'd like examples for the other algorithms as well!