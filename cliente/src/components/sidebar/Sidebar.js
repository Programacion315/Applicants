import React, {useState} from "react";
import "./sidebar.css";
import { CContainer, CForm, CFormInput, CRow, CFormCheck, CButtonGroup, CButton } from "@coreui/react";

export const Sidebar = ({open, setOpen,titulo, funcion}) => {

  //Aca voy a tener la data
  const [data, setData] = useState('');
  
  const valueToData = ({ name, value }) => {

    setData({ ...data, [name]: value });
  };
  
  return (
    <div className={open == true? "sidebar_add_update": "sidebar_add_update close"}>
      <h2 className="mb-3">{titulo=="A"?"Agregar":"Actualizar"}</h2>
      <CContainer>
        <CForm>
          <CRow className="mb-4">
            <CFormInput
              name="nombre"
              type="text"
              id="nombre"
              label="Nombre"
              placeholder="Digite su nombre"
              onChange={e => valueToData(e.target)}
              value={data.nombre}
            />
          </CRow>
          <CRow className="mb-4">
            <CFormInput
              name="apellido"
              type="text"
              id="apellido"
              label="Apellido"
              placeholder="Digite su apellido"
              onChange={e => valueToData(e.target)}
              value={data.apellido}
            />
          </CRow>
          <CRow className="mb-4">
            <CFormInput
              name="edad"
              type="number"
              id="edad"
              label="Edad"
              placeholder="Digite su edad"
              onChange={e => valueToData(e.target)}
              value={data.edad}
            />
          </CRow>
          <CRow className="mb-4">
            <CFormCheck
              type="radio"
              name="sexo"
              id="button_hombre"
              label="Hombre"
              onChange={e => valueToData(e.target)}
              value={'M'}
            />
            <CFormCheck
              type="radio"
              name="sexo"
              id="button_mujer"
              label="Mujer"
              onChange={e => valueToData(e.target)}
              value={'F'}
            />
          </CRow>
         
          <div className="botones">
            {/* Recordar desabilitar el boton si no lleno los datos */}
            <CButton onClick={()=>{setOpen(false); funcion(data)}} color="success">Agregar</CButton>
            <CButton onClick={()=> setOpen(false)} color="danger">Cancelar</CButton>
          </div>
          
        
        </CForm>
      </CContainer>
    </div>
  );
};
