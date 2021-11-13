import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../component/hook/useAuth';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const MyOrder = () => {
  const { user } = useAuth();
  const [userOrder, setUserOrder] = useState([]);
  const orderUrl = `https://fathomless-sands-30445.herokuapp.com/orders/${user.email}`;
  useEffect(() => {
    fetch(orderUrl)
      .then((res) => res.json())
      .then((data) => setUserOrder(data));
  }, [userOrder]);
  const handleDelete = (id) => {
    const orderurl = `https://fathomless-sands-30445.herokuapp.com/orders/${id}`;
    fetch(orderurl, {
      method: 'DELETE',
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
              <TableCell align='center'>Product Id</TableCell>
            
              <TableCell align='center'>Status</TableCell>
              <TableCell align='center'>Approve/Pending</TableCell>
              <TableCell align='center'>Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userOrder.map((order) => (
              <TableRow
                key={order._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {order.name}
                </TableCell>
                
                <TableCell align='center'>{order.productId}</TableCell>
            
                <TableCell align='center'>{order.status}</TableCell>
                <TableCell align='center'>
                  {order.status !== 'pending' ? (
                    <Button variant='contained' color='success'>
                      Appropved
                    </Button>
                  ) : (
                    <Button variant='outlined' color='error'>
                      Pending
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
    </>
  );
};

export default MyOrder;
