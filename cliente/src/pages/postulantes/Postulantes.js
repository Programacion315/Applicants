import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { AlertaDesaparece } from "../../components/alertaDesaparece/AlertaDesaparece";

 import{ CButton,
  CTableHead,
  CTable,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CPaginationItem,
  CPagination,
  CFormInput
} from "@coreui/react";
import axios from "axios";
import uniquid from "uniquid";

import "./postulantes.css";

export const Postulantes = () => {
  const [open, setOpen] = useState(false);
  const [funcion, setFuncion] = useState("");
  const [dataPostulantes, setDataPostulante] = useState([]);
  const [id, setId] = useState("");
  const [alerta, setAlerta] = useState(false)
  const [color, setColor] = useState("")
  const [mensaje, setMensaje] = useState("")

  //Aca esta el postoulante que la persona escoja
  const [postulante, setPostulante] = useState(null);

  //Aca esta el que vamos a encontar con el buscador
  const [encontrado, setEncontrado] = useState(null)

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

  const agregarPostulante  = (data) => {
    let postulante = {
      nombre: data.nombre,
      apellido: data.apellido,
      edad: data.edad.toString(),
      sexo: data.sexo.toString(),
      idpostulante: uniquid(),
    };

    axios
      .post("/api/postulante/agregarpostulante", postulante)
      .then((res) => {
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });

    getAllPostulantes();
    mostrarAlerta("success", "Agregado correctamente")
  };

  const actualizarPostulante = (data) => {
    let postulante = {
      nombre: data.nombre,
      apellido: data.apellido,
      edad: data.edad.toString(),
      sexo: data.sexo.toString(),
      idpostulante: data.idpostulante,
    };

    axios
      .put("/api/postulante/actualizarpostulante", postulante)
      .then((res) => {
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });

    getAllPostulantes();
    mostrarAlerta("success", "Se actualizo correctamente")
  };

  const eleminarPostulante = (id) => {
    axios
      .post("/api/postulante/borrarpostulante", { idpostulante: id })
      .then((res) => {
        console.log("Por aca debe estar la respuesta");
        console.log(res.data);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getAllPostulantes();
    mostrarAlerta("success", "Se elimino correctamente")
  };

  const mostrarAlerta = (color, mensaje) =>{
    setAlerta(true)
    setColor(color)
    setMensaje(mensaje)
    setTimeout(() => {
      setAlerta(false)
    }, 5000)
  }

  const buscar = (buscar) =>{

    dataPostulantes.forEach(function(postulante) {
        if(buscar == postulante.nombre){
          setEncontrado(postulante.nombre)
        }
    });
  }

  useEffect(() => {
    getAllPostulantes();
  }, []);

  return (
    <div className="postulantes-completo">
      <AlertaDesaparece color={color} visible={alerta} mensaje={mensaje}/>
      <Sidebar
        open={open}
        setOpen={setOpen}
        titulo={funcion}
        funcion={funcion == "A" ? agregarPostulante : actualizarPostulante}
        postulante={postulante}
      />
      <div className="postulantes">
        <h1 className="titulo">Postulantes</h1>
        <p>Lista de todos los postulantes que desean ingresar a la empresa.</p>

        <div className="flex-center ">
          <CButton
            className="mb-2"
            onClick={() => {
              setOpen(true);
              setFuncion("A");
              let dataPostulante = {
                idpostulante: "",
                nombre: "",
                apellido: "",
                edad: "",
                sexo: "",
              };

              setPostulante(dataPostulante);
            }}
            color="success"
          >
            Agregar
          </CButton>
          
        </div>
        <CFormInput
              className="mb-2"
              name="buscar"
              type="text"
              id="buscar"
              placeholder="Buscar"
              onChange={(e)=> buscar(e.target.value)}
            />
           
        <CTable>
          <CTableHead>
            <CTableRow color="primary">
              <CTableHeaderCell scope="col">id</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
              <CTableHeaderCell scope="col">Apellido</CTableHeaderCell>
              <CTableHeaderCell scope="col">Edad</CTableHeaderCell>
              <CTableHeaderCell scope="col">Sexo</CTableHeaderCell>
              <CTableHeaderCell scope="col">Opciones</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          {/* Aca tiene que ir el table body */}
          <CTableBody>
            {dataPostulantes.map((postulante) => {
              return (
                <CTableRow color={encontrado == postulante.nombre?"dark":"default"} key={postulante.idpostulante}>
                  <CTableHeaderCell >{postulante.idpostulante}</CTableHeaderCell>
                  <CTableDataCell>{postulante.nombre}</CTableDataCell>
                  <CTableDataCell>{postulante.apellido}</CTableDataCell>
                  <CTableDataCell>{postulante.edad}</CTableDataCell>
                  <CTableDataCell>{postulante.sexo}</CTableDataCell>
                  <CTableDataCell>
                    <div className="flex-center ">
                      <i
                        className="bi bi-pencil-fill blue_hover"
                        onClick={() => {
                          setOpen(true);
                          setFuncion("U");
                          setId(postulante.idpostulante);

                          let dataPostulante = {
                            idpostulante: postulante.idpostulante,
                            nombre: postulante.nombre,
                            apellido: postulante.apellido,
                            edad: postulante.edad,
                            sexo: postulante.sexo,
                          };

                          setPostulante(dataPostulante);

                          console.log(postulante);
                        }}
                      />
                      <i
                        onClick={() => {
                          eleminarPostulante(postulante.idpostulante);
                        }}
                        className="bi bi-trash-fill red_hover"
                      />
                    </div>
                  </CTableDataCell>
                </CTableRow>
              );
            })}
          </CTableBody>
        </CTable>
        <CPagination aria-label="Page navigation example">
          <CPaginationItem>Atras</CPaginationItem>
          <CPaginationItem>1</CPaginationItem>
          <CPaginationItem>2</CPaginationItem>
          <CPaginationItem>3</CPaginationItem>
          <CPaginationItem>Siguiente</CPaginationItem>
        </CPagination>
      </div>
    </div>
  );
};
