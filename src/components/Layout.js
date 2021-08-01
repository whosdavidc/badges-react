import React from 'react';
import Navbar from './Navbar';
// class Layout extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p>Layout</p>   
//             </div>
//         )
//     }
// }
 
function Layout (props){
    return (
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;