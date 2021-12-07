import {useReducer} from "react"

function reducer(state, action){
    return {
        ...state,
        [action.name]:action.value
    }
}

const Info =()=>{

    const [state, dispatch] =useReducer(reducer, {name:'', nickname:''})
    const {name, nickname} = state
   

    const onChange =(e)=>{
        console.log(e.target)
      dispatch(e.target)
    }
  
    return(

        <div>
            <>
            <input name="name"value={name} onChange ={onChange}/>
            <input name="nickname" value={nickname} onChange ={onChange}/>
            </>
            <div>
            <b>이름 : </b> {name}
            </div>
            <div>
            <b>닉네임 : </b> {nickname}
            </div>
        </div>
    )
}
export default Info;