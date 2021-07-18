import React, { useState } from "react";

function App(props) {
    const [usuario, setUsuario] = useState('Guilherme');
    return (
        <>
        <h1>Hello Gamma Academy</h1>
        <p>{ usuario }</p>
        <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário" />
        <button type="button">Pesquisar</button>
        </>
    );
}

export default App;
