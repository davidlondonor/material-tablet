import React, { useState } from "react";
import MaterialTable from "material-table";
import Head from "next/head";

const TableOne = () => {
  const [tableData, setTableData] = useState([
    {
      name: "David",
      email: "correo@correo.com",
      phone: 3434343,
      age: 30,
      gender: "M",
      city: "Medellín",
      fee: 3498,
    },
    {
      name: "Pablo",
      email: "correo@correo.com",
      phone: 3434343,
      age: 30,
      gender: "M",
      city: "Medellín",
      fee: 20398,
    },
    {
      name: "Judith",
      email: "correo@correo.com",
      phone: 3434343,
      age: null,
      gender: "F",
      city: "Medellín",
      fee: 203498,
    },
    {
      name: "Natalia",
      email: "correo@correo.com",
      phone: 3434343,
      age: 30,
      gender: "F",
      city: "Medellín",
      fee: 203498,
    },
  ]);
  const columns = [
    { title: "Name", field: "name", sorting: false },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: "phone", align: "right" },
    {
      title: "Age",
      field: "age",
      emptyValue: () => <em>null</em>,
      defaultSort: "asc",
    },
    { title: "Gender", field: "gender", lookup: { M: "male", F: "Female" } },
    { title: "City", field: "city" },
    {
      title: "School Fee",
      field: "fee",
      type: "currency",
      currencySetting: { currencyCode: "COP", minimumFractionDigits: 1 },
    },
  ];

  {
    /* sorting es para evitar flechita en titulos */
    /* search es para evitar buscar */
  }
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <h1>Tabla de ejemplo</h1>
      <MaterialTable
        title="Título de la Tabla"
        columns={columns}
        data={tableData}
        options={{ sorting: true }}
      />
    </>
  );
};

export default TableOne;
