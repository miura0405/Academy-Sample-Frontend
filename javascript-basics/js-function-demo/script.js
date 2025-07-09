// ① 関数定義（引数あり 戻り値あり）
function add(a, b) {
  return a + b;
}

// ② アロー関数定義（①同じ処理）
const multiply = (a, b) => {
  return a * b;
};

// ③ 引数（引数nameを使用）
function greet(name) {
  return `こんにちは、${name}さん`;
}

// ④ 戻り値（複数の処理結果をまとめて返す）
function summary(a, b) {
  const sum = add(a, b);
  const product = multiply(a, b);
  return `合計: ${sum}, 掛け算: ${product}`;
}

// 呼び出しと結果表示
console.log("1. add(2, 3):", add(2, 3)); // ①
console.log("2. multiply(4, 5):", multiply(4, 5)); // ②
console.log("3. greet('太郎'):", greet("太郎")); // ③
console.log("4. summary(3, 7):", summary(3, 7)); // ④
