import React, { useState, useEffect } from "react";
import { Postulante } from "../postulante/Postulante";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { CButton, CTable } from "@coreui/react";
import axios from "axios";
import uniquid from "uniquid";

import "./postulantes.css";

export const Postulantes = () => {
  const [open, setOpen] = useState(false);
  const [funcion, setFuncion] = useState("");
  const [dataPostulantes, setDataPostulante] = useState([]);

  const getAllPostulantes = () => {
    console.log("entro react");
    axios
      .get("api/postulante/obtenerpostulantes")
      .then((res) => {
        // console.log(res.data)
        setDataPostulante(res.data);
        console.log("aca esta el sat");
        console.log(dataPostulantes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const agregarPostulante = (data) => {
    console.log("Aca esta la data edad");
    console.log(data);

    let sexo = data.sexo;
    let edad = data.edad;

    let postulante = {
      nombre: data.nombre,
      apellido: data.apellido,
      edad: data.edad.toString(),
      sexo: data.sexo.toString(),
      idpostulante: uniquid(),
    };

    console.log("Aca esta esta el let!");

    console.log(postulante);

    axios
      .post("/api/postulante/agregarpostulante", postulante)
      .then((res) => {
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const actualizarPostulante = () => {};

  const eleminarPostulante = () => {};

  //NO OLVIDAR funcion de buscar

  useEffect(() => {
    getAllPostulantes();
  }, []);

  

  return (
    <div className="postulantes-completo">
      <Sidebar
        open={open}
        setOpen={setOpen}
        titulo={funcion}
        funcion={funcion == "A" ? agregarPostulante : actualizarPostulante}
      />
      <div className="postulantes">
        <h1 className="titulo">Postulantes</h1>
        <p>Lista de todos los postulantes que desean ingresar a la empresa.</p>

        <div className="flex-center">
          <CButton
            onClick={() => {
              setOpen(true);
              setFuncion("A");
            }}
            color="success"
          >
            Agregar
          </CButton>
        </div>

        {dataPostulantes.map((postulante) => {
          return (
            <div>
              <Postulante postulante={postulante} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
