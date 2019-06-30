import React, { Component } from 'react'
import axios from 'axios';

export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputStr: '',
            accTasks: [],
            checked: false,
            thought: '',
            date: ''

        }
    }

    // componentDidMount(){
    //     this.getDate()
    // }

    inputChange = inputStr => {
        this.setState({ inputStr })
        console.log({ inputStr })
    }

    handleThoughtChange = thought => {
        let date = new Date().toDateString()
        this.setState({ date })
        this.setState({ thought })
        console.log({ thought })
        console.log({date})
    }

    handleCheckChange = e => {
        this.setState({ checked: !this.state.checked })
        console.log(this.state.checked)
    }

    addToTasks = input => {
        let taskArray = this.state.accTasks

        taskArray.push(input)

        this.setState({
            accTasks: taskArray,
            inputStr: '',
        })
    }

    //add must happen here.

    // addEntry = () => {
    // let newEntry = {
    //     date: this.state.date,
    //     accTasks: this.state.accTasks,
    //     thought: this.state.thought,
    // }
    //    axios.post('/api/entries', newEntry)
    //    .then(res => {
    //        console.log('add fired')
    //        console.log(res.data)
    //    }).catch(err => {
    //     console.log('err from server', err)
    // })
    // }

    addEntry = () => {
        axios.post('api/entries', {
            date: this.state.date,
            accTasks: this.state.accTasks,
            thought: this.state.thought
        }).then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log('err from server', err)
        })
    }



   

    render() {
        return (
            <div className='listStyle'>
                <h1 className='header'> What will you do to better yourself today?</h1>

                <input onChange={(e) => this.inputChange(e.target.value)} value={this.state.inputStr} className='inputGoals' type='text' placeholder='Enter goal...' />

                <button onClick={() => this.addToTasks(this.state.inputStr)} className='btn'>Add Task</button>

                <ul id='listItem'>
                    {this.state.accTasks.map((val, i) =>
                        <li className='taskItem' key={i}><label><input id='checkBox' type='checkbox' onChange={this.handleCheckChange} />{val}</label></li>)}
                    {console.log(this.state.accTasks)}
                </ul>

                <textarea id='inputThoughts' type='text' placeholder='Additional Thoughts..' wrap='soft' onChange={(e) => this.handleThoughtChange(e.target.value)} />
                <button className='btn' onClick={() => this.addEntry()}>Save Entry</button>
            </div>
        )
    }
}


