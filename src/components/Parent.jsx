import React , { useState , useEffect, useCallback , useRef} from 'react';

import ChildCompo from '../components/ChildCompo'
function Parent(){
    const [user, setUser] = useState(null);
    const [message , setMessage] = useState("No message yet");
    const isApiCalled = useRef(false);
    const ChildRef = useRef();

    const userData  = {
        id:1,
        name:"SHivangi",
        age:"90",
        email:"abc@gmail.com",
        contact:"989800",
    }
    const userList = [
        { id:5, name:"abcdd"},
        {id:8, name:"kloo"},
    ];

    useEffect(() =>{
        if(isApiCalled.current) return;
        isApiCalled.current = true;
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>response.json())
        .then((data) => 
            setUser(data));
        console.log("called din the useEfct");

    },[]);

    const handleClick = useCallback((name) =>{
        alert(`Hello ${name} , this is the function from parent!`)
    },[]);

    const updateMessage = (newMsg) => {
        alert(`Hello ${newMsg} , this is the function from parent in child!`)
        setMessage(newMsg)
    };
    const callChildFunction = () =>{
        if(ChildRef.current){
            ChildRef.current.callChildFunction();
        }
    };

  const  handleClicks = () =>{
        if(ChildRef.current){
            ChildRef.current.callChildFunction()
        }
    }



    return (
        <div>
            <h5>Helo m parent component</h5>
            <br/>
            <button onClick={handleClicks}>Call Function in Child</button>

            <p>message from child compoent {message}</p>
            {/* <ChildCompo userDetails={userData}/> */}
            {user ?
             <ChildCompo
             ref={ChildRef}
              userDetails={userData}
             userList={userList}
             userOnedata ={user}
             onButtonClick={handleClick}
             sendMsg = {updateMessage}
             /> 
             : <p>Loading...</p>}
        </div>
    );
};
export default Parent;