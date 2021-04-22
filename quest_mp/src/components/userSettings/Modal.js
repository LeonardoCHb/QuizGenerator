import React, { useState } from "react";
import { FaUserAlt, FaSignInAlt } from "react-icons/fa";

import ModalPop from "../ModalPop";
import "./style.css";

const PopUP = () => {
  const [openlogin, setOpenLogin] = useState(false);
  const [opencadastro, setOpenCadastro] = useState(false);
  const [openforgot, setOpenForgot] = useState(false);
  return (
    <div>
      <button onClick={() => setOpenLogin(true)}>
        <FaUserAlt className="user" />
      </button>
      {openlogin ? (
        <ModalPop>
          <button className="close" onClick={() => setOpenLogin(false)}>
            X
          </button>
          <h1 className="loginh1">Login</h1>
          <input type="email" placeholder="Digite seu email"></input>
          <input type="password" placeholder="Digite sua senha"></input>
          <button
            className="login"
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
      <button onClick={() => setOpenCadastro(true)}>
        <FaSignInAlt className="signin" />
      </button>
      {opencadastro ? (
        <ModalPop>
          <button className="close" onClick={() => setOpenCadastro(false)}>
            X
          </button>
          <h1 className="cadastroh1">Cadastro</h1>
          <input type="email" placeholder="Digite seu email"></input>
          <input type="password" placeholder="Digite sua senha"></input>
          <button
            className="cadastro"
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
          <h1 className="esquecih1">Esqueceu a senha</h1>
          <input type="email" placeholder="Digite seu email"></input>
          <button
            className="esqueci"
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
