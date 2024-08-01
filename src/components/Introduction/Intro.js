import React from 'react';

function Intro()
{
    const FirstName= 'Rutuja';
    const LastName= 'Bhite';

    const getFullName= (FirstName, LastName)=> `${FirstName} ${LastName}`

    const placeholder= " Enter your Data";

    const detailInputBox= <input placeholder={placeholder} autoComplete></input>

  return (
    <div classname="Intro">
    <p>Full Name : {getFullName(FirstName, LastName)}</p>
    
    <input placeholder={placeholder}></input>
    {detailInputBox}
    </div>

  )
}

export default Intro