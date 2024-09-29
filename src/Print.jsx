import "./index.css";

export default function Print() {
    return (
        <>
        <div className="min-h-screen w-full text-white bg-slate-900 grid lg:grid-cols-3 py-5">
            <div className="bg-gray-700 col-span-1 mx-5 row-span-full p-5 rounded-md">
            <input 
             type="text" 
             placeholder="Select Term"
             className="p-2 rounded-md focus:outline-none bg-slate-950 text-center w-full h-14 text-white"
            />
            <input 
             type="text" 
             placeholder="Subject Name"
             className="my-5 rounded-md focus:outline-none bg-slate-950 text-center w-full h-14 text-white"
            />
            <div className="flex items-center w-full">
            <input 
             type="text" 
             placeholder="Select Term"
             className="rounded-md focus:outline-none bg-slate-950 text-center w-1/2 h-14 text-white mx-2"
            />
            <input 
             type="text" 
             placeholder="S.Y"
             className="rounded-md focus:outline-none bg-slate-950 text-center w-1/2 h-14 text-white"
            />
            </div>
            <input 
             type="text" 
             placeholder="Instruction"
             className="my-5 rounded-md focus:outline-none bg-slate-950 text-center w-full h-14 text-white"
            />
            <input 
             type="text" 
             placeholder="Direction"
             className=" rounded-md focus:outline-none bg-slate-950 text-center w-full h-14 text-white"
            />

        <div className="bg-slate-950 my-5 text-center p-5">
        <h1 className="p-1">Question type</h1>
        <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-indigo-600" />
            <span className="ml-2">Multiple Choice</span>
        </label>
  
        <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-indigo-600" />
            <span className="ml-2">True or False</span>
        </label>

        <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-indigo-600" />
            <span className="ml-2">Essay</span>
        </label>
  
        <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-indigo-600" />
            <span className="ml-2">Identification</span>
        </label>
        </div>

        <button className="w-full h-14 rounded-md bg-red-600 text-center text-white">Print</button>
        
            </div>
            <div className="bg-gray-700 col-span-2 mx-5 row-span-full rounded-md">
                {/*Exam layout ni nga part*/}
                <h2>hi</h2>
            </div>
        </div>
        </>
    )
}