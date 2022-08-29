import Logo from './components/Logo';
import './App.css';
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="tasks-app">
      <Logo />
      <div className='tasks-main-list'>
        <h1>My Tasks</h1>
          <TaskList/>

      </div>
    </div>
  );
}

export default App;
 