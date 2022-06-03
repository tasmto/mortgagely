import React from 'react';
import { Table, Container, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
// @ts-ignore: Could not find a declaration file for module
import { FormatCurrency } from '../../../utilities/FormatNumber';

type termFields = {
  months?: number;
  total: number;
  monthlyGains: number;
  timeTillGoal: number;
};
type terms = {
  current: termFields;
  termOne: termFields;
  termTwo: termFields;
  termThree: termFields;
  termFour: termFields;
  termFive: termFields;
  termSix: termFields;
};

function AdvancedBondResults() {
  const {
    current,
    termOne,
    termTwo,
    termThree,
    termFour,
    termFive,
    termSix,
  }: terms = useSelector((state: any) => state.savings.calculations);
  const { months } = useSelector((state: any) => state.savings);
  return (
    <Container fluid className='px-3 pt-3 mt-1 bg-light rounded-3 shadow '>
      <Table
        hover
        bordered
        responsive
        className='border text-dark fs-5 bg-light shadow-lg text-center'
      >
        <thead>
          <tr>
            <th>Months</th>

            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {current.total <= 0 ? (
            <tr>
              <td colSpan={3} className='h-100'>
                <div className='py-3 px-2 d-flex justify-content-center align-items-center'></div>
              </td>
            </tr>
          ) : (
            [
              current,
              termOne,
              termTwo,
              termThree,
              termFour,
              termFive,
              termSix,
            ].map((term, i) => (
              <tr key={i} className={`${!i && 'table-dark'}`}>
                <td>{term?.months || months}</td>

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
