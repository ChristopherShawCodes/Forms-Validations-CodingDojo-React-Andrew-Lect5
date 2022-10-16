import React,{useState} from 'react'

const Form = () => {
    const [firstName,setFirstName] = useState(" ")
    const [lastName,setLastName] = useState(" ")
    const [age,setAge] = useState(" ")
    const [city,setCity] = useState(" ")


    const obj = {
        firstName,
        lastName,
        age,
        city
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        //basic validation, if all of these fields have values in them, then we will proceed
        if(firstName && lastName && city && age){
            if(firstName.length >3){
                console.log(obj)
    }else{
        console.log('Bad data , First Name doesnt meet the requirements.')
        setFirstName('')
        setLastName('')
        setCity('')
        setAge('')
    }
    }else{
        console.log('Bad data , do not pass go, do not collect $200.')
        setFirstName('')
        setLastName('')
        setCity('')
        setAge('')
    }
}



  return (
    <div className='form col-4 mx-auto' onSubmit={handleSubmit}>
    <form className='form'>
        <label className='form-label'  >First Name:</label>
        <input value={firstName} onChange={(e)=> setFirstName(e.target.value)}  className='form-control' type="text"/>
        <label className='form-label' >Last Name:</label>
        <input value={lastName} onChange={(e)=> setLastName(e.target.value)} className='form-control' type="text"/>
        <label className='form-label'  >Age:</label>
        <input value={age} onChange={(e)=> setAge(e.target.value)} className='form-control' type="text"/>
        <label className='form-label'  >City:</label>
        <input value={city} onChange={(e)=> setCity(e.target.value)} className='form-control' type="text"/>
        <button className='btn btn-primary mt-3' >Submit</button>
    </form>


    </div>
  )
}

export default Form