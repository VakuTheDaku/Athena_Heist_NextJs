import { useState } from "react"
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';
export default function C(props){
    const [codeC,setCodeC]=useState()
    const [place,setPlace]=useState()
    const handlecodeChange = (event) => {
        const code = event.target.value

        setCodeC(code)

    }
    const onSubmit = (event) => {
        trackPromise(
            fetch('/Capi', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(codeC)
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
        <div className="min-h-screen bg-red-400">
            
            <div className="text-black min-h-screen grid place-items-center my-auto">
            <form onSubmit={onSubmit} className="bg-transparent text-white">
                <div className="label flex items-center justify-center">This is the C page</div>
                <input required className='input bg-white bg-opacity-75 rounded-md p-2 w-full text-center' type="text" name="code" placeholder='code' onChange={handlecodeChange} />
                <div className="bg-black bg-opacity-90 rounded my-6">
                <button className="btn p-3" type="submit">submit</button>
                </div>
            </form>
            <div>
                {place}
            </div>
            </div>
        </div>
    )
}