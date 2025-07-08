// オブジェクトのデモ: 基本的な定義と操作

console.log("オブジェクトでデータ管理");

// 1.オブジェクトの定義
// データ（プロパティ）をまとめる
let book = {
  title: "オブジェクト入門",
  author: "山田 太郎",
  pages: 300,

  // 2. オブジェクトのメソッドの定義
  // 情報を表示するメソッド
  displayBookInfo: function() {
    console.log("タイトル:", this.title);
    console.log("著者:", this.author);
    console.log("ページ数:", this.pages + "ページ");
  }
};

// 3. オブジェクトのプロパティへのアクセス
console.log("書籍のタイトル:", book.title);

// 4. オブジェクトのプロパティの変更
book.pages = 400;
console.log("ページ数変更後:", book.pages + "ページ");

// 5. オブジェクトのメソッドの利用
book.displayBookInfo();
