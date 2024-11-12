import React, { useEffect } from "react";
import NavBar from "../components/menus/navbar";
import {
  Box,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Snackbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MuiAlert from "@mui/material/Alert";

import Edit from "../images/pencil.svg";
import Delete from "../images/trash.svg";
import DefaultButton from "../components/buttons/defaultButton";
import TooltipComponent from "../components/Tooltips/tooltipComponent";
import { useGlobalContext } from "../context/useGlobalContext";
import { observer } from "mobx-react";

const ProductList = observer(() => {
  const { productStore } = useGlobalContext();
  useEffect(() => {
    if (productStore.productList.length === 0) {
      productStore.getListProductsStore();
    }
  }, [productStore]);

  return (
    <div>
      <NavBar />
      <Box className="conatiner-product-mg">
        <h4>
          <span> Product List</span>
        </h4>
        <Box className="top-bottom-container">
          <div className="search-bar">
            <TextField
              variant="outlined"
              placeholder={"Search Product"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </div>
          <div className="button-add-product">
            <DefaultButton text={"Add Product"} onClick={() => console.log()} />
          </div>
        </Box>
        <Box>
          <TableContainer className="holder">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Category</TableCell>
                  <TableCell align="left">CreatedBy</TableCell>
                  <TableCell align="right">UpdatedBy</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table-mg ">
                {productStore.productList.length !== 0 &&
                  productStore.productList.map((product, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell scope="row">
                        <TooltipComponent
                          tooltipText={product.description}
                          child={<p>{product.name}</p>}
                        ></TooltipComponent>
                      </TableCell>
                      <TableCell align="left">
                        <p>{product.category}</p>
                      </TableCell>

                      <TableCell align="left">
                        <p>{product.updatedBy}</p>
                      </TableCell>
                      <TableCell align="left">
                        <p>{product.updatedBy}</p>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton size="large" className="button-action-mg">
                          <img src={Edit} width={15} height={15} alt="Edit" />
                        </IconButton>
                        <IconButton size="large" className="button-action-mg">
                          <img
                            src={Delete}
                            width={15}
                            height={15}
                            alt="Delete"
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                {productStore.productList.length === 0 && (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell scope="row"></TableCell>
                    <TableCell scope="row"></TableCell>
                    <TableCell scope="row">No Data</TableCell>
                    <TableCell scope="row"></TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Snackbar
        open={productStore.error ? true : false}
        autoHideDuration={6000}
        //   onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          // onClose={handleCloseSnackbar}
          severity="error"
        >
          {productStore.error}
        </MuiAlert>
      </Snackbar>
    </div>
  );
});

export default ProductList;
