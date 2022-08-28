import Logo from './components/Logo';
import './App.css';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="tasks-app">
      <Logo />
      <div className='tasks-main-list'>
        <h1>My Tasks</h1>
        <TaskForm/>
      </div>
    </div>
  );
}

export default App;
 