"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <NextUIProvider>
      <Toaster richColors position="bottom-right" />
      {children}
    </NextUIProvider>
  );
};

export default Providers;
