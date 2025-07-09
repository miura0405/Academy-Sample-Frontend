// undefined（値が決まってない）
let a; // 宣言のみで未定義
console.log("1. let a; の値:", a);
console.log("2. typeof a:", typeof a);

const obj = {};
console.log("3. 存在しないプロパティ obj.value:", obj.value);

// null（明示的に空）
let b = null; 
console.log("1. 明示的に null を代入した変数:", b);
console.log("2. typeof b:", typeof b);

const notFound = document.getElementById("not-exist");
console.log("3. DOM取得（存在しない要素)", notFound);
