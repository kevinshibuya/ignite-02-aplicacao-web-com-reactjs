import { useEffect } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">R$12.000,00</td>
            <td>Development</td>
            <td>21/01/2022</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- R$3.000,00</td>
            <td>Home</td>
            <td>01/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}