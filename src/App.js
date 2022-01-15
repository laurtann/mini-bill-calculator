import {useState} from 'react'
import BillCalc from './BillCalc'

function App() {
  const [name1, setName1] = useState('Laura')
  const [name2, setName2] = useState('Jordan')
  const [income1, setIncome1] = useState('')
  const [income2, setIncome2] = useState('')
  const [bills, setBills] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    setIsSubmitted(true)
    e.preventDefault()
  }

  const resetValues = (e) => {
    setName1('')
    setName2('')
    setIncome1('')
    setIncome2('')
    setBills('')
    e.preventDefault()
  }

  const billCalcDefaultProps = {
    name1,
    name2,
    income1,
    income2,
    bills,
    setIsSubmitted
  }
  return (
    <div>
      { isSubmitted ? (
        <BillCalc
          {...billCalcDefaultProps}
        />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Enter name 1:
              <input
                name="name1"
                value={name1}
                onChange={e => setName1(e.target.value)}
                required
              />
            </label>
            <br></br>
            <label>
              Enter income:
              <input
                name="income1"
                value={income1}
                type="number"
                onChange={e => setIncome1(e.target.value)}
                required
              />
            </label>
            <br></br>
            <label>
              Enter name 2:
              <input
                name="name2"
                value={name2}
                onChange={e => setName2(e.target.value)}
                required
              />
            </label>
            <br></br>
            <label>
              Enter income:
              <input
                name="income2"
                value={income2}
                type="number"
                onChange={e => setIncome2(e.target.value)}
                required
              />
            </label>
            <br></br>
            <label>
              Enter bills (separated by commas):
              <input
                name="bills"
                value={bills}
                onChange={e => setBills(e.target.value)}
                required
              />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
          <br></br>
          <button onClick={resetValues}>Reset values</button>
        </div>
      )}
    </div>
  );
}

export default App;
