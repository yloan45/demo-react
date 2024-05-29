import './App.scss';
import Home from './assets/image/Home';
import Header from './components/Header';
import TableUsers from './components/TableUser';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <div className='app-container'>

        <Container>
          <Header />
          <Home/>
          <TableUsers/>
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
