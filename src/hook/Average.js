import {useCallback, useMemo, useReducer, useRef, useState} from 'react'
const getAverage =numbers =>{
    console.log('평균 값 계산 중 ---');
    if(numbers.length===0){
        return 0
    }
    const sum= numbers.reduce((a,b)=> a+b)
    return sum/numbers.length
}

const Average = ()=>{
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputElement = useRef(null)
    const onChange =useCallback((e)=>{
        setNumber(e.target.value)
    },[])
    const onInsert = useCallback((e)=>{
        const newList = list.concat(parseInt(number))
        setList(newList)
        setNumber('')

        inputElement.current.focus()
    },[number, list])

    const avg = useMemo(()=> getAverage(list), [list])
    return(
        <div>
            <input value ={number} onChange ={onChange} ref={inputElement}/>
            <button onClick={onInsert}> 등록 </button>
            <ul>
                {list.map((value, index) => 
                    <li key={index}>{value}</li>
                )}
            </ul>
            <div>
                <b>평균 값 : </b>{avg}
            </div>
        </div>
    )
}


export default Average;