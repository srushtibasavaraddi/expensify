const expenseReducerDefaultState=[];
export default (state=expenseReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXP':
            return [...state,action.expense];
        case 'REM_EXP':
            return state.filter(({id})=>id!==action.id);
        case 'EDIT_EXP':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    console.log(action);
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense
                }
                
            });

        case 'SET_EXPENSES':
            return action.expense
        default:
            return state
    }
}
