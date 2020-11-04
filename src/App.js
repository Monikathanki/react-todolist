import React, { Component } from 'react'
import AddItmeForm from './AddItemForm'

class App extends Component {
    state = {
        todoLists: [
            { name: 'apples', checked: false },
            { name: 'oranges', checked: true },
            { name: 'bread', checked: false },
        ]
    }

    addItem = (event) => {
        event.preventDefault();
        let newList = {
            name: event.target.list.value,
            checked: false
        };
        let currentLists = this.state.todoLists;
        currentLists.push(newList);
        this.setState({
            todoLists: currentLists
        });

    }

    deleteItem = (event) => {
        let itemToRemove = event.target.value;
        let currentLists = this.state.todoLists;
        let indexToRemove = currentLists.findIndex((item) => {
            if (item === itemToRemove) {
                
                return item;
            } 
            
        });
        currentLists.splice(indexToRemove, 1)
        this.setState({
            todoLists: currentLists
        })
        

    }
    checkItem = (event) => {
        let itemToCheck = event.target.value; 
        let currentLists = this.state.todoLists;
        currentLists.find(item => {
            if (item === itemToCheck) {
                item.checked = !item.checked
            }
            return item
        })

        this.setState({
            todoLists: currentLists
        })
        
        


    }
    render() {
        return (
            <div>
                <header>
                    <h1>Todo List</h1>
                </header>
                <AddItmeForm addItem={this.addItem} /> {
                    this.state.todoLists.map((item, i) => {
                        return (
                            <h2
                                key={i}
                                style={{
                                    textDecoration: item.checked ? 'line-through' : null,
                                }}
                            >
                                {item.name}
                                <button onClick={this.deleteItem}
                                value= {item}
                                >Delete</button>
                                <button
                                 type="sumbit"    
                                value={item}
                                onClick={this.checkItem}     
                                >Check</button>
                            </h2>
                        )
                    })
                }
            </div>
        )
    }
}

export default App


