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
import Divider from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Accordion from '@mui/material/Accordion';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';
import iconBulb from "assets/images/small-logos/icon-bulb.svg";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import projectsTableData from "layouts/projects/data/projectsTableData";
import { AccordionDetails, AccordionSummary } from '@mui/material';

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

  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const areas = [
    {
      value: 'Biología Molecular'
    },
    {
      value: 'Inmunología'
    },
    {
      value: 'Inmunofluorescencia'
    },
    {
      value: 'Genética'
    },
    {
      value: 'Histocompatibilidad'
    },
    {
      value: 'Oncología'
    },
  ];

function Projects() {
  const [proyectos, setProyectos] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [nombreProyecto, setNombreProyecto] = React.useState("");
  const [campoDeAccion, setCampoDeAccion] = React.useState("");
  const [area, setArea] = React.useState("Biología Molecular");
  const [presupuesto, setPresupuesto] = React.useState("");
  const [fechaInicio, setFechaInicio] = React.useState(null);
  const [fechaFin, setFechaFin] = React.useState(null);
  const [descripcion, setDescripcion] = React.useState("");
  const [emailInput, setEmailInput] = React.useState("");
  const [emails, setEmails] = React.useState([
    { key: 0, email: 'test1@mail.com' },
    { key: 1, email: 'test2@mail.com' },
    { key: 2, email: 'test3@mail.com' },
    { key: 3, email: 'test4@mail.com' },
    { key: 4, email: 'test5@mail.com' },
  ]);
  const handleOpen = () => setOpen(true);
  const handleClose =() => setOpen(false);

  function getProyectos() {
    fetch("http://localhost:4000/api/proyecto").then(response => response.json()).then(data => {console.log(data); setProyectos(data);})
    }

  React.useEffect(() => {
    getProyectos()
    }, [])


  const handleNombreProyecto = (event) => {
      setNombreProyecto(event.target.value);
  }

  const handleCampoDeAccion = (event) => {
    setCampoDeAccion(event.target.value);
}

  const handleArea = (event) => {
    setArea(event.target.value);
  }

  const handlePresupuesto = (event) => {
    setPresupuesto(event.target.value);
  }

  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
  }

  const handleEmailInput = (event) => {
    setEmailInput(event.target.value);
  }

  const handleEmailCreate = (event) => {
    if (event.key === "Enter") {
        let lastKey = emails.length > 0 ? emails[emails.length - 1].key + 1 : 1;
        let email = {key: lastKey, email: emailInput}
        setEmails(emails => [...emails, email]);
        setEmailInput("");
    }
  }

  const handleEmailDelete = (chipToDelete) => () => {
    setEmails((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };


  function handleSubmit() {
    let usuarios = [];
    emails.forEach(email => usuarios.push({email: email.email}));

    let proyecto = {
        nombre: nombreProyecto,
        area: area,
        campo_accion: campoDeAccion,
        descripcion: descripcion,
        fecha_inicio: fechaInicio,
        usuarios: usuarios
    }

    setProyectos([...proyectos, proyecto]);
    handleClose();

    fetch("http://localhost:4000/api/proyecto", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(proyecto)
    })
  }

  return (
    <DashboardLayout>
        {console.log(proyectos)}
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
                        Proyectos actuales
                    </MDTypography>
                </Stack>
                <Stack direction="row-reverse" spacing={2}>
                    <Button variant="contained" color="success" onClick={handleOpen}>
                        Nuevo Proyecto
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
            Nuevo proyecto
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <TextField variant="standard" label="Nombre del Proyecto" fullWidth value={nombreProyecto} onChange={handleNombreProyecto} />
            </MDBox>
            <MDBox mb={2}>
              <TextField variant="standard" label="Campo de Accion" fullWidth value={campoDeAccion} onChange={handleCampoDeAccion} />
            </MDBox>
            <MDBox mb={2}>
              <TextField
                variant="standard"
                id="outlined-select-currency"
                select
                label="Area"
                value={area}
                fullWidth
                onChange={handleArea}
                >
                {areas.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
              </TextField>
            </MDBox>
            <MDBox mb={2}>
              {/* <TextField variant="standard" label="Area" fullWidth value={area} onChange={handleArea} /> */}
            </MDBox>
            <MDBox mb={2}>
                <TextField variant="standard" label="Presupuesto Total" fullWidth value={presupuesto} onChange={handlePresupuesto} />
            </MDBox>
            <MDBox mb={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Fecha de Inicio"
                    value={fechaInicio}
                    onChange={(newValue) => {
                        setFechaInicio(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </MDBox>
            <MDBox mb={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Fecha de Fin"
                    value={fechaFin}
                    onChange={(newValue) => {
                        setFechaFin(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </MDBox>
            <MDBox mb={2}>
                <TextField variant="standard" label="Descripcion" fullWidth value={descripcion} onChange={handleDescripcion} />
            </MDBox>
            <MDBox mb={2}>
                <TextField variant="standard" label="Ingrese un email" fullWidth value={emailInput} onChange={handleEmailInput} onKeyDown={handleEmailCreate} />
            </MDBox>
            <MDBox mb={2}>
            {emails.map((data) => {

                return (
                    <Chip
                        label={data.email}
                        onDelete={handleEmailDelete(data)}
                    />
                );
            })}
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                Crear Proyecto
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
                  {proyectos.map((proyecto, index) => {
                      return <>
                      <Accordion>
                        <AccordionSummary 
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              sx={{
                                background: 'rgb(2,0,36)',
                                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,125,234,1) 0%, rgba(70,160,240,1) 100%)',
                              }}>
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                {proyecto.nombre}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{new Date(proyecto.fecha_inicio).toLocaleDateString('es-AR')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Stack>
                             <Typography>{proyecto.descripcion}</Typography>
                          </Stack>
                          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                                <Grid container>
                                  <Grid item xs>
                                    <b>Area:</b> {proyecto.area}
                                  </Grid>
                                  <Divider orientation="vertical" flexItem />
                                  <Grid item xs>
                                    <b>Campo de Accion:</b> {proyecto.campo_accion}
                                  </Grid>
                                </Grid>
                          </Stack>
                          <Stack direction="row" alignItems="center" mb={5}>
                              <Typography>Miembros:</Typography>
                              {proyecto.usuarios.map((usuario, index) => {
                                  return <>
                                    <Chip label={usuario.email}/>
                                  </>
                              })}
                          </Stack>
                        </AccordionDetails>
                        </Accordion>
                      </> 
                  })}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Projects;
