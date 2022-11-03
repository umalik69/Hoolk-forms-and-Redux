const initialData={
    list:[]
}
const reducers=(state=initialData,action)=>{
    switch(action.type){
        case "ADD":
            const {id, data}=action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data

                    }
                ]
            }

            case "DLT":
            const newList= state.list.filter((elem)=> elem.id !== action.payload.id)
            console.log(action.payload.id)
            
                return{
                    
                    ...state,
                    list: newList
                }
            
            default: return state;
    }
}
export default reducers