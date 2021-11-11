import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleApprove = (id) => {
    const updateStatus = { status: 'approved' };
    const orderurl = `http://localhost:5000/orders/${id}`;
    fetch(orderurl, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updateStatus),
    });
  };
  const handleDelete = (id) => {
    const orderurl = `http://localhost:5000/orders/${id}`;
    fetch(orderurl, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Product Name</TableCell>
              <TableCell align='right'>Price</TableCell>
              <TableCell align='right'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {order.email}
                </TableCell>

                <TableCell align='right'>{order.productId}</TableCell>
                <TableCell align='right'>{order.status}</TableCell>

                <TableCell align='right'>
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
                <TableCell align='right'>
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
    </>
  );
};

export default ManageOrder;
