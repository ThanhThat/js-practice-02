// 4. Nhap vao so cua ban in ra so lien truoc, lien sau cua so do, trung binh nhan cua 3 so
function handleNumber(n) {
  // check n co phai la so khong
  if (isNaN(n)) return false;

  if (typeof n === "string" && n.trim() === "") return false;

  // ep kieu
  n = Number(n);

  const previousNumber = n - 1;
  const nextNumber = n + 1;
  const averageMultiplication = (previousNumber * nextNumber * n) / 3;

  console.log("Số liền trước: ", previousNumber);
  console.log("Số liền sau: ", nextNumber);
  console.log("Trung bình nhân: ", averageMultiplication);

  return true;
}

handleNumber(14);
handleNumber("14");
handleNumber("");
handleNumber("     ");
handleNumber("thatadfasdf");

// 5. Tinh n giai thua
