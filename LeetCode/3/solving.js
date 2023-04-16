/*
!----------------------------------------------------------------------------------------------------
!----------------------------------   SECOND ALGORITHM PROBLEM    --------------------------------
!----------------------------------------------------------------------------------------------------
*Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

*For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

*Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
//!--------------------------------------------------------------------------------------------------
//!---------------------------------      MY SOLUTIONS    -------------------------------------------
//!--------------------------------------------------------------------------------------------------

//* 1-) MY FIRST SOLUTION:

// Roma rakamları ve karşılık gelen sayılarının bulunduğu bir obje tanımlanır.
const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// `s` parametresi olarak verilen Roma rakam dizisini sayıya dönüştüren bir fonksiyon tanımlanır.
const romanToInt = function (s) {
  value = 0; // Dönüştürülen sayının toplamı için `value` adında bir değişken tanımlanır ve 0 olarak ayarlanır.

  // `for` döngüsü kullanılarak, Roma rakam dizisinin her bir karakteri kontrol edilir.
  for (let i = 0; i < s.length; i += 1) {
    // Karakterin sayı değeri, önceden tanımlanan `symbols` objesinde bulunur.
    // Eğer bu karakterin sayı değeri, bir sonraki karakterin sayı değerinden küçükse,
    // `value` değişkeninden bu karakterin sayı değeri çıkarılır.
    // Aksi takdirde, bu karakterin sayı değeri `value` değişkenine eklenir.
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  // Dönüştürülen sayı değeri `value` döndürülür.
  return value;
};

// Roma rakam dizisi
const romanNumeral = "XVX";

// Roma rakam dizisi sayıya dönüştürülür
const result = romanToInt(romanNumeral);

// Sonuç konsola yazdırılır
console.log(result); // 15
