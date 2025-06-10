// let: 値変更可、ブロック内のみ有効
let a = 1;
a = 2; // 値変更可能
console.log("let:", a); // 2

if (true) {
  let b = 3;
  console.log("let (ブロック内):", b); // 3
}
// console.log("let (ブロック外):", b); // エラー


// const: 値変更不可能、ブロック内のみ有効
const c = 4;
// c = 5; // 値変更不可 エラー (コメント解除するとエラー)
console.log("const:", c); // 4

if (true) {
  const d = 6;
  console.log("const (ブロック内):", d); // 6
}
// console.log("const (ブロック外):", d); // エラー


// var: 値変更可能、ブロックを無視 (非推奨)
var e = 7;
// e = 8; // 値変更可能
console.log("var:", e); // 8

if (true) {
  var f = 9;
  console.log("var (ブロック内):", f); // 9
}
console.log("var (ブロック外):", f); // ブロック外からもアクセスできる