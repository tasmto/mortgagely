import React from 'react';
import { Table, Container, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
// @ts-ignore: Could not find a declaration file for module
import { FormatCurrency } from '../../../utilities/FormatNumber';

type termFields = {
  years: number;
  monthlyRepayments: number;
  total: number;
};
type terms = {
  current: termFields;
  termOne: termFields;
  termTwo: termFields;
  termThree: termFields;
  termFour: termFields;
};

function AdvancedBondResults() {
  const { current, termOne, termTwo, termThree, termFour }: terms = useSelector(
    (state: any) => state.bond.calculations
  );
  return (
    <Container fluid className='py-2 px-3 pt-3 mt-1 bg-light rounded-3 shadow '>
      <Table
        hover
        bordered
        responsive
        className='border text-dark fs-5 bg-light shadow-lg'
      >
        <thead>
          <tr>
            <th>Years</th>
            <th className='d-flex'>
              Monthly <span className='d-none d-lg-block ms-2'>repayments</span>
            </th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {!current.total ? (
            <tr>
              <td colSpan={3} className='h-100'>
                <div className='py-3 px-2 d-flex justify-content-center align-items-center'></div>
              </td>
            </tr>
          ) : (
            [current, termOne, termTwo, termThree, termFour].map((term, i) => (
              <tr key={i} className={`${!i && 'table-dark'}`}>
                <td>{term.years}</td>
                <td>{FormatCurrency(term.monthlyRepayments)}</td>
                <td>{FormatCurrency(term.total)}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdvancedBondResults;
