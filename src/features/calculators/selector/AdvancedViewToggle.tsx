import React from 'react';
import { Form } from 'react-bootstrap';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleView } from './layoutSlice';

const AdvancedViewToggle = () => {
  const dispatch = useDispatch();
  const toggled = useSelector((state: RootState) => state.layout.advanced);
  return (
    <Form>
      <Form.Group
        className='form-check form-switch ps-3 d-flex align-items-center'
        controlId='advanced'
      >
        <Form.Label className='form-check-label fs-5 fw-bold mb-0 text-white'>
          Advanced view
        </Form.Label>
        <Form.Control
          className='form-check-input ms-3'
          type='checkbox'
          role='switch'
          checked={toggled}
          onChange={() => dispatch(toggleView())}
          style={{ transform: 'scale(1.5)' }}
        />
      </Form.Group>
    </Form>
  );
};

export default AdvancedViewToggle;
