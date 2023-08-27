function phoneNumber(number) {
  const areaPart = number.slice(0, 3).join("");
  const firstPart = number.slice(3, 6).join("");
  const secondPart = number.slice(6).join("");

  return `(${areaPart}) ${firstPart}-${secondPart}`;
}

console.log(phoneNumber([5, 5, 2, 8, 1, 3, 7, 8, 5, 0]));
