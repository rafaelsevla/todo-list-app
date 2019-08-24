'use strict';

import React from 'react';

const searchCep = () => (
  <div>
    <form>
      <input type="text" name="cep" />
      <button type="submit">Buscar endereço</button>
    </form>

    <table>
      <thead>
        <tr>
          <td>CEP</td>
          <td>Endereço</td>
          <td>Bairro</td>
          <td>Cidade</td>
          <td>Estado</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8888</td>
          <td>8888</td>
          <td>8888</td>
          <td>8888</td>
          <td>8888</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default searchCep;
