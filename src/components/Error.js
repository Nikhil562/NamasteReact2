import {useRouteError} from 'react-router-dom'
// its a hook which gives info of the error 
const Error =()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOps</h1>
            <h2>Something went Wrong!!</h2>
            <h2>{err.status +":"+err.statusText}</h2>
        </div>
    )
}
export default Error