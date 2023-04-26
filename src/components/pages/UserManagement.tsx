import { Wrap, WrapItem, Box } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap>
      <WrapItem>
        <Box w="260px" h="260px" bg="white"></Box>
      </WrapItem>
    </Wrap>
  );
});
