import React from 'react';
import { Table, Container, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
// @ts-ignore: Could not find a declaration file for module
import { FormatCurrency } from '../../../utilities/FormatNumber';

type termFields = {
  months: 1;
  totalGained: 0;
  total: 0;
};
type terms = {
  current: termFields;
  termOne: termFields;
  termTwo: termFields;
  termThree: termFields;
  termFour: termFields;
};

function AdvancedRentResults() {
  const { current, termOne, termTwo, termThree, termFour }: terms = useSelector(
    (state: any) => state.rent.calculations
  );
  const { months }: any = useSelector((state: any) => state.rent);
  return (
    <Container fluid className='py-2 px-3 pt-3 mt-1 bg-light rounded-3 shadow '>
      <Table
        hover
        bordered
        responsive
        className='border text-dark fs-5 bg-light shadow-lg'
      >
        <thead>
          <tr style={{ verticalAlign: 'middle' }}>
            <th>Months</th>
            <th className='d-flex align-items-center'>
              Total <span className='d-none d-lg-block ms-2'>gained</span>
            </th>
            <th>Total paid</th>
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
                <td>{term.months || months}</td>
                <td>{FormatCurrency(term.totalGained)}</td>
                <td>{FormatCurrency(term.total)}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdvancedRentResults;
