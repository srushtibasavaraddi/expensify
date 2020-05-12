import moment from 'moment';

const filterReducerDefaultState={
    text:'',
    sortBy:'amount',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
};

export default (state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'CNG_TEXT':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SORT_AMT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'STR_DATE':
            return {
                ...state,
                startDate:action.startDate
            }
        case 'END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }
        default:
            return state
    }
}