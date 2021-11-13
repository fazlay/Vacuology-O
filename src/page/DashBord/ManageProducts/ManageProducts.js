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

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fathomless-sands-30445.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  const handleDelete = (id) => {
    const producturl = `https://fathomless-sands-30445.herokuapp.com/products/${id}`;
    fetch(producturl, {
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
              <TableCell>Product Name</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Product ID</TableCell>
              <TableCell align='center'>Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {product.name.slice(0,20)}
                </TableCell>

                <TableCell align='center'>{product.price}</TableCell>
                <TableCell align='center'>{product._id}</TableCell>

              
                <TableCell align='center'>
                  <IconButton aria-label='delete' size='large'>
                    <DeleteIcon
                      onClick={() => {
                        handleDelete(product._id);
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

export default ManageProducts;
