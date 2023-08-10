import './App.css'
import { GitHubProfile, GitHubSearch } from './components';
function App() {

  return (
    <div className='container'>
      <GitHubSearch />
      <GitHubProfile />
    </div>
  );
}

export default App;
