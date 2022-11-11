import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({ expenses }) => {
	
	if (expenses.length === 0) {
		return <h1 className='expenses-list__fallback'>No Expense Found</h1>
	}
	return (
		<ul className='expenses-list'>
			{expenses.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						expenseTitle={expense.title}
						expensePrice={expense.amount}
						expenseDate={expense.date}
					/>
				)
			})}
		</ul>
	)
}

export default ExpensesList
