import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Project from './page/Project_page';
import Disboard1 from './page/Disboard';
import Resume from './page/Resume'
import Contect from './page/Contect'
import Moreproject from './page/more_project'
import Moreproject2 from './page/more2_project'
// Main App component with routing logic
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Project" element={<Project />} /> 
        <Route path="/Disboard" element={<Disboard1 />} /> 
        <Route path="/Resume" element={<Resume />} /> 
        <Route path="/Contect" element={<Contect />} /> 
        <Route path="/Moreproject" element={<Moreproject />} /> 
        <Route path="/Moreproject2" element={<Moreproject2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;