import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './assets/image/Home';
import Header from './components/Header';
import TableUsers from './components/TableUser';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';

function App() {

  return (
    <>
      <div className='app-container'>

        <Container>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<TableUsers />} />
          </Routes>
        </Container>

      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>

  );
}

export default App;
