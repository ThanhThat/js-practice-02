// 3. https://cdn.tgdd.vn//GameApp/1323643//Slide25-800x450.png
const sumOfRectangularNumbers = (n) => {
  if (isNaN(n)) return false; // kiem tra co phai la so khong

  if (typeof n === "string" && n.trim() === "") return false;

  n = Number(n); // ep kieu
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * (i + 1);
  }

  return sum;
};

const result = sumOfRectangularNumbers(4);
console.log(result);
