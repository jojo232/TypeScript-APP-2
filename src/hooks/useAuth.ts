import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできません", status: "error" });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};

          
-------------------------------------------------------------------------------------------------------------------------------------
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  // フックを使って現在のブラウザ履歴を取得している
  const { showMessage } = useMessage();
  // フックを使ってメッセージ表示機能を実装している
  const { setLoginUser } = useLoginUser();
  // フックを使ってログインユーザー情報を取得している

  const [loading, setLoading] = useState(false);
  // useState フックは、Reactコンポーネント内で状態を管理するために使用されます。
  // 引数に初期値を渡すことができ、戻り値として現在の状態と、その状態を更新する関数が得られます。
  // このコードでは、loading の初期値を false に設定し、setLoading 関数を後で利用するために宣言しています。
  // setLoading 関数を呼び出すことで、loading の値を変更することができます。

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      // このコードは、login という関数を宣言しています。この関数は、引数として id という文字列型の変数を受け取り、
      // setLoading 関数を呼び出して loading 状態を true に変更します。

      // useCallback フックは、関数のメモ化を行うために使用されます。
      // これにより、React のパフォーマンスを向上させることができます。
      // useCallback フックを使用することで、同じ関数オブジェクトを複数回作成するのではなく、
      // 同じオブジェクトを再利用することができます。

      //このコードでは、login 関数を useCallback フックでメモ化しています。
      // それにより、親コンポーネントが再レンダリングされた際にも同じオブジェクトを使用することができます。
      // login 関数は、渡された id を使用してログイン処理を行うために、この後に続くコードで実装されることが期待されます。

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできません", status: "error" });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};

// このコードは、login 関数の残りの部分を実装しています。
// axios ライブラリを使用して、渡された id に対応するユーザー情報を取得し、その結果を .then() メソッドで扱っています。
// もしデータが存在した場合は、そのデータを setLoginUser 関数を使ってステートにセットし、showMessage 関数を呼び出すことでログイン成功のメッセージを表示します。
// そして、history.push("/home") を呼び出して、ホーム画面に遷移します。
// もしデータが存在しなかった場合は、showMessage 関数を呼び出して、ユーザーが見つからなかった旨のエラーメッセージを表示し、setLoading(false)
// を呼び出して読み込み中状態を解除します。
// もし API の呼び出しに失敗した場合は、.catch() メソッドでエラー処理を行います。ここでは、showMessage
// 関数を呼び出してログインできなかった旨のエラーメッセージを表示し、setLoading(false) を呼び出して読み込み中状態を解除します。
// そして、最後にオブジェクトを返しています。このオブジェクトには、login 関数と loading ステートが含まれています。
// これらを使用することで、親コンポーネントからログイン処理を呼び出すことができます。
