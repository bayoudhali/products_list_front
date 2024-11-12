import React from "react";
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
  Paper,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Edit from "../images/pencil.svg";
import Delete from "../images/trash.svg";
import DefaultButton from "../components/buttons/defaultButton";
import TooltipComponent from "../components/Tooltips/tooltipComponent";

function ProductList() {
  return (
    <div>
      <NavBar />
      <Box className="conatiner-team-mg">
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
          <div className="button-invitation">
            <DefaultButton text={"Add Product"} onClick={() => console.log()} />
          </div>
        </Box>
        <Box>
          <TableContainer component={Paper} className="table-mg">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Category</TableCell>
                  <TableCell align="left">CreatedBy</TableCell>
                  <TableCell align="right">UpdatedBy</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  //   key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell scope="row">
                    <TooltipComponent
                      tooltipText={"This a description"}
                      child={<p>EFE</p>}
                    ></TooltipComponent>
                  </TableCell>
                  <TableCell align="left">
                    <p>eff</p>
                  </TableCell>

                  <TableCell align="left">
                    <p>eff</p>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="large" className="button-action-mg">
                      <img src={Edit} width={15} height={15} alt="Edit" />
                    </IconButton>
                    <IconButton size="large" className="button-action-mg">
                      <img src={Delete} width={15} height={15} alt="Delete" />
                    </IconButton>
                  </TableCell>
                </TableRow>

                {/* <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell scope="row"></TableCell>
                <TableCell scope="row"></TableCell>
                TableCell scope="row">No data</TableCell>
                <TableCell scope="row"></TableCell>
              </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}

export default ProductList;
