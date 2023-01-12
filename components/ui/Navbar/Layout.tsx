import { FC, PropsWithChildren } from "react";
import { Box } from "./Box";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
  </Box>
);
