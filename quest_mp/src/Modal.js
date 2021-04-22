import React, { useState } from "react";

import ModalPop from "../src/components/ModalPop";

const PopUP = () => {
  const [openlogin, setOpenLogin] = useState(false);
  const [opencadastro, setOpenCadastro] = useState(false);
  const [openforgot, setOpenForgot] = useState(false);
  return (
    <div>
      <button onClick={() => setOpenLogin(true)}>Login</button>
      {openlogin ? (
        <ModalPop>
          <button className="close" onClick={() => setOpenLogin(false)}>
            X
          </button>
          <h1>Login</h1>
          <input type="email"></input>
          <input type="password"></input>
          <button
            onClick={() => {
              setOpenLogin(false);
              setOpenCadastro(true);
            }}
          >
            cadastre-se
          </button>
          <button
            onClick={() => {
              setOpenForgot(true);
              setOpenLogin(false);
            }}
          >
            Esqueci a senha
          </button>
        </ModalPop>
      ) : null}
      <button onClick={() => setOpenCadastro(true)}>Cadastro</button>
      {opencadastro ? (
        <ModalPop>
          <button className="close" onClick={() => setOpenCadastro(false)}>
            X
          </button>
          <h1>Cadastro</h1>
          <input type="email"></input>
          <input type="password"></input>
          <button
            onClick={() => {
              setOpenLogin(true);
              setOpenCadastro(false);
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setOpenForgot(true);
              setOpenCadastro(false);
            }}
          >
            Esqueci a senha
          </button>
        </ModalPop>
      ) : null}
      {openforgot ? (
        <ModalPop>
          <button className="close" onClick={() => setOpenForgot(false)}>
            X
          </button>
          <h1>Esqueceu a senha</h1>
          <input type="email"></input>
          <button
            onClick={() => {
              setOpenLogin(true);
              setOpenForgot(false);
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setOpenCadastro(true);
              setOpenForgot(false);
            }}
          >
            Cadastro
          </button>
        </ModalPop>
      ) : null}
    </div>
  );
};

export default PopUP;
