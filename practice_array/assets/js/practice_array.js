var languages = ["Javascript", "PHP", "Java", "C#"];

console.log("=== PRACTICE ARRAY ===");
// 1. Thay the "PHP" bang "Python"
languages.splice(1, 1, "Python");
console.log(`1. Mang sau khi thay the "PHP" bang "Python": `, languages);

// 2. Tim tu ngan nhat va dai nhat trong mang
const lengthLang = languages.length;

let wordMaxLength = languages[0].length;
let wordMax = languages[0];

for (let i = 1; i < lengthLang; i++) {
  if (wordMaxLength < languages[i].length) {
    wordMaxLength = languages[i].length;
    wordMax = languages[i];
  }
}
console.log("2.1. Tu dai nhat trong mang:", wordMax);

let wordMinLength = languages[0].length;
let wordMin = languages[0];

for (let i = 1; i < lengthLang; i++) {
  if (wordMinLength > languages[i].length) {
    wordMinLength = languages[i].length;
    wordMin = languages[i];
  }
}
console.log("2.2. Tu ngan nhat trong mang:", wordMin);

// 3. Tim cac tu chua chuoi "Java"
const wordContainJava = languages.reduce((acc, curr) => {
  if (curr.includes("Java")) acc.push(curr);
  return acc;
}, []);

console.log(`3. Tim cac tu chua chuoi "Java": ${wordContainJava.join(", ")} `);

// 4. Them phan tu "Dart" vao dau mang va "Kolin" vao cuoi mang
languages.unshift("Dart");
languages.push("Kolin");
console.log(
  `4. Them phan tu "Dart" vao dau mang va "Kolin" vao cuoi mang: `,
  languages
);

// 5. Hop nhat mang ban dau voi mang sau: ["Flutter","Laravel","ExpressJS",".Net"]
const languages2 = ["Flutter", "Laravel", "ExpressJS", ".Net"];
languages = languages.concat(languages2);
console.log(
  `5. Hop nhat mang ban dau voi mang sau: ["Flutter","Laravel","ExpressJS",".Net"]: `,
  languages
);
console.log("=== END PRACTICE ARRAY ===");
