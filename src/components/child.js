import React,{Component} from 'react'
class Child extends Component{
    constructor(props){
        super(props)
        this.doSome=this.doSome.bind(this)
    }
    doSome(){
        console.log( "child")
        this.props.doSome1()
    }
    render(){
        return(
            <div>
                <h1>CHILD</h1>
                <button type="button" onClick={this.doSome}>dosome</button>
            </div>
        )
    }
}
export default Child;