const calculateBond = (price: number, interestRate: number, years: number) => {
  const principal = Number(price);
  const interest = Number(interestRate) / 100 / 12;
  const payments = Number(years) * 12;

  // compute the monthly payment figure
  const x = Math.pow(1 + interest, payments);
  const monthly = (principal * x * interest) / (x - 1);

  // Check for if the output is valid
  if (!isFinite(monthly) || !monthly || monthly < 0)
    throw new Error('Output value not valid');
  else return monthly;
};

export default calculateBond;
