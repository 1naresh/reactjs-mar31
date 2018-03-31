import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class App2 extends Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params.id)
    }
    render(){
        return(
            <div>
                <h1>App2</h1>
                <ul>
                    <li><Link to={`/`}>app1</Link></li>
                </ul>
            </div>    
        )
    }
}
export default App2;