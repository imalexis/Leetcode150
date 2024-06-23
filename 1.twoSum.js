/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return null;
};

/**
  
   Approach : One-pass Hash Table
  
   While we are iterating and inserting elements into the hash table, we also look back to check if current element's complement already exists in the hash table. 
   If it exists, we have found a solution and return the indices immediately.
  
   Time complexity: O(n).
  
   Space complexity: O(n).
   depends on the number of items stored in the hash table, which stores at most n elements.

   */
