/* eslint-disabled react-hooks/exhaustive-deps */

import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getUsers, loading, users };
};

    
---------------------------------------------------------------------------------------------------------
    
    /* eslint-disabled react-hooks/exhaustive-deps */

import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState<boolean>(false);
  // boolean 型は true と false の2つの値を持ちます。
  // loading というステート変数を false で初期化しています。loading ステートは、通常非同期操作などの処理の進行状態を管理するために使用されます。
  // setLoading 関数を呼び出すことで、loading ステートを更新することができます。例えば、非同期操作が開始された場合に setLoading(true) を呼び出して loading ステートを true に設定し、処理が完了した後に setLoading(false) を呼び出して loading ステートを false に戻すことができます。
  const [users, setUsers] = useState<Array<User>>([]);
  // useState<Array<User>>([]) では、ステートの初期値として空の配列 [] を指定しています。Array<User> は、User 型の要素を持つ配列であることを示しています。
  // このように型を指定することで、users ステートが配列であることと、その要素が User 型であることを明示しています。
  // ここで user1、user2、user3 は User 型の要素です。このようにして、users ステートを新しい値で更新することができます。

  const getUsers = useCallback(() => {
    // useCallback フックは、関数のメモ化を行い、依存関係の変化がない限り同じ関数インスタンスを再利用します。
    // これにより、コンポーネントの再レンダリング時に不要な関数の再生成を防ぎ、パフォーマンスの向上を図ることができます。
    // useCallback フックは、第一引数にコールバック関数を受け取り、第二引数に依存関係の配列を指定します。依存関係の配列には、コールバック関数内で参照される変数やプロパティを含めることができます。この配列の中のいずれかの値が変化した場合にのみ、新しいコールバック関数が生成されます。
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      // 具体的には、axios.get()メソッドを使用して、指定されたURL "https://jsonplaceholder.typicode.com/users" に対してGETリクエストを送信しています
      // <Array<User>>はレスポンスのデータ型を指定しており、この場合はユーザーの配列を受けることを期待しています。

      .then((res) => setUsers(res.data))
      // 具体的には、axiosのGETリクエストが成功した後、.then()メソッドのコールバック関数が呼び出されます。このコールバック関数の引数resは、レスポンスオブジェクトです。res.dataは、レスポンスデータを取得するためのプロパティです。
      // setUsers(res.data)は、取得したユーザーデータをusersステートに設定するための関数です。ここで、res.dataはユーザーデータの配列を表しています。setUsers(res.data)を呼び出すことで、usersステートが取得したユーザーデータで更新されます。
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
        // つまり、データ取得の処理が完了した後、成功または失敗に関係なくloadingステートを元の状態に戻すことができます。
        // .finally()は、Promiseの最後に実行されるコールバック関数を定義するメソッドです。このメソッドは、Promiseの成功または失敗に関係なく必ず実行されます。
        // 上記のコードでは、axiosでのデータ取得が成功または失敗した後に、.finally()メソッドを使用してsetLoading(false)を実行しています。これにより、loadingステートがfalseに設定されます。
      });
  }, []);

  return { getUsers, loading, users };
  // useAllUsersフックは、getUsers関数、loadingステート、usersステートを返します。
  // getUsersは、ユーザーデータを取得するための関数です。この関数を実行することで、HTTPリクエストが行われ、ユーザーデータが取得されます。
  // loadingは、ユーザーデータの取得中かどうかを示すブール値です。trueの場合はローディング中、falseの場合は取得完了またはエラー状態を示します。
  // usersは、取得したユーザーデータの配列です。取得が成功した場合は、この配列にユーザーデータが格納されます。初期値は空の配列[]です。
  // これらの要素を含むオブジェクトが、useAllUsersフックから返されます。コンポーネント内でこのフックを使用すると、getUsers関数、loadingステート、usersステートにアクセスできます。
};
// このコードは、ユーザー情報を取得するためのカスタムフック useAllUsers を定義しています。以下の主な機能を持っています
// loading ブール値のステート: ユーザー情報を取得中かどうかを示すためのフラグです。
// users ユーザー情報の配列ステート: 取得したユーザー情報を格納するための配列です。
// getUsers 関数: ユーザー情報を取得するための関数です。この関数を呼び出すと、loading ステートが true に設定され、API からユーザー情報を取得し、users ステートに格納します。
// API からの取得が成功した場合は、取得したデータを users ステートにセットします。取得が失敗した場合はエラーメッセージを表示します。いずれの場合も最終的に loading ステートを false に戻します。
// また、axios ライブラリを使用して API リクエストを行っています。axios.get メソッドを使用して、指定された URL (https://jsonplaceholder.typicode.com/users) からユーザー情報を取得しています。
// 取得したデータはレスポンスの data プロパティに含まれており、そのデータを setUsers 関数を使って users ステートにセットしています。
// エラーが発生した場合、catch ブロックが実行され、showMessage 関数を使用してエラーメッセージを表示しています。
// useAllUsers フックは、getUsers 関数と loading ステート、users ステートを返します。これにより、コンポーネント内でユーザー情報の取得や状態管理を容易にすることができます。
