import './App.css';
import Write from "./components/Write";
import Main from "./components/Main";

import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from "react-router-dom";

function App() {
  return (<Router>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/write" element={<Write/>}/>
  </Routes>
  </Router>
  );
}

export default App;
