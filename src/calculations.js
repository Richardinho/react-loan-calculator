const MONTHS_IN_YEAR = 12;

let ratesPerTerm = {
  6:  { interestRate: 0.045, completionRate: 0.015 },
  12: { interestRate: 0.047, completionRate: 0.025 },
  24: { interestRate: 0.05,  completionRate: 0.03 },
  36: { interestRate: 0.053, completionRate: 0.035 },
  48: { interestRate: 0.056, completionRate: 0.04 },
  60: { interestRate: 0.059, completionRate: 0.045 },
};

export default function calculateAmortisedValue(loanAmount, loanTerm) {
  loanTerm = parseInt(loanTerm, 10);
  loanAmount = parseInt(loanAmount, 10);
  const rates = ratesPerTerm[ loanTerm ];
  const completionRate = rates[ 'completionRate' ]; 
  const interestRate = rates['interestRate' ]; 
  const interestRatePerMonth = interestRate / MONTHS_IN_YEAR;
  const completionFee = loanAmount * completionRate;
  const loanWithFees = loanAmount + completionFee;
  const denominator = Math.pow(1 + interestRatePerMonth, loanTerm) - 1;

  const monthlyPayments = loanWithFees * ((interestRatePerMonth / denominator) + interestRatePerMonth);
  const totalInterest = (monthlyPayments * loanTerm) - loanWithFees;
  const totalCost = loanWithFees + totalInterest;
  return {
    monthlyPayments: Math.round(monthlyPayments),
    totalCost: Math.round(totalCost),
    completionFee: Math.round(completionFee),
    interestFee: Math.round(totalInterest),
  };
}
