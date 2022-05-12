/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
import appleIcon from "assets/images/apple-icon.png";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Usuario", accessor: "author", width: "45%", align: "left" },
      { Header: "Funcion", accessor: "function", align: "left" },
      { Header: "Acciones", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={appleIcon} name="Santiago Cerfoglio" email="scerfoglio@uade.edu.ar" />,
        function: <Job title="Investigador" description="Investigador Graduado" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={appleIcon} name="Ivan Chan" email="ichan@uade.edu.ar" />,
        function: <Job title="Ayudante" description="Investigador Estudiante" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={appleIcon} name="Diego Cibeira" email="dcibeira@uade.edu.ar" />,
        function: <Job title="Investigador" description="Investigador Graduado" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={appleIcon} name="Christian Digiorno" email="cdigiorno@uade.edu.ar" />,
        function: <Job title="Investigador" description="Investigador Graduado" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={appleIcon} name="Ignacio Fontana" email="ifontana@uade.edu.ar" />,
        function: <Job title="Investigador" description="Lider de equipo" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={appleIcon} name="Cristian Merenda" email="cmerenda@uade.edu.ar" />,
        function: <Job title="Investigador" description="Investigador Estudiante" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={appleIcon} name="Santiago Otero" email="sotero@uade.edu.ar" />,
        function: <Job title="Investigador" description="Investigador Graduado" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
