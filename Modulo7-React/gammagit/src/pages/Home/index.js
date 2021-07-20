import React, { useState } from "react";
import axios from "axios";
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function Home(props) {
    const history = useHistory();
    const [usuario, setUsuario] = useState('');
    const [erro, setErro] = useState(false);

    function handleSearch() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
            const repositories = response.data;
            const repositoriesName = [];
            repositories.map(repository => repositoriesName.push(repository.name));
            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
            setErro(false);
            history.push('/repositories');
        }).catch(err => {
            setErro(true);
        });
    }

    return (
        <S.Container>
            <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
            <S.Button type="button" onClick={handleSearch}>Pesquisar</S.Button>
            { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
        </S.Container>
    );
}

export default Home;