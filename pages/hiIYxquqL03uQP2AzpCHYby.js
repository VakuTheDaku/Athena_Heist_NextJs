import { useState } from "react"

export default function D(props){
    const [codeD,setCodeD]=useState()
    const handlecodeChange = (event) => {
        const code = event.target.value

        setCodeD(code)

    }

    return(
        <div className="min-h-screen bg-green-400">
            
            <div className="text-black min-h-screen grid place-items-center my-auto">
            <form className="bg-transparent text-white">
                <div className="label flex items-center justify-center">This is the D page</div>
                <input required className='input bg-white bg-opacity-75 rounded-md p-2 w-full text-center' type="text" name="code" placeholder='code' onChange={handlecodeChange} />
              
            </form>
            </div>
        </div>
    )
}