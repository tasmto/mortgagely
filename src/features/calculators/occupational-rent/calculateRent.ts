const calculateRent = (rent: number, utilized: number, months: number) => {
  const principal = Number(rent);
  const interest = Number(utilized) / 100 / 12;
  const payments = Number(months) * 12;

  // compute the monthly payment figure
  const x = Math.pow(1 + interest, payments);
  const monthly = (principal * x * interest) / (x - 1);

  // Check for if the output is valid
  if (!isFinite(monthly) || !monthly || monthly < 0)
    throw new Error('Output value not valid');
  else return monthly;
};

export default calculateRent;
