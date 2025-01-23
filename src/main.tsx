import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL_GRAPHQL,
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
)
