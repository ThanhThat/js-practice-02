// 1. Viet ham tinh chu vi va ham tinh dien tich hinh tron bằng 1 trong 2 cách (prompt)
// + star function
// + use 2 function

function* areaAndPerimeterCircle(r) {
  r = +r;
  const perimeter = 2 * Math.PI * r;
  yield perimeter;
  const area = Math.PI * r ** 2;
  return area;
}

let r;

do {
  r = prompt("Nhập bán kính hình tròn: ");
} while (isNaN(r) || r.trim() === "");

const result01 = areaAndPerimeterCircle(r);

const perimeterCircle = result01.next().value;
const areaCircle = result01.next().value;

console.log(`Chu vi hinh tron: ${perimeterCircle}`);
console.log(`Dien tich hinh tron: ${areaCircle}`);
