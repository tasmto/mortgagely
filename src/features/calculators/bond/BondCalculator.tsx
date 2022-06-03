import React, { ChangeEvent, useState } from 'react';
import { Form, InputGroup, Row, Col, Button, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateParameters, calculate } from './bondSlice';

type Props = {};

function BondCalculator({}: Props) {
  const dispatch = useDispatch();

  const { price, years, interestRate, deposit, error } = useSelector(
    (state: any) => state.bond
  );
  const [formData, setFormData] = useState({
    price: price || 0,
    years: years || 0,
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
        <Form.Group controlId='price' className='form-floating  col'>
          <Form.Control
            onChange={handleChange}
            type='number'
            value={formData.price}
            required
            placeholder='R000 000.00'
            className=' rounded-0 rounded-end'
          ></Form.Control>
          <Form.Label>Purchase price*</Form.Label>
        </Form.Group>
      </InputGroup>
      <Row className=' gy-3 pe-0'>
        <Col lg={6} className='pe-0 pe-lg-3 mt-0 '>
          <Form.Group controlId='years' className='form-floating '>
            <Form.Control
              onChange={handleChange}
              type='number'
              value={formData.years}
              required
              placeholder='R000 000.00'
              className=' '
            ></Form.Control>
            <Form.Label className='px-2'>Years to repay*</Form.Label>
          </Form.Group>
        </Col>
        <Col lg={6} className='pe-0  mt-3 mt-lg-0'>
          <InputGroup className='w-100 d-flex'>
            <InputGroup.Text
              id='basic-addon1'
              className='col-auto fw-bold px-3'
            >
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
        </Col>
      </Row>
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
          <Form.Label>Deposit*</Form.Label>
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

export default BondCalculator;
