
import { useState } from "react"
import { usePromiseTracker } from "react-promise-tracker";

import { trackPromise } from 'react-promise-tracker';
export default function A(props){
    const [codeA,setCodeA]=useState()
    const [place,setPlace]=useState()
    const handlecodeChange = (event) => {
        const code = event.target.value
        
        setCodeA({code:code})
        

    }
    const onSubmit = (event) => {
        trackPromise(
            fetch('https://athena-heist.herokuapp.com/api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(codeA)
            }).then((response) => {
                return response.json();
              }).then((response)=> {
                // JSON.parse(response)
                console.log(response)
                if(response.status==200){
                  
                    setPlace(response.text)
                }
            }));

        event.preventDefault();




    }

    return(
        <div className="min-h-screen bg-yellow-400">
            
            <div className="text-black min-h-screen grid place-items-center my-auto">
            <form onSubmit={onSubmit} className="bg-transparent text-white">
                <div className="label flex items-center justify-center">This is the A page</div>
                <input required className='input bg-white bg-opacity-75 rounded-md p-2 w-full text-center' type="text" name="code" placeholder='code' onChange={handlecodeChange} />
                <button className="btn bg-yellow-800" type="submit">submit</button>
            </form>
            <div>
                {place}
            </div>
            </div>
        </div>
    )
}