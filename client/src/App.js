import Header from "./components/Header.component";
import AddClientModale from "./components/AddClientModale";
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import Clients from "./components/Clients.component";
import Projects from "./components/Projects.component";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache
});


function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Header />
    <div className="container">
      <Projects/>
      <AddClientModale />
      <Clients/>
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
