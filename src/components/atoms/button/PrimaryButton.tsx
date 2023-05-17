import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});

-------------------------------------------------
  
  memo 関数は、コンポーネントをメモ化して再レンダリングのパフォーマンスを最適化するために使用されます。
ReactNode 型は、React コンポーネントの子要素として許容される要素の型を表します。
VFC (View Function Component) は、React の関数コンポーネントの型です。
Button は Chakra UI ライブラリからインポートされたコンポーネントです。
Props 型は、PrimaryButton コンポーネントが受け取ることができるプロパティを指定します。children は任意の ReactNode 型の子要素であり、disabled と loading はオプションのブール型のプロパティです。onClick は戻り値を返さない関数として指定されています。

PrimaryButton コンポーネントは、Button コンポーネントをラップしています。渡されたプロパティを適用し、children を表示します。disabled や loading の値に応じて、ボタンの状態を制御します。

このコンポーネントは、VFC<Props> として定義されており、Props 型を持つプロパティを受け取ることができます。また、memo 関数によってメモ化されています。これにより、プロパティが変更されない限り再レンダリングが行われません。
