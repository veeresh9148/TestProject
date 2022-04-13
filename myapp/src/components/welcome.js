import React from 'react'
/*function First(){
    return <h1>Hello</h1>
}
export default First;*/

const First = () => {
    return (
        <div>
            <h1>Composite Component Example</h1><hr></hr>
            <h3>Hi This is My First Component</h3>
            <p> This is react application</p>
        </div>
    )
}

const Second = () => {
    return (
        <div>
            <h3>Hi This is My Second Component</h3>
            <p> Hello World...</p>
        </div>
    )
}
const Third = () => {
    return (
        <div>
            <First />
            <Second />
        </div>
    )
}
export default Third;
// import React,{Component} from 'react'
// class First extends Component{
//     render(){
//         return <h1>Hi Hello World...</h1>
//     }
// }
// class Second extends Component{
//     render(){
//         return <h1>Hi Hello World...</h1>
//     }
// }
// class Third extends Component{
//     render(){
//         return
//     <div className="App">
//       <First />
//       <Second />
//     </div>
        
//     }
// }
// export default Third