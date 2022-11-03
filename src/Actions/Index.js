export const ADD=(data)=>{
    return{
        type:"ADD",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const DLT=(id)=>{
    return{
        type:"DLT",
        payload:{
        id
        }
    }
}