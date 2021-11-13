import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert, Button, IconButton, Snackbar } from '@mui/material';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [approveSuccess, setApproveSuccess] = useState(false);
  useEffect(() => {
    fetch('https://fathomless-sands-30445.herokuapp.com/orders')
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [orders]);
  const handleApprove = (id) => {
    const updateStatus = { status: 'approved' };
    const orderurl = `https://fathomless-sands-30445.herokuapp.com/orders/${id}`;
    fetch(orderurl, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        setApproveSuccess(data.acknowledged);
        setDeleteSuccess(false);
      });
  };
  const handleDelete = (id) => {
    const orderurl = `https://fathomless-sands-30445.herokuapp.com/orders/${id}`;
    fetch(orderurl, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        setDeleteSuccess(data.acknowledged);
        setApproveSuccess(false);
      });
  };
 

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align='center'>Product ID</TableCell>
            
              <TableCell align='center'>Status</TableCell>
              <TableCell align='center'>Manage</TableCell>
              <TableCell align='center'>DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {order.name}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {order.email}
                </TableCell>

                <TableCell align='center'>{order.productId}</TableCell>
                <TableCell align='center'>{order.status}</TableCell>

                <TableCell align='center'>
                  {order.status === 'pending' ? (
                    <>
                      {' '}
                      {order.status}
                      <Button
                        variant='contained'
                        color='success'
                        onClick={() => handleApprove(order._id)}
                      >
                        Appropve
                      </Button>
                    </>
                  ) : (
                    <Button variant='contained' color='success'>
                      Appropved
                    </Button>
                  )}
                </TableCell>
                <TableCell align='center'>
                  <IconButton aria-label='delete' size='large'>
                    <DeleteIcon
                      onClick={() => {
                        handleDelete(order._id);
                      }}
                      fontSize='inherit'
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar open={deleteSuccess} anchorOrigin={{  vertical: 'bottom', horizontal: 'center' }} autoHideDuration={6000}>
        <Alert severity='error' sx={{ width: '100%' }}>
          Deleted sucessfully
        </Alert>
      </Snackbar>
      <Snackbar open={approveSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center'  }} autoHideDuration={600}>
        <Alert severity='error' sx={{ width: '100%' }}>
          Approved sucessfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default ManageOrder;
