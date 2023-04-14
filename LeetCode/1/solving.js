/*
!----------------------------------------------------------------------------------------------------
!----------------------------------    MY FIRST ALGORITHM PROBLEM    --------------------------------
!----------------------------------------------------------------------------------------------------
*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/
//!--------------------------------------------------------------------------------------------------
//!---------------------------------      MY SOLUTIONS    -------------------------------------------
//!--------------------------------------------------------------------------------------------------

//* 1-) MY FIRST SOLUTION:

// İki parametre alan fonksiyon tanımlanır: nums (dizi) ve target (hedef sayı)
function twoSum(nums, target) {
  // Dizi içindeki elemanların sayısı kadar bir döngü başlatılır (i)
  for (let i = 0; i < nums.length; i++) {
    // İkinci bir döngü (j) başlatılır: i'den bir sonraki elemandan, dizinin sonuna kadar
    for (let j = i + 1; j < nums.length; j++) {
      // i. ve j. elemanların toplamı hedef sayıya eşit mi diye kontrol edilir
      if (nums[i] + nums[j] === target) {
        // Eğer toplam hedef sayıya eşitse, i ve j'nin indislerini içeren bir dizi döndürülür
        return [i, j];
      }
    }
  }

  // Döngü bittikten sonra eğer hedef sayıya eşit toplam bulunamadıysa, null döndürülür
  return null;
}

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
