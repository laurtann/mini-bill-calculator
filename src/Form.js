import {Box, TextField, Button, InputAdornment} from '@mui/material';

export default function Form ({
  name1,
  name2,
  income1,
  income2,
  bills,
  setIsSubmitted,
  setName1,
  setName2,
  setIncome1,
  setIncome2,
  setBills
}) {
  const handleSubmit = (e) => {
    setIsSubmitted(true)
    e.preventDefault()
  }

  const validateForm = (e) => {
    if (!name1 || !name2 || (!income1 || income1 == 0) || (!income2 || income2 == 0) || (!bills || bills == 0)) {
      alert('Please complete all required fields')
      e.preventDefault()
    }
  }

  const resetValues = (e) => {
    setName1('')
    setName2('')
    setIncome1('')
    setIncome2('')
    setBills('')
    e.preventDefault()
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root, .MuiButton-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          required
          name="name1"
          label="Name 1"
          value={name1}
          onChange={e => setName1(e.target.value)}
        />
        <TextField
          name="income1"
          label="Income 1"
          type="number"
          value={income1}
          onChange={e => setIncome1(e.target.value)}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            )
          }}
        />
      </div>
      <div>
        <TextField
          required
          name="name2"
          label="Name 2"
          value={name2}
          onChange={e => setName2(e.target.value)}
        />
        <TextField
          name="income2"
          label="Income 2"
          type="number"
          value={income2}
          onChange={e => setIncome2(e.target.value)}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            )
          }}
        />
      </div>
      <div>
        <TextField
          name="bills"
          label="Bills (separated by commas)"
          value={bills}
          onChange={e => setBills(e.target.value)}
          required
        />
      </div>
      <div>
        <Button onClick={validateForm} type="submit" variant="contained">Calculate</Button>
        <Button onClick={resetValues} variant="contained" color="secondary">Reset Values</Button>
      </div>
    </Box>
  )
}