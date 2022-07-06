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

import {Col, Row, Dropdown, DropdownButton, Badge} from "react-bootstrap";

import appleIcon from "assets/images/bacteria.png";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';
import MDAvatar from "components/MDAvatar";
import TextField from '@mui/material/TextField';

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";

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

function Chat() {


let database;
const [message, setMessage] = React.useState("");
const [messages, setMessages] = React.useState([]);


var idReactivo;
var cantidad;
var correo;
var nuevo;
var nombre;

const [correoGlobal, setCorreoGlobal] = React.useState("");
const [idReactivoGlobal, setIdReactivoGlobal] = React.useState("");

const handleMessage = (event) => {
    setMessage(event.target.value);
  }

useEffect(() => {
    init();
}, []);

function init(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    idReactivo = urlParams.get('idReactivo');
    cantidad = urlParams.get('cantidad');
    const aux = urlParams.get('correo').replace(/\./g, '--DOT--')
    correo = aux;
    nuevo = urlParams.get('nuevo');
    nombre = urlParams.get('nombre');

    setCorreoGlobal(aux)
    setIdReactivoGlobal(idReactivo)

    initFirebase();

    if(urlParams.get('nuevo') == "true"){
        sendInitialMessage();
    }
  
    
}

function initFirebase(){
    // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAtcuRLabt65-Fph96H1NcR6RiMv5VFERQ",
    authDomain: "conicet-connect.firebaseapp.com",
    databaseURL: "https://conicet-connect-default-rtdb.firebaseio.com",
    projectId: "conicet-connect",
    storageBucket: "conicet-connect.appspot.com",
    messagingSenderId: "415366983240",
    appId: "1:415366983240:web:190f3b08826e3b04d8327d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  database = getDatabase(app);

  receiveMessages()
}

function sendMessage(){
    const db = getDatabase();
    set(ref(db, `chat/${idReactivoGlobal}/${correoGlobal}/${(+new Date)}`), {
        text: message,
        remitente: correoGlobal
    });
    document.getElementById("messageText").value = "";
}

function sendInitialMessage(){
    const db = getDatabase();
    set(ref(db, `chat/${idReactivo}/${correo}/${(+new Date)}`), {
        text: `${correo} ha solicitado ${cantidad} de ${nombre}`,
        remitente: correo
});
    document.getElementById("messageText").value = "";
}

function receiveMessages(){
    const db = getDatabase();
    const starCountRef = ref(db, `chat/${idReactivo}/${correo}/`);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        let aux = [];
        let aux2 = "";
        Object.keys(data).forEach((key) => {
            aux2 = data[key].text.replace("--DOT--", '.');
            aux.push({[key]: {text: aux2, remitente: data[key].remitente}});
          });
          console.log(aux)
        setMessages(aux);
    });
}

const bubble = (r) => {
    const text = r[Object.keys(r)[0]].text
    const remitente = r[Object.keys(r)[0]].remitente

    console.log(remitente)
    console.log(correoGlobal)
    if(remitente == correoGlobal){
        //Soy yo
        console.log("atr")
        return <div className='row'><div className='col-6'></div><div className='col-6'><p className='p-2' style={{textAlign:"right", background: "#E1E1E1", borderRadius: 10}}>{text}</p></div></div>
    }else{
        return <div className='row'><div className='col-6'><p className='p-2' style={{textAlign:"left", background: "#E1E1E1", borderRadius: 10}}>{text}</p></div></div>
    }
    
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
                
                
            </Stack>
            </MDBox>
            <Row className='m-4'>
                {messages.map((r, i) => (
                    <div>{bubble(r)}</div>
                ))}
                <Col>
                    <TextField variant="standard" id="messageText" label="Mensaje" fullWidth onChange={handleMessage} />
                </Col>
                <Col xs={1}>
                    <Button onClick={sendMessage}>Enviar</Button>
                </Col>
            </Row>
            
        </Card>
        </Grid>
    </Grid>
    </MDBox>
</DashboardLayout>
);
}

export default Chat;
