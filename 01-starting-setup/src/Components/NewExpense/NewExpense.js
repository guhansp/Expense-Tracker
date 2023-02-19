import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {

    const [isEdit,SetisEdit]=useState(false);

    const saveExpenseDataHandler =(eneteredExpenseData) =>
    {
        const expenseData= {
            ...eneteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);

    }
    const onEditClickHandler = () =>
    {
        SetisEdit(true)

    }

    const stopEditingHandler = () =>
    {
        SetisEdit(false)
    }


    return <div className="new-expense">
        {!isEdit && <button onClick={onEditClickHandler}>Add New Expense</button>}
        {isEdit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} ></ExpenseForm>}
        

    </div>
};

export default NewExpense;
