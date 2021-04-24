import React from "react";

const SignIn = () => {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <input type="text" placeholder="Digite seu email"></input>
        <input type="password" placeholder="Digite sua senha"></input>
      </div>
      <button type="submit">Entrar</button>
      <div>
        <link>Esqueci minha senha!</link>
        <link>Crie uma conta!</link>
      </div>
    </div>
  );
};

export default SignIn;
