# js primer ajaxapp

Ajax通信を使った簡易アプリ

- エントリーポイント
  - アプリの最初に呼び出される部分
  - 殆どの場合`index.html`

- JavaScriptのファイル設定
  - 文字コード: UTF-8
  - 改行コード: LF

- DOM
  - Document Object Model
  - HTMLドキュメントのコンテンツ、構造をJavaScriptから操作できる
  - ブラウザのAPI
    - DOMを持たないNode.jsでは使えない
      - `document` オブジェクト等が使えない

- DOMツリー
  - DOMが表現するHTMLタグのツリー構造

- Fetch API
  - JavaScriptからHTTP通信する機能
  - ページの再読み込みしなくてもURLから取得できる
  - `fetch` メソッドで引数のURLにHTTPリクエストを行う

- `encodeURIComponent` 関数
  - URLの特殊文字のエスケープ
  - `/`、`%` 等

- `fetch` メソッド
  - 返り値はPromise
  - Responseオブジェクトでresolve
    - `.then` で通信成功時の処理
    - `.catch` で通信失敗時の処理

- `ok` プロパティ
  - HTTPリクエストの成否を確認できる
  - `Response` オブジェクト
  - `response.ok` で`true/false` を返す
    - 200: `true`
    - 200以外: `false`

- XMLHttpRequest
  - Fetch APIと同じようにHTTP通信を行うAPI
  - 現在はあまり使われていない

- HTMLエスケープ
  - 文字列内の特定の記号を安全な形に置換すること
  - ライブラリを使って行うことが多い

- タグ関数
  - 関数 + テンプレートリテラルで呼び出す
  - `` 関数`文字列` `` 
