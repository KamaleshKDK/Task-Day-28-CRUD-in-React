import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Userlist from './Userlist';
import Userform from './Userform';
import Useredit from './Useredit';
import Productlist from './Productlist';
import Productform from './Productform';
import Productedit from './Productedit';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/user" element={<Userlist />}></Route>
                <Route path="/userform" element={<Userform />}></Route>
                <Route path="/user-edit/:id" element={<Useredit />}></Route>
                <Route path="/product" element={<Productlist />}></Route>
                <Route path="/productform" element={<Productform />}></Route>
                <Route path="/product-edit/:id" element={<Productedit />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
