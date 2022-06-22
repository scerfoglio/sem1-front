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
import TextField from '@mui/material/TextField';

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

const Reactive = ({ image, name }) => (
<MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDAvatar src={image} name={name} size="sm" />
    <MDBox ml={2} lineHeight={1}>
    <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
    </MDTypography>
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
const [searchChain, setSearchChain] = React.useState("");


useEffect(() => {
    loadTable();
    //loadReactivos();
    getReactivos();
}, []);

function loadTable(){
    setTableColumns(["Nombre", "Disponibilidad", "Proyecto", "Acciones"]);
}
function getReactivos() {
    fetch("https://conicet-connect.herokuapp.com/api/insumo").then(response => response.json()).then(data => {
        console.log(data); 


        let aux = [];
        let proy = "";

        for(let i of data.insumos){
            for(let i2 of i.proyectos){
                aux.push({
                    nombre: i.nombre,
                    disponibilidad: i2.cantidad,
                    unidad: i.unidad,
                    proyecto: i2.nombre,
                    idProyecto: i2._id,
                    idReactivo: i._id
                })
            }
        }

        setTableRows(aux);
        setReactivos(aux);

    })
}

function searchReactivos(){
    let aux = [];
    for(let i of reactivos){
        if(i.nombre.toLowerCase().includes(searchChain.toLowerCase())){
            aux.push(i)
        }
    }

    setTableRows(aux);
}

const handleSearch = (event) => {
    setSearchChain(event.target.value);
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
                    <TextField variant="outlined" style={{background: "white"}} fullWidth onChange={handleSearch} />
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
                                <td className='mt-2'>{<Reactive image={appleIcon} name={r.nombre} composition="Líquido" />}</td>
                                <td style={{textAlign: "center"}}>{<Availability qty={`${r.disponibilidad} ${r.unidad}`} />}</td>
                                <td style={{textAlign: "center"}}>{<Availability qty={r.proyecto} />}</td>
                                <td className='mt-2'>{<Link to="/chat"><MDTypography variant="caption" color="text" fontWeight="medium">Contactar</MDTypography></Link>}</td>
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
