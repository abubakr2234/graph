import People from './components/People';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import logo from './star.jpg';

const client = new ApolloClient({
  uri : 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider>
    <div className="container">
    <img src={ logo } alt={"starwars"} style={{ width: 300, display: 'block', margin: 'auto'}} />
      <People />
    </div>
    </ApolloProvider>
    
    
    
  );
}

export default App;
