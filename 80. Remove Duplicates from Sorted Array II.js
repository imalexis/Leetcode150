/**
pseudocode:
 
removeDuplicates(nums)
    l = 1
    count = 1
    for r = 1 to nums.length - 1
        if nums[r] == nums[r-1]
            count = count + 1
        else
            count = 1
        if count <= 2
            nums[l] = nums[r]
            l++
    return l
    
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let l = 1;
  let count = 1;
  for (let r = 1; r < nums.length; r++) {
    if (nums[r] === nums[r - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      nums[l++] = nums[r];
    }
  }
  return l;
};

/**
 * Pointer l keeps track of next location in the array where we can overwrite an element
 *
 * pointer r iterates the array, processing one element at a time
 *
 * Time complexity: O(n)
 *
 */
