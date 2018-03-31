import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class App1 extends Component{
    render(){
        return(
            <div>
                <h1>App1</h1>
                <ul>
                    <li><Link to={`/app2/23`}>app2</Link></li>
                </ul>    
            </div>    
        )
    }
}
export default App1;