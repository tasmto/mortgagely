import React, { ChangeEvent, useState } from 'react';
import { Form, InputGroup, Row, Col, Button, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateParameters, calculate } from './SavingsSlice';
import { FiCalendar } from 'react-icons/fi';

type Props = {};

function SavingsCalculator({}: Props) {
  const dispatch = useDispatch();

  const { goal, months, interestRate, deposit, error } = useSelector(
    (state: RootState) => state.savings
  );
  const [formData, setFormData] = useState({
    goal: goal || 0,
    months: months || 0,
    interestRate: interestRate || 0,
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
        <Form.Group controlId='goal' className='form-floating  col'>
          <Form.Control
            onChange={handleChange}
            type='number'
            value={formData.goal}
            required
            placeholder='R000 000.00'
            className=' rounded-0 rounded-end'
          ></Form.Control>
          <Form.Label>
            Goal (The total deposit you need for the property)*
          </Form.Label>
        </Form.Group>
      </InputGroup>

      <InputGroup className='w-100 d-flex'>
        <InputGroup.Text id='basic-addon1' className='col-auto fw-bold px-3'>
          <FiCalendar />
        </InputGroup.Text>
        <Form.Group controlId='months' className='form-floating  col'>
          <Form.Control
            onChange={handleChange}
            type='number'
            value={formData.months}
            required
            placeholder='R000 000.00'
            className=' '
          ></Form.Control>
          <Form.Label className='px-2'>
            When do you need the deposit (in months)*
          </Form.Label>
        </Form.Group>
      </InputGroup>
      <InputGroup className='w-100 d-flex'>
        <InputGroup.Text id='basic-addon1' className='col-auto fw-bold px-3'>
          %
        </InputGroup.Text>
        <Form.Group controlId='interestRate' className='form-floating  col'>
          <Form.Control
            onChange={handleChange}
            type='number'
            value={formData.interestRate}
            required
            placeholder='0'
            className=' rounded-0 rounded-end'
          ></Form.Control>
          <Form.Label>Interest rate*</Form.Label>
        </Form.Group>
      </InputGroup>

      <InputGroup className='w-100 d-flex mt-3'>
        <InputGroup.Text id='basic-addon1' className='col-auto fw-bold px-3'>
          R
        </InputGroup.Text>
        <Form.Group controlId='deposit' className='form-floating  col'>
          <Form.Control
            onChange={handleChange}
            type='number'
            value={formData.deposit}
            required
            placeholder='000 000.00'
            className=' rounded-0 rounded-end'
          ></Form.Control>
          <Form.Label>Available funds (initial savings)*</Form.Label>
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

export default SavingsCalculator;
