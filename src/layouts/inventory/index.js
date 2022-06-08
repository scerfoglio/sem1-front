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

import React, {useEffect} from 'react';

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

import {Container, Row, Dropdown, DropdownButton, Badge} from "react-bootstrap";

import appleIcon from "assets/images/bacteria.png";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';
import MDAvatar from "components/MDAvatar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/inventory/data/authorsTableData";

//Buscador
import UnstyledInputBasic from "./buscador";
import { set } from 'date-fns';


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

const Reactive = ({ image, name, composition }) => (
<MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDAvatar src={image} name={name} size="sm" />
    <MDBox ml={2} lineHeight={1}>
    <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
    </MDTypography>
    <MDTypography variant="caption">{composition}</MDTypography>
    </MDBox>
</MDBox>
);

const Availability = ({ qty }) => (
<MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
    {qty}
    </MDTypography>
</MDBox>
);
const { columns, rows } = authorsTableData();
const [tableColumns,setTableColumns] = React.useState([]);
const [tableRows,setTableRows] = React.useState([]);
const [open, setOpen] = React.useState((false));
const [reactivos, setReactivos] = React.useState([]);



useEffect(() => {
    loadTable();
    loadReactivos();
}, []);

function loadTable(){
setTableColumns(["Nombre", "Disponibilidad", "Acciones"]);
}
function getReactivos() {
fetch("http://localhost:4000/api/inventarios").then(response => response.json()).then(data => {console.log(data); setReactivos(data);})
}

function searchReactivos(){
    setTableRows([{
        author: <Reactive image={appleIcon} name="Dicamba" composition="Líquido" />,
        availability: <Availability qty="100mg" />,
        action: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Editar
            </MDTypography>
        ),
        }])
}

async function loadReactivos(){
setTableRows([
    {
    author: <Reactive image={appleIcon} name="Astaxantina" composition="Líquido" />,
    availability: <Availability qty="100mg" />,
    action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Editar
        </MDTypography>
    ),
    },
    {
    author: <Reactive image={appleIcon} name="Fucoxantina" composition="Líquido" />,
    availability: <Availability qty="100mg" />,
    action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Editar
        </MDTypography>
    ),
    },
    {
    author: <Reactive image={appleIcon} name="Fucoxantinol" composition="Líquido" />,
    availability: <Availability qty="100mg" />,
    action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Editar
        </MDTypography>
    ),
    },
    {
    author: <Reactive image={appleIcon} name="rBC2LCN" composition="Líquido" />,
    availability: <Availability qty="100mg" />,
    action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Editar
        </MDTypography>
    ),
    },
    {
    author: <Reactive image={appleIcon} name="Dicamba" composition="Líquido" />,
    availability: <Availability qty="100mg" />,
    action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Editar
        </MDTypography>
    ),
    },
    {
    author: <Reactive image={appleIcon} name="Sericina" composition="Líquido" />,
    availability: <Availability qty="100mg" />,
    action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Editar
        </MDTypography>
    ),
    },
    {
    author: <Reactive image={appleIcon} name="Biotina BTL-104 Phos-tag™" composition="Líquido" />,
    availability: <Availability qty="100mg" />,
    action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Editar
        </MDTypography>
    ),
    },
])

}

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
                <Button variant="contained" color="success" onClick={searchReactivos} >
                    Buscar Reactivo
                </Button>
                <MDBox pr={1}>
                        <UnstyledInputBasic/>
                </MDBox>
            </Stack>
            </MDBox>
            <table striped hover className="w-100 m-4">
                    <thead className='w-100'>
                        {tableColumns.map((c, i) => (
                            <th key={i} className=''>{c}</th>
                        ))}
                    </thead>
                    <tbody>
                        {tableRows.map((r, i) => (
                            <tr className='mt-2' key={i} >
                                <td className='mt-2'>{r.author}</td>
                                <td style={{textAlign: "center"}}>{r.availability}</td>
                                <td className='mt-2'>{r.action}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </Card>
        </Grid>
    </Grid>
    </MDBox>
</DashboardLayout>
);
}

export default Users;
