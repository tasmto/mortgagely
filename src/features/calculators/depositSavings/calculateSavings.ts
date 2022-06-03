const calculateSavings = (
  goal: number,
  interestRate: number,
  months: number,
  deposit: number
) => {
  if (deposit > goal)
    throw new Error(
      'The goal amount needs to be bigger than your initial savings.'
    );

  const principal = Number(deposit);
  const monthlyRate = Number(interestRate) / 100;

  const totalGains = principal * Math.pow(1 + monthlyRate, months);
  const monthlyGains = principal * Math.pow(1 + monthlyRate, 1) - principal;
  const timeTillGoal = () => {
    let x;
    for (let index = 1; index < 10000; index++) {
      const loop = principal * Math.pow(1 + monthlyRate, index);
      if (loop > goal) return (x = index);
    }
    if (!x)
      throw new Error(
        `Your goal will take longer than 10 000 months (>800 years).`
      );
    return x;
  };
  // Check for if the output is valid
  if (!isFinite(totalGains) || !totalGains || totalGains < 0)
    throw new Error(
      "Some of your values you've entered are invalid, please try again."
    );
  else
    return {
      total: totalGains,
      monthlyGains: monthlyGains,
      timeTillGoal: timeTillGoal(),
    };
};

export default calculateSavings;
