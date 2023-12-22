import UsersList from './components/ReadUsers';
import CreateUser from './components/CreateUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Container fluid>
      <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<UsersList />} />
            <Route path='/create' element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
