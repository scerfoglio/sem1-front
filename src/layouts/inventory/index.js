/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* eslint-disable */

import * as React from 'react';

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/inventory/data/authorsTableData";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Users() {
  const { columns, rows } = authorsTableData();
  const [open, setOpen] = React.useState((false));
  const handleOpen = () => setOpen(true);
  const handleClose =() => setOpen(false);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={30}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <Stack direction="row" spacing={2}>
                    <MDTypography variant="h6" color="white">
                        Inventario
                    </MDTypography>
                </Stack>
                <Stack direction="row-reverse" spacing={2}>
                    <Button variant="contained" color="success" onClick={handleOpen}>
                        Nuevo Reactivo
                    </Button>
                    <Modal open={open} onClose={handleClose}>
                        <Box sx={style}>
                            <Card>
                                <MDBox
                                    variant="gradient"
                                    bgColor="info"
                                    borderRadius="lg"
                                    coloredShadow="success"
                                    mx={2}
                                    mt={-3}
                                    p={3}
                                    mb={1}
                                    textAlign="center"
                                >
                                    <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                                        Nuevo Reactivo
                                    </MDTypography>
                                </MDBox>
                                <MDBox pt={4} pb={3} px={3}>
                                    <MDBox component="form" role="form">
                                        <MDBox mb={2}>
                                            <MDInput type="text" label="Nombre" variant="standard" fullWidth />
                                        </MDBox>
                                        <MDBox mb={2}>
                                            <MDInput type="text" label="Estado" variant="standard" fullWidth />
                                        </MDBox>
                                        <MDBox mb={2}>
                                            <MDInput type="text" label="Cantidad" variant="standard" fullWidth />
                                        </MDBox>
                                        <MDBox mb={2}>
                                            <MDInput type="text" label="Unidad de medida" variant="standard" fullWidth />
                                        </MDBox>
                                        <MDBox mt={4} mb={1}>
                                            <MDButton variant="gradient" color="info" fullWidth>
                                                Cargar reactivo
                                            </MDButton>
                                        </MDBox>
                                    </MDBox>
                                </MDBox>
                            </Card>
                        </Box>
                    </Modal>
                </Stack>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Users;
