import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense= (expense) => ({
    type:"ADD_EXP",
    expense
});

export const startAddExpense = (expenseData={})=>{
    return (dispatch,getState) => {
        const uid=getState().auth.uid
        const {
            description='',
            note='',
            amount=0,
            createdAt=0
        } = expenseData;

        const expense={description,note,amount,createdAt};
        database.ref(`users/${uid}/expenses`).push(expense).then((ref=>{
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

export const startRemoveExpense = (id)=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid
        database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
        }).catch((e)=>{
            console.log("Error!!",e);
        })

        dispatch(removeExpense({id}));
    }
}
export const editExpense=(id,updates={})=>(
    {
        type:'EDIT_EXP',
        id,
        updates
    }
);

export const startEditExpense = (id,updates={})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid
        database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
            // console.log("updated!")
        }).catch((e)=>{
            console.log("Error!!",e);
        })

        dispatch(editExpense(id,updates))
    }
}

export const setExpenses = (expense)=>({
    type:"SET_EXPENSES",
    expense
})

export const startSetExpenses=()=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
                const expenses=[];
                snapshot.forEach((item)=>{
                expenses.push({
                    id:item.key,
                    ...item.val()
                });
            });
            dispatch(setExpenses(expenses));  
        });
    }
};