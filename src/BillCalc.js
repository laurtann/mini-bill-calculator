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

  return (`${name1} owes $${name1Bill.toFixed(2)} and ${name2} owes $${name2Bill.toFixed(2)}`)
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
      <p>Bills Total: {addBills(bills).toFixed(2)}</p>
      <p><strong>{calculateBills(bills, name1, income1, name2, income2)}</strong></p>
      <button onClick={handlePress}>Make a change?</button>
    </div>
  );
}