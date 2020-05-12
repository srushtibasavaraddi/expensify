import uuid from 'uuid';

export const addExpense= ({
    description='',
    note='',
    amount=0,
    createdAt=0
    } = {}
) => ({
    type:"ADD_EXP",
    expense:{
        id:uuid(),
        amount,
        description,
        note,
        createdAt
    }
});

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