export const editText=(text='')=>({
    type:'CNG_TEXT',
    text
});

export const sortByDate=()=>({
    type:'SORT_DATE'
});


export const sortByAmount=()=>({
    type:'SORT_AMT'
});

export const setStartDate=(startDate)=>({
    type:'STR_DATE',
    startDate
});

export const setEndDate=(endDate)=>({
    type:'END_DATE',
    endDate
});