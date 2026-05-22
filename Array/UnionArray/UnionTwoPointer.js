class Solution {
    // Function to find union of two sorted arrays using two pointers
    findUnion(arr1, arr2, n, m) {
        // Array to store union elements
        let Union = [];

        // Initialize pointers
        let i = 0, j = 0;

        // Iterate while both pointers are within array bounds
        while (i < n && j < m) {
            // If element in arr1 is smaller
            if (arr1[i] < arr2[j]) {
                // Add if empty or not duplicate
                if (Union.length === 0 || Union[Union.length - 1] !== arr1[i])
                    Union.push(arr1[i]);
                i++;
            }
            // If element in arr2 is smaller
            else if (arr2[j] < arr1[i]) {
                // Add if empty or not duplicate
                if (Union.length === 0 || Union[Union.length - 1] !== arr2[j])
                    Union.push(arr2[j]);
                j++;
            }
            else {
                // Elements are equal, add once if not duplicate
                if (Union.length === 0 || Union[Union.length - 1] !== arr1[i])
                    Union.push(arr1[i]);
                i++;
                j++;
            }
        }

        // Append remaining elements from arr1
        while (i < n) {
            if (Union.length === 0 || Union[Union.length - 1] !== arr1[i])
                Union.push(arr1[i]);
            i++;
        }

        // Append remaining elements from arr2
        while (j < m) {
            if (Union.length === 0 || Union[Union.length - 1] !== arr2[j])
                Union.push(arr2[j]);
            j++;
        }

        // Return the union array
        return Union;
    }
}

// Driver code
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];
const n = arr1.length, m = arr2.length;

const obj = new Solution();
const result = obj.findUnion(arr1, arr2, n, m);
console.log("Union of arr1 and arr2 is:", result.join(" "));
