const calculateRent = (rent: number, utilized: number, months: number) => {
  const principal = Number(rent);
  const interest = Number(utilized) / 100;
  const payments = Number(months);
  console.log(months, rent, 'm r');

  const paid = months * rent;
  // compute the monthly payment figure: Interest = Principal × Rate × Time
  const gained = principal * interest * payments;

  // Check for if the output is valid
  if (!isFinite(gained) || !gained || gained < 0)
    throw new Error('Output value not valid');
  else return { totalGained: gained, totalPaid: paid };
};

export default calculateRent;
