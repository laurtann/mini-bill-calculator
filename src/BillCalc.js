function calculateBills(bill, name1, name1Money, name2, name2Money) {
  bill = addBills(bill)
  let bigEarnerMoney;
  let lowEarnerMoney;
  let bigEarner;
  let lowEarner;

  console.log(bill, name1, name1Money, name2, name2Money)

  if (+name1Money >= +name2Money) {
      bigEarner = name1;
      lowEarner = name2;
      bigEarnerMoney = +name1Money;
      lowEarnerMoney = +name2Money;
  } else {
      bigEarner = name2;
      lowEarner = name1;
      bigEarnerMoney = +name2Money;
      lowEarnerMoney = +name1Money;
  }

  const lowEarnerPortion = (bill / bigEarnerMoney) * lowEarnerMoney;
  const bigEarnerPortion = bill - lowEarnerPortion;

  return (`${bigEarner} owes $${bigEarnerPortion.toFixed(2)} and ${lowEarner} owes $${lowEarnerPortion.toFixed(2)}`)
}

const addBills = (bills) =>  {
  if (bills.includes(',')) {
    bills = bills.replace(/\s/g, '').split(',').map(Number).reduce((a, b) => a + b);
  } else {
    bills = +bills
  }
  return bills;
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
    <div>
      <p>{name1} income: {income1}</p>
      <p>{name2} income: {income2}</p>
      <p>Bills: {bills}</p>
      <p>Bills Total: {addBills(bills)}</p>
      <p><strong>{calculateBills(bills, name1, income1, name2, income2)}</strong></p>
      <button onClick={handlePress}>Make a change?</button>
    </div>
  );
}