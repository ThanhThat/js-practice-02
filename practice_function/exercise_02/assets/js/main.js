// 2. Viết hàm tính tổng các số nguyên tố

// Ham kiem tra so nguyen to
const isPrime = (num) => {
  // nếu num bé hơn hoặc bằng 1 và không phải là số nguyên thì trả về false
  if (num <= 1 && !Number.isInteger(num)) return false;

  // dùng sqrt để giảm số lần lặp giúp tối ưu hóa hiệu năng chương trình
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

// Hàm tính  tổng các số nguyên bé hơn n
const sumPrime = (n) => {
  let sum = 0;

  // Check if input data is numeric
  if (isNaN(n)) return false;

  if (typeof n === "string" && n.trim() === "") return false; // check for empty string or string with only space . character

  for (let i = 2; i <= n; i++) {
    // Kiểm tra i có phải là số nguyên tố không. nếu true thì sum = sum + i;
    if (isPrime(i)) sum += i;
  }

  return sum;
};

console.log(sumPrime(10));
