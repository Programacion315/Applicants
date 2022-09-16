import React from "react";

import {
  CAlert
}from "@coreui/react";

import "./alertaDesaparece.css"

export const AlertaDesaparece = ({color,mensaje, visible }) => {
  return (
    <div >
    <CAlert
      className="position-absolute alerta"
      color={color}
      visible={visible}
      dismissible
    //   onClose={() => setVisible(false)}
    >
      {mensaje}
    </CAlert>
    </div>
  );
};
