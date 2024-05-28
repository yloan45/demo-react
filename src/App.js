import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import ModalAddNew from './components/ModalAddNew';
import TableUsers from './components/TableUser';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const handleClose = () => {
    setIsShowModalAddNew(false);
  }
  return (
    <>
      <div className='app-container'>

        <Container>
          <Header />
          <div className='my-3 add-new'>
            <span>
              <b> List Users:</b>
            </span>
            <button className='btn btn-success'
              onClick={() => setIsShowModalAddNew(true)}>New User</button>
          </div>
          <TableUsers />
        </Container>
        <ModalAddNew
          show={isShowModalAddNew}
          handleClose={handleClose}
        />
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
