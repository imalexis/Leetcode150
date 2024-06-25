/**
Algorithm MergeSortedArray(nums1, m, nums2, n):
    Initialize three pointers:
        i = m - 1   
        j = n - 1   
        k = m + n - 1   

    While j >= 0:
        If i >= 0 AND nums1[i] > nums2[j]:
            Set nums1[k] to nums1[i]
            Decrease i by 1
        Else:
            Set nums1[k] to nums2[j]
            Decrease j by 1
        Decrease k by 1

    While j >= 0:
        Set nums1[k] to nums2[j]
        Decrease both j and k by 1

End Algorithm

 */

/**
 * Another slightly different style
 
Algorithm MergeSortedArray2(nums1, m, nums2, n):
    Initialize three pointers:
        i = m - 1   
        j = n - 1   
        k = m + n - 1   

    While i >= 0 & j >= 0:
        If nums1[i] > nums2[j]:
            Set nums1[k] to nums1[i]
            Decrease i by 1
        Else:
            Set nums1[k] to nums2[j]
            Decrease j by 1
        Decrease k by 1

    While j >= 0:
        Set nums1[k] to nums2[j]
        Decrease both j and k by 1

End Algorithm

 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};

/**
   
  Approach : Three Pointers (Start From the End)
  
  Set 2 pointers i, j at the end of nums1 and nums2 correspondingly.
  Then write all the element into nums1 from the tail to head.
  
  Time complexity: O(n+m).
  
  Space complexity: O(1).
   */
