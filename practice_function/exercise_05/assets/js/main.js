// 5. Tinh n giai thua
const factorial = (n) => {
  if (isNaN(n)) return false; // check not a number;

  if (typeof n === "string" && n.trim() === "") return false; // kiem tra nguoi dung truyen chuoi rong hoac chuoi chi co khoang trang

  n = Number(n); // ep kieu

  let i = 2;
  let result = 1;

  while (i <= n) {
    result *= i;
    i++;
  }

  return result;
};

const result1 = factorial("    ");
const result2 = factorial("fadasdf");
const result3 = factorial("4");
const result4 = factorial(4);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
