import { HttpLink, ApolloLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from "@apollo/experimental-nextjs-app-support";

const client = () => {
    const httpLink = new HttpLink({
        uri: 'http://localhost:3000/api/graphql',
        fetchOptions: { cache: "no-store" },
    });

    const authLink = new ApolloLink((operation, forward) => {
        operation.setContext({
            headers: {
                authorization: 'Bearer your-auth-token',
                theme: 'dark',
                token: 'arash123'
            }
        });

        return forward(operation);
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
}

export default client;