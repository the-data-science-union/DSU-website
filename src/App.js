import './App.css';
import Homepage from './Pages/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage';
import JoinUsPage from './Pages/JoinUsPage';
import TeamPage from './Pages/TeamPage';
import ProjectsPage from './Pages/ProjectsPage';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/AboutUs' element={<AboutUsPage />} />
        <Route exact path='/JoinUs' element={<JoinUsPage />} />
        <Route exact path='/TheTeam' element={<TeamPage />} />
        <Route exact path='/Projects' element={<ProjectsPage />} />
    </Routes>
    </Router>
  );
}

export default App;
