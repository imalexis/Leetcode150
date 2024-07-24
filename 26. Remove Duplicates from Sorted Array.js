/**
pseudocode:

removeDuplicates(nums):
    l = 0;
    for i = 1 to num.length - 1:
        if nums[i] != nums[i-1]:
            l++
            nums[l] = nums[i]

    return l + 1

 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let l = 0; // l pointer is for the position of unique elements
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[++l] = nums[i];
    }
  }
  return l + 1;
};

/**
 * Time complexity: O(n)
 */
