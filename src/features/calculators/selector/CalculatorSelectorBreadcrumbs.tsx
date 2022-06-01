import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

type Props = { active: string };

function CalculatorSelectorBreadcrumbs({ active }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCalculator, setActiveCalculator] = useState('');

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    searchParams.delete('type');
    // @ts-ignore: Expected 1-2 arguments, but got 0.
    setSearchParams();
  };
  return (
    <Breadcrumb className='bg-transparent'>
      <Breadcrumb.Item
        active={!active ? true : false}
        id=''
        href=''
        onClick={handleClick}
      >
        Select
      </Breadcrumb.Item>

      <Breadcrumb.Item
        active={active ? true : false}
        href=''
        id={active}
        onClick={handleClick}
      >
        {active.replaceAll('-', ' ')}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default CalculatorSelectorBreadcrumbs;
