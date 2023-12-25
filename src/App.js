import UsersList from './components/user/UsersList';
import CreateUser from './components/user/CreateUser';
import RetriveUser from './components/user/RetrieveUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/user/EditUser';

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UsersList />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/:id' element={<RetriveUser />} />
          <Route path='/edit/:id' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
