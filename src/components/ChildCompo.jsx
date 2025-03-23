import React, { forwardRef , useImperativeHandle} from 'react'

const ChildCompo = forwardRef(({ userDetails, userOnedata, userList, onButtonClick, sendMsg }, ref) => {


    const childFunction = () =>{
        alert ("hello from  the child compoent")
    };

    useImperativeHandle(ref , () => ({
        callChildFunction : childFunction,
    }));

    


    return (
        <>
        <h6>hello m child compoent from parent</h6>
        <p>User name :{userDetails.name}</p>
        <p>User name one :{userOnedata.name || "NA"}</p>
        <ul>
            {
                userList.map((user) =>(
                    <li key={user.id}>{user.name}</li>

                ))
            }
        </ul>
        <button onClick={() => onButtonClick("Mashoom SHarma")}> click me to get data from the parent</button>
        <button onClick={() => sendMsg("Diyyaaaa SHarma")}> click met</button>


        </>
    );
});
export default React.memo(ChildCompo);