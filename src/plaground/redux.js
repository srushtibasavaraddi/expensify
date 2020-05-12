import {createStore} from 'redux';

const inc=(({incBy=1}={})=>({
    type:'INC',
    incBy
}));

const dec=({decBy=1}={})=>(
    {
        type:'DEC',
        decBy
    }
);
//Reducer- manages actions
//1.must be pure function
//2. never change state or action
const costReducer=(state={count:0},action)=>{
    switch(action.type){
        case 'INC':
            return {
                    count:state.count+action.incBy
                }
        case 'DEC':
            return {
                count:state.count-action.decBy
            }
        default:
            return state
    }
}

const store=createStore(costReducer);

const unsub=store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(inc({incBy:5}));
store.dispatch(dec({decBy:4}));
unsub();
