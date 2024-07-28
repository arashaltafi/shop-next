"use client";

import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";
import client from "./ApolloClient";

const ApolloWrapper = (
  { children }: React.PropsWithChildren
) => {
  return (
    <ApolloNextAppProvider makeClient={client}>
      {children}
    </ApolloNextAppProvider>
  );
}

export default ApolloWrapper