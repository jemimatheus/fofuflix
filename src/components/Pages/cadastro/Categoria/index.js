import React from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria({children}) {
    return (
      <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <Link to="/">
            Ir para a Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;