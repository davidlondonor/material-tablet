import Head from "next/head";
import styles from "../styles/Home.module.css";
import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { resetServerContext } from "react-beautiful-dnd";

const colums = [
  {
    title: "Artista",
    field: "artista",
  },
  {
    title: "País de origen",
    field: "pais",
  },
  {
    title: "Genero(s)",
    field: "genero",
  },
  {
    title: "Ventas estimadas (en millones)",
    field: "ventas",
    type: "numeric",
  },
];
const baseUrl = "https://rickandmortyapi.com/api/character";

export default function Home() {
  const [data, setData] = useState([]);
  resetServerContext();
  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
      console.log(baseUrl, "url -------->");
    });
  };

  useEffect(() => {
    peticionGet();
    resetServerContext();
  }, []);

  const pageOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Data Table con Material</h1>

        <p>Versión Mobile </p>
        <MaterialTable
          columns={colums}
          data={data}
          title="Artistas más vendedores en el mundo"
          pagination
          paginationComponentOptions={pageOptions}
          actions={[
            {
              icon: "edit",
              tooltip: "editar artista",
              onClick: (event, rowData) =>
                alert("Has editado el artista: " + rowData.artista),
            },
            {
              icon: "deleted",
              tooltip: "Eliminar artista",
              onClick: (event, rowData) =>
                window.confirm(
                  "Has editado el artista: " + rowData.artista + "?"
                ),
            },
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header: {
              actions: "Acciones",
            },
          }}
        >
          <h1>Mi Primera tabla en react</h1>
        </MaterialTable>
      </main>
      <div className={styles.dataDesk}>
        <p>Versión Escritorio </p>

        <MaterialTable
          columns={colums}
          data={data}
          title="Artistas más vendedores en el mundo"
          pagination
          paginationComponentOptions={pageOptions}
          actions={[
            {
              icon: "edit",
              tooltip: "editar artista",
              onClick: (event, rowData) =>
                alert("Has editado el artista: " + rowData.artista),
            },
            {
              icon: "delete",
              tooltip: "Eliminar artista",
              onClick: (event, rowData) =>
                window.confirm(
                  "Has editado el artista: " + rowData.artista + "?"
                ),
            },
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header: {
              actions: "Acciones",
            },
          }}
        >
          <h1>Mi Primera tabla en react</h1>
        </MaterialTable>
      </div>
    </div>
  );
}
