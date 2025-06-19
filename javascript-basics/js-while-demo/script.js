let sum = 0; // 現在の合計値

console.log("開始");

// sum が10未満の間、ループを続ける
while (sum < 10) {
  // ユーザーに数字の入力を求める
  let input = prompt("合計が10になるまで数字を入力してください (現在の合計: " + sum + ")");

  sum += parseInt(input); // 数字を合計します

  console.log("入力された数字:", parseInt(input)); // 入力された数字
  console.log("合計の数字:", sum); // 合計の数字
}

console.log("10以上です。終了します。");