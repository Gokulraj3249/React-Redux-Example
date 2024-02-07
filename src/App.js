import './App.css';

import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { increment,decrement,isLogged } from './actions';

function App(state) {

const counter=useSelector((state)=>state.counter)
//useSelector -allow access to the state stored in Redux store
const logged =useSelector((state)=>state.login)
const dispatch=useDispatch((state))
//useDispath -aloow React components to dispatch action to Redux store
let signin_status=""

if(logged ===false){
  signin_status="Sign_in"
}
else{
  signin_status="Sign_out"
}

return(
  <div className='App'>
    <h1>Welcome to React Redux</h1>
    <h2>Counter:{counter}</h2>

    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(isLogged())}>{signin_status}</button>
    {logged?<p>This is valuable information</p>:<p>Please login first</p>}
  </div>
)

}

export default App;
