import { useState } from "react"
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';
export default function D(props){
    const [codeD,setCodeD]=useState()
    const [place,setPlace]=useState()
    const handlecodeChange = (event) => {
        const code = event.target.value

        setCodeD({code:code})

    }
    const onSubmit = (event) => {
        trackPromise(
            fetch('/Dapi', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(codeD)
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
        <div className="min-h-screen bg-green-400">
            
            <div className="text-black min-h-screen grid place-items-center my-auto">
            <form onSubmit={onSubmit} className="bg-transparent text-white grid place-items-center">
                <div className="label flex items-center justify-center">Is the creator and, historically, the lead developer of the Linux kernel</div>
                <input required className='input bg-white bg-opacity-75 rounded-md p-2 w-full text-center text-black' type="text" name="code" placeholder='code' onChange={handlecodeChange} />
                <div className="bg-black bg-opacity-90 rounded my-6">
                <button className="btn p-3" type="submit" >submit</button>
                </div>
            </form>
            </div>
            <div>
                {place}
            </div>
        </div>
    )
}