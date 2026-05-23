
var findMedianSortedArrays = function(nums1, nums2) {
     let merged = [...nums1, ...nums2].sort((a, b) => a - b);

    let n = merged.length;

    if (n % 2 === 0) {
        return (merged[n / 2 - 1] + merged[n / 2]) / 2;
    }

    return merged[Math.floor(n / 2)]
};
 nums1 = [1,2], nums2 = [3,4]
// nums1 = [1,3], nums2 = [2]
console.log(findMedianSortedArrays(nums1,nums2))