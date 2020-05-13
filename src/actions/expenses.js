import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense= (expense) => ({
    type:"ADD_EXP",
    expense
});

export const startAddExpense = (expenseData={})=>{
    return (dispatch) => {
        const {
            description='',
            note='',
            amount=0,
            createdAt=0
        } = expenseData;

        const expense={description,note,amount,createdAt};

        database.ref('expenses').push(expense).then((ref=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        }));
    };
};

export const removeExpense= ({id}={})=>(
    {
        type:"REM_EXP",
        id
    }
);

export const editExpense=(id,updates={})=>(
    {
        type:'EDIT_EXP',
        id,
        updates
    }
);