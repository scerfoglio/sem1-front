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
import appleIcon from "assets/images/bacteria.png";

export default function data() {
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

  return {
    columns: [
      { Header: "Nombre", accessor: "author", width: "45%", align: "left" },
      { Header: "Disponibilidad", accessor: "availability", align: "left" },
      { Header: "Acciones", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Reactive image={appleIcon} name="Astaxantina" composition="Líquido" />,
        availability: <Availability qty="100mg" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Reactive image={appleIcon} name="Fucoxantina" composition="Líquido" />,
        availability: <Availability qty="100mg" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Reactive image={appleIcon} name="Fucoxantinol" composition="Líquido" />,
        availability: <Availability qty="100mg" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Reactive image={appleIcon} name="rBC2LCN" composition="Líquido" />,
        availability: <Availability qty="100mg" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Reactive image={appleIcon} name="Dicamba" composition="Líquido" />,
        availability: <Availability qty="100mg" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Reactive image={appleIcon} name="Sericina" composition="Líquido" />,
        availability: <Availability qty="100mg" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Reactive image={appleIcon} name="Biotina BTL-104 Phos-tag™" composition="Líquido" />,
        availability: <Availability qty="100mg" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
