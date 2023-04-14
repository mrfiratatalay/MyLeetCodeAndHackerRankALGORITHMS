function twoSum(nums, target) {
  const seen = {}; // Gördüğümüz sayıları ve indexlerini tutmak için bir nesne oluşturuyoruz.
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Eşleşen sayıyı hesaplıyoruz.
    if (complement in seen) {
      // Eşleşen sayıyı nesnemizde arıyoruz.
      return [seen[complement], i]; // Eşleşen sayının indeksini ve mevcut sayının indeksini döndürüyoruz.
    }
    seen[nums[i]] = i; // Eşleşen sayı yoksa, mevcut sayıyı ve indeksini nesnemize ekliyoruz.
  }
  return []; // Dizide çözüm yoksa, boş dizi döndürüyoruz.
}

// Örnek kullanım
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // [0, 1]
