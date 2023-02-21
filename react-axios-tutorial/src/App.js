import './App.css';
import PersonList from './components/PersonalList';
import PersonAdd from './components/PersonAdd';
import PersonRemove from './components/PersonRemove';

function App() {
  return (
    <div className="App">
      <PersonList />
      <PersonAdd />
      <PersonRemove />
    </div>
  );
}

export default App;
