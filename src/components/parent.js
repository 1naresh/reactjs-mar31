import React,{Component} from 'react';
import Child from './child'
class Parent extends Component{
    constructor(props){
        super(props)
        this.doSome2=this.doSome2.bind(this)
    }
    doSome2(){
        console.log("parent")
    }
    render(){
        return(
            <div>
                <h1>Parent</h1>
                <Child doSome1={this.doSome2} />
            </div>
        )
    }
}
export default Parent;