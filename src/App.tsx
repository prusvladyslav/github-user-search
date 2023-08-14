import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css'
import { Main } from './screens/Main/Main';
function App() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <div className='container'>
        <Main />
      </div>
    </QueryClientProvider>
  );
}

export default App;
