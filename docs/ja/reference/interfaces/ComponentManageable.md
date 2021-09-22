# [ComponentManageable](https://github.com/qratch/qratch/blob/master/src/ComponentManager/ComponentManageable.ts)

`ComponentManageable` は [`Component`](Component.md) を管理するインターフェースです。

## メソッド

### `install(component: Component): void`

引数で渡された `component` を `ComponentManageable` の管理下に追加し、 `component` の `onInstall` を呼び出します。

### `call<T extends keyof Component>(method: T): void`

`ComponentManageable` の管理下にあるすべてのコンポーネントに対し、引数 `method` で指定された関数を呼び出します。
