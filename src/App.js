import './App.css';
import Write from "./components/Write";

import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from "react-router-dom";

function App() {
  return (<Router>
    <Routes>
    <Route path="/" element={<Write/>}/>
  </Routes>
  </Router>
  );
}

export default App;
