import {Box, Typography, Button} from '@mui/material';

const addBills = (bills) =>  {
  if (bills.includes(',')) {
    bills = bills.replace(/\s/g, '').split(',').map(Number).reduce((a, b) => a + b);
  } else {
    bills = +bills
  }
  return bills;
}

function calculateBills(bills, name1, name1Money, name2, name2Money) {
  bills = addBills(bills)

  const name1Bill = (bills / (+name1Money + +name2Money)) * +name1Money;
  const name2Bill = bills - name1Bill;

  return (
    `${name1} owes $${name1Bill.toFixed(2)} and
     ${name2} owes $${name2Bill.toFixed(2)}.
     This represents ${((name1Bill/name1Money) * 100).toFixed(2)}% of each income.
    `)
}

export default function BillCalc({
  name1,
  name2,
  income1,
  income2,
  bills,
  setIsSubmitted
}) {
  function handlePress(e) {
    setIsSubmitted(false)
    e.preventDefault()
  }
  return (
    <Box>
      <Typography>{name1}'s income: ${income1}</Typography>
      <Typography>{name2}'s income: ${income2}</Typography>
      <Typography>Bills: {bills}</Typography>
      <Typography>Bills Total: ${addBills(bills).toFixed(2)}</Typography>
      <Typography><strong>{calculateBills(bills, name1, income1, name2, income2)}</strong></Typography>
      <Button onClick={handlePress} variant="contained" color="secondary">Make a change?</Button>
    </Box>
  );
}