import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export const clientGraphql = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<ApolloProvider client={clientGraphql}>
    	<App />
		</ApolloProvider>
  </React.StrictMode>,
);
