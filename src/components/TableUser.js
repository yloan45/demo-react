import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser, deleteUser, editUser } from '../services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';
import { toast } from 'react-toastify';

const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const [isShowModalEditUser, setIsShowModalEditUser] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleCloseAddNew = () => {
        setIsShowModalAddNew(false);
    };

    const handleCloseEditUser = () => {
        setIsShowModalEditUser(false);
        setSelectedUser(null);
    };

    useEffect(() => {
        getUsers(1);
    }, []);

    const getUsers = async (page) => {
        try {
            const res = await fetchAllUser(page);
            if (res && res.data) {
                setListUsers(res.data);
                setTotalPages(res.total_pages);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handlePageClick = (selectedPage) => {
        getUsers(selectedPage.selected + 1);
    };

    const handleUpdateTable = (user) => {
        setListUsers([user, ...listUsers]);
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteUser(id);
            setListUsers(listUsers.filter(user => user.id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleEditUser = async (updatedUser) => {
        if (!selectedUser) return;
        try {
            const res = await editUser(selectedUser.id, updatedUser);
            const updatedList = listUsers.map(user =>
                user.id === selectedUser.id ? { ...user, ...updatedUser } : user
            );
            setListUsers(updatedList);
            toast.success('User updated successfully!');
            handleCloseEditUser();
        } catch (error) {
            console.error('Error editing user:', error);
            toast.error('Failed to update user.');
        }
    };

    return (
        <>
            <div className='my-3 add-new'>
                <span>
                    <b>List Users:</b>
                </span>
                <button className='btn btn-success'
                    onClick={() => setIsShowModalAddNew(true)}>New User</button>
            </div>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => (
                        <tr key={`users-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>
                                <button className='btn btn-warning mx-3' onClick={() => { setSelectedUser(item); setIsShowModalEditUser(true); }}>Edit</button>
                                <button className='btn btn-danger' onClick={() => handleDeleteUser(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />

            <ModalAddNew
                show={isShowModalAddNew}
                handleClose={handleCloseAddNew}
                handleUpdateTable={handleUpdateTable}
            />

            <ModalEditUser
                show={isShowModalEditUser}
                handleClose={handleCloseEditUser}
                userData={selectedUser}
                handleEditUser={handleEditUser}
            />
        </>
    );
};

export default TableUsers;
