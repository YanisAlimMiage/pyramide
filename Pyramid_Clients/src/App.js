
import './App.css';
import Home from './Pages/Home';
import Cnx from './Pages/Cnx';
import Name from './Pages/Name';
import Navi from './component/nav';
import { Route,BrowserRouter as Router} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css' ;



function App() {
  return (<>
  <div className="App">
    <Router>
     <Navi/>
     <Route path="/" exact component={Home}/>
     <Route path="/cnx" exact component={Cnx}/>
     <Route path="/name" exact component={Name}/>
     </Router>

     <ToastContainer position={toast.POSITION.TOP_CENTER}/>
    </div></>
  );
}

export default App;

