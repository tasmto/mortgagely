import React from 'react';
import { Table, Container } from 'react-bootstrap';

type Props = {};

function AdvancedBondResults({}: Props) {
  return (
    <Container fluid className='py-2 px-3 pt-3 bg-light rounded-3 shadow '>
      <Table
        hover
        bordered
        responsive
        className='border text-dark fs-5 bg-light shadow-lg'
      >
        <thead>
          <tr>
            <th>Years</th>
            <th>Monthly repayments</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr className=''>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr className=''>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default AdvancedBondResults;
