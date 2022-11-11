import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { useState } from 'react'
import { useEffect } from 'react'

const expenses = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2022, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2024, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2022, 5, 12),
	},
]

function App() {
	const [newExpenses, setNewExpenses] = useState(expenses)
	console.log(newExpenses);

	const getData = async () => {
		try {
		  const response = await fetch("https://farebase-bc4b0-default-rtdb.firebaseio.com/farebase.json"
		  );
		  const data = await response.json();
		  const newArray = [];
	
		  for (const key in data) {
			newArray.push({
			  
			  title: data[key].enteredTitle,
			  amount: data[key].enteredAmount,
			  date: new Date(data[key].enteredDate) ,
			  
			});
		  }
		  setNewExpenses([...newArray,...expenses]);
		} catch (error) {
		  // toasify
		}
	  };

	  useEffect(() => {
		getData()
	  },[])

	const addExpenseHandler =  (expense) => {
  
		setNewExpenses((prevExpense) => { 
			return [ ...prevExpense,expense]
		})
	}

	return (
		<div className='App'>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={newExpenses} />
		</div>
	)
}

export default App
