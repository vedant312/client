import UsersList from './components/UsersList';
import CreateUser from './components/CreateUser';
import RetriveUser from './components/RetrieveUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UsersList />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/:id' element={<RetriveUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
