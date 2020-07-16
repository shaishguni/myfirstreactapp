import React, { Component } from 'react'

class Test extends Component {

    // titlesdata;


    state  = {
        todos: []
    }

    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => this.setState({
            todos: todos
        }));
        
    }


    // componentWillMount(){
    //     console.log('Component will Mount')
    // }

    // componentDidUpdate(){
    //     console.log('Component did Update')
    // }
    // componentWillUpdate(){
    //     console.log('Component will Update')

    // }
    // componentWillReceiveProps(nextProps, nextState){
    //     console.log('componentWillReceiveProps')

    // }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     return null;
    // }
    // getSnapshotBeforeUpdate(prevProp, peevState){
    //     console.log('Get Snapshot Before Update')
    // }

    render() {
        const{todos} = this.state;

        return (
            <div>
                {
                    todos.map((todo, id) => <li>{id+1}. {todo.title}</li>)
                }
               
            </div>
        )
    }
}

export default Test
