// クラス定義
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `こんにちは、${this.name}さん（${this.age}歳）`;
  }
}

// インスタンス生成
const user1 = new User("太郎", 25);
const user2 = new User("花子", 30);

// メソッド呼び出し
console.log("1. user1.name:", user1.name);
console.log("2. user1.age:", user1.age);
console.log("3. user1.greet():", user1.greet());

console.log("4. user2.name:", user2.name);
console.log("5. user2.age:", user2.age);
console.log("6. user2.greet():", user2.greet());
