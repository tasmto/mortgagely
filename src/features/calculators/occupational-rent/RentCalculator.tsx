import React, { ChangeEvent, useState } from 'react';
import { Form, InputGroup, Row, Col, Button, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateParameters, calculate } from './rentSlice';
import { FiCalendar } from 'react-icons/fi';

type Props = {};

function RentCalculator({}: Props) {
  const dispatch = useDispatch();

  const { rent, months, utilized, deposit, error } = useSelector(
    (state: RootState) => state.rent
  );
  const [formData, setFormData] = useState({
    rent: rent || 0,
    months: months || 0,
    utilized: utilized || 0,
    deposit: deposit || 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((current) => {
      return { ...current, [e.target.id]: e.target.value };
    });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateParameters(formData));
    dispatch(calculate());
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className='row gy-3 p-3 pb-4 shadow bg-light rounded-3 mt-1'
    >
      <InputGroup className='w-100 d-flex'>
        <InputGroup.Text id='basic-addon1' className='col-auto fw-bold px-3'>
          R
        </InputGroup.Text>
        <Form.Group controlId='rent' className='form-floating  col'>
          <Form.Control
            onChange={handleChange}
            type='number'
            value={formData.rent}
            required
            placeholder='R000 000.00'
            className=' rounded-0 rounded-end'
          ></Form.Control>
          <Form.Label>Monthly rent*</Form.Label>
        </Form.Group>
      </InputGroup>

      <InputGroup className='w-100 d-flex mt-3'>
        <InputGroup.Text id='basic-addon1' className='col-auto fw-bold px-3'>
          <FiCalendar />
        </InputGroup.Text>
        <Form.Group controlId='months' className='form-floating col'>
          <Form.Control
            onChange={handleChange}
            type='number'
            value={formData.months}
            required
            placeholder='R000 000.00'
            className=' '
          ></Form.Control>
          <Form.Label className='px-2'>Months renting*</Form.Label>
        </Form.Group>
      </InputGroup>

      <InputGroup className='w-100 d-flex'>
        <InputGroup.Text id='basic-addon1' className='col-auto fw-bold px-3'>
          %
        </InputGroup.Text>
        <Form.Group controlId='utilized' className='form-floating  col'>
          <Form.Control
            onChange={handleChange}
            type='number'
            value={formData.utilized}
            required
            placeholder='0'
            className=' rounded-0 rounded-end'
          ></Form.Control>
          <Form.Label>Percentage utilized*</Form.Label>
        </Form.Group>
      </InputGroup>

      <div className='mt-3'>
        {error && (
          <Alert className='mb-2' variant='danger'>
            {error}
          </Alert>
        )}

        <Button
          type='submit'
          variant='primary'
          size='lg'
          className='w-100 py-3  fs-6 border-3'
        >
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default RentCalculator;
