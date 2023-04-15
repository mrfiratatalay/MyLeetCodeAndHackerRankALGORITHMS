/*
!----------------------------------------------------------------------------------------------------
!----------------------------------   SECOND ALGORITHM PROBLEM    --------------------------------
!----------------------------------------------------------------------------------------------------
*Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
*/
//!--------------------------------------------------------------------------------------------------
//!---------------------------------      MY SOLUTIONS    -------------------------------------------
//!--------------------------------------------------------------------------------------------------

//* 1-) MY FIRST SOLUTION:

// Fonksiyon tanımlanıyor
const isPalindrome = function (x) {
  // Girdi sayısı bir stringe dönüştürülüyor
  const str = x.toString();
  // İki indeks tanımlanıyor: leftIndex ve rightIndex
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  // While döngüsü, leftIndex < rightIndex olduğu sürece çalışır
  while (leftIndex < rightIndex) {
    // Eğer sol indeksteki karakter sağ indeksteki karakterle aynı değilse,
    // palindromik değildir, false döndürülür.
    if (str.charAt(leftIndex) !== str.charAt(rightIndex)) {
      return false;
    }
    // İndeksler birer birer artırılıp azaltılır
    leftIndex++;
    rightIndex--;
  }

  // Fonksiyon, palindromik olduğu durumlarda true döndürür.
  return true;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(123)); // false

//******** BU ALGORITMADAN OGRENILEN BILGILER **********/
/*
!!!!!!!!  charAt() methodum:  !!!!!!!!
charAt() yöntemi, bir dizenin belirtilen indeksindeki karakteri döndürür. Bu yöntem, bir dizenin belirli bir karakterini alma veya bir dizedeki her bir karakteri ayrı ayrı ele alma gibi işlemler için kullanılabilir.

Örneğin, aşağıdaki örnekte, bir dize oluşturulur ve charAt() yöntemi kullanılarak bu dizenin belirli bir karakteri alınır:

let kelime = "Merhaba";
let karakter = kelime.charAt(1);
console.log(karakter); // "e"


!!!!!!!!  toString() methodum:  !!!!!!!!

const num = 42;
const str = num.toString();
console.log(str); // "42"

*/
