import './App.css';
// import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
// import Overview from './pages/Overview';
// import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
// import Team from './pages/Team';

function App() {
  return (
    <Sidebar/>
  );
}

export default App;