/**
 
 RemoveElement(nums, val):
    l = 1
    count = 1
    For r = 0 to length of nums - 1:
        If nums[r] != val:
            l++
            nums[l] = nums[r]
    Return l + 1

 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let l = -1; // pointer l is for the position of element not equal to val
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== val) {
      nums[++l] = nums[r];
    }
  }
  return l + 1;
};

/**
Approach : Two Pointers

Time complexity : O(n).
Assume the array has a total of n elements.

Space complexity : O(1)

 */
