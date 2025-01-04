### **Time Complexity Summary Table**

| **Operation**                    | **Time Complexity** | **Explanation**                                                       |
|-----------------------------------|---------------------|-----------------------------------------------------------------------|
| **For loop**                      | O(n)                | A simple loop over an array or list of size `n`.                     |
| **Nested loops**                  | O(n^2), O(n^3), etc.| Nested loops, each iterating over `n` elements.                       |
| **Array access**                  | O(1)                | Accessing an element in an array by index.                           |
| **Array push/pop (unshift/shift)**| O(1)                | Adding/removing elements to/from the end of the array (constant time).|
| **Array unshift/shift (beginning)**| O(n)                | Adding/removing elements at the beginning of the array (linear time).|
| **Array iteration (map/filter)**  | O(n)                | Operations like `map`, `filter`, `forEach` iterate over `n` elements. |
| **Sorting (array)**               | O(n log n)          | Sorting an array using algorithms like quicksort or mergesort.        |
| **String operations (split/concat)**| O(n)               | Operations like splitting or concatenating strings (linear time).     |
| **String search (indexOf)**       | O(n)                | Searching for a substring in a string.                                |
| **Set/Map insertion/search**      | O(1)                | Inserting/searching in a Set or Map (average case).                   |
| **Set/Map traversal**             | O(n)                | Iterating over a Set or Map (linear time).                            |
| **Object property access**        | O(1)                | Accessing a property in an object.                                   |
| **String comparison**             | O(n)                | Comparing two strings character by character.                        |

---

### **Space Complexity Summary Table**

| **Operation**                      | **Space Complexity** | **Explanation**                                                          |
|-------------------------------------|----------------------|--------------------------------------------------------------------------|
| **Array creation**                  | O(n)                 | Creating an array with `n` elements requires linear space.               |
| **String creation**                 | O(n)                 | A string of length `n` requires linear space.                            |
| **Object creation**                 | O(n)                 | Creating an object with `n` properties requires linear space.            |
| **Set/Map creation**                | O(n)                 | Storing `n` elements in a Set or Map requires linear space.              |
| **Recursive function calls (no memoization)** | O(n)            | Recursive calls for depth `n` (e.g., in DFS or tree traversals).         |
| **Stack space for recursion**       | O(n)                 | In the worst case, recursion depth may be proportional to `n`.           |
| **Nested data structures**          | O(n * m)             | For example, a 2D array or matrix of size `n x m` requires O(n * m) space.|
| **HashMap with n keys/values**      | O(n)                 | A HashMap with `n` entries requires linear space.                        |

---

### **Examples**

1. **Array Operations:**
   ```javascript
   let arr = [1, 2, 3];  // O(n) space for array
   arr.push(4);          // O(1) time
   arr.pop();            // O(1) time
   arr.shift();          // O(n) time (linear time for shifting from the beginning)
   ```

2. **For Loop:**
   ```javascript
   for (let i = 0; i < n; i++) {  // O(n) time
       console.log(i);
   }
   ```

3. **Sorting an Array:**
   ```javascript
   arr.sort();  // O(n log n) time for sorting
   ```

4. **Set Operations:**
   ```javascript
   let set = new Set();
   set.add(1);   // O(1) time
   set.has(1);   // O(1) time
   ```

5. **String Operations:**
   ```javascript
   let str = "hello";
   let newStr = str.split("");   // O(n) time for splitting
   let concatStr = str.concat(" world");  // O(n) time for concatenation
   ```

6. **Recursion (e.g., DFS in a tree):**
   ```javascript
   function dfs(node) {
       if (!node) return;
       dfs(node.left);   // O(n) time and O(n) space for recursion depth
       dfs(node.right);
   }
   ```

---

### **Key Takeaways**
- **O(n):** The operation grows linearly with the input size.
- **O(n^2):** Common for nested loops (e.g., checking every pair of elements in an array).
- **O(log n):** Often seen in algorithms like binary search.
- **O(1):** Constant time or space, regardless of input size (e.g., accessing an array element).
- **O(n log n):** Common in sorting algorithms like quicksort and mergesort.
- **O(n * m):** Used when working with multi-dimensional structures (like matrices).

---

This table provides a rough guide to how operations scale with the size of inputs, based on common operations like loops, array usage, string manipulation, etc.