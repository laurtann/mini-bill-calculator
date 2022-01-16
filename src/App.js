import {useState} from 'react'
import {Box, Typography} from '@mui/material';
import {createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import BillCalc from './BillCalc'
import Form from './Form'
import './App.css';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  const [name1, setName1] = useState('Laura')
  const [name2, setName2] = useState('Jordan')
  const [income1, setIncome1] = useState('')
  const [income2, setIncome2] = useState('')
  const [bills, setBills] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const defaultProps = {
    name1,
    name2,
    income1,
    income2,
    bills,
    setIsSubmitted
  }

  const formProps = {
    ...defaultProps,
    setName1,
    setName2,
    setIncome1,
    setIncome2,
    setBills
  }
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h2" component="h1">Mini Bill Calculator</Typography>
        <Typography variant="h4" component="h3">Easily split bills by percentage of income</Typography>
        { isSubmitted ? (
          <BillCalc
            {...defaultProps}
          />
        ) : (
          <Form
            {...formProps}
          />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
