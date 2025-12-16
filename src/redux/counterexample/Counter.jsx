import { useDispatch, useSelector } from "react-redux"
import { DEC, INC } from "../../features/CounterSlice"

export const Counter=()=>{
    let Count=useSelector(state=>state.Count)
    let dispatch=useDispatch()
    return(
        <>
       <center className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-100">
  <h1 className="text-4xl font-bold text-gray-800">
    Count: <span className="text-blue-600">{Count}</span>
  </h1>

  <div className="flex gap-4">
    <button
      onClick={() => dispatch(INC())}
      className="px-6 py-2 text-xl font-semibold text-white bg-green-500 rounded-2xl shadow-md hover:bg-green-600 active:scale-95 transition"
    >
      +
    </button>

    <button
      onClick={() => dispatch(DEC())}
      className="px-6 py-2 text-xl font-semibold text-white bg-red-500 rounded-2xl shadow-md hover:bg-red-600 active:scale-95 transition"
    >
      -
    </button>
  </div>
</center>

        </>
    )
}