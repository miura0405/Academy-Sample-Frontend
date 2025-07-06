// 配列のデモ: 定義と基本的な操作

console.log("配列デモ開始");

// 1. 配列の定義
let fruits = ["りんご", "バナナ", "みかん"];
console.log("初期の配列:", fruits); // ["りんご", "バナナ", "みかん"]

// 2. 要素へのアクセス (インデックスは0から始まる)
console.log("最初のフルーツ:", fruits[0]); // "りんご"
console.log("2番目のフルーツ:", fruits[1]); // "バナナ"

// 3. 配列の長さを取得
console.log("配列の長さ:", fruits.length); // 3

// 4. 要素の追加 (push): 配列の最後に要素を追加
fruits.push("ぶどう");
console.log("ぶどうを追加後:", fruits); // ["りんご", "バナナ", "みかん", "ぶどう"]

// 5. 要素の削除 (pop): 配列の最後の要素を削除
let removedFruit = fruits.pop();
console.log("削除されたフルーツ:", removedFruit); // "ぶどう"
console.log("ぶどうを削除後:", fruits); // ["りんご", "バナナ", "みかん"]

// 6. 要素の変更
fruits[0] = "いちご";
console.log("りんごをいちごに変更後:", fruits); // ["いちご", "バナナ", "みかん"]

// 存在しないインデックスにアクセスすると undefined
console.log("存在しないインデックス:", fruits[10]); // undefined

console.log("配列デモ終了");
