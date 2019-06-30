import React, { Component } from 'react'
import axios from 'axios';

class Entries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 1,
            i: 0,
            list: [],
            listId: ''
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
        this.deleteEntry = this.deleteEntry.bind(this)
    }

    componentDidMount() {
        axios
            .get('/api/entries')
            .then(res => {
                this.setState({ list: res.data })
                console.log(res.data)
            })
            .catch(err => {
                console.log('err from server', err)
            })
    }

    handleNext() {
        if (this.state.i < this.state.list.length - 1) {
            let i = this.state.i + 1
            let listId = this.state.list[i].id
            console.log(`List ID ${listId} `)
            
            this.setState({
                i
            })
            this.setState({listId})
            console.log(this.state.i)
            // console.log(this.state.list.length)
        }
    }

    handlePrevious() {
        if (this.state.i > 0) {
            let i = this.state.i - 1
            let listId = this.state.list[i].id
            console.log(`List ID ${listId} `)
            console.log(this.state.i)
        
            this.setState({
                i
            })
            this.setState({listId})
        }
        
    }
    // delete and update reqs happen here

    updateEntry(){
    let {listId} = this.state
    let id = listId
    axios
    .put(`api/entries/${id}`).then(res => {
        console.log(res.data)
        this.setState({list: res.data})
        .catch(err => console.log(`Couldn't update..`, err))
    })
    }

    deleteEntry () {
    let {listId} = this.state
    let id = listId 
    axios
    .delete(`/api/entries/${id}`).then(res => {
        console.log(res.data)
        this.setState({list: res.data})
    })
    .catch(err => console.log(`Couldn't delete..`, err))
    }

    

    readEntry() {
        let { list, i } = this.state
        return (
            <div id='entryMain'>
                <div id='dateTime'>{list[i].date}
                    <div> {+i + 1}/{this.state.list.length}</div>
                </div>


                <div id='accTask'>
                    <hr />
                    <h3><i className='icon far fa-check-square checkIcon' /><u>Completed Tasks</u><i className='icon far fa-check-square entryIconRight' /></h3>
                    {/* <div id='entryTasks'></div> */}
                    <ul id='entryTasks'>
                        <li> {list[i].accTasks[0]} </li>
                        <li> {list[i].accTasks[1]} </li>
                        <li> {list[i].accTasks[2]} </li>
                        <li> {list[i].accTasks[3]} </li>
                        <li> {list[i].accTasks[4]} </li>
                        <li> {list[i].accTasks[5]} </li>
                        <li> {list[i].accTasks[6]} </li>
                        <li> {list[i].accTasks[7]} </li>
                        <li> {list[i].accTasks[8]} </li>
                        <li> {list[i].accTasks[9]} </li>
                    </ul>
                </div>
                <hr />
                <div id='addThoughts'>
                    <h3 id='addThotHeader'><u>Additional Thoughts</u></h3>
                    <div id='addThoughtsBlock'>
                        {list[i].thought}
                    </div>

                </div>
                <div className="button-row">
                    <button className="nextPrev" onClick={this.handlePrevious}>{'< Previous'}</button>
                    <div className="middle-buttons">
                        <button className="buttons" onClick={this.updateEntry} >Edit</button>
                        <button className="buttons" onClick={this.deleteEntry} >Delete</button>
                    </div>
                    <button className="nextPrev" onClick={this.handleNext}>{'Next >'}</button>
                </div>
            </div>


        )

    }

    /* //     <div>
    //     <div>
    //     {list[i].date}
    //     </div>
    //     {list[i].id}
    //     {list[i].accTasks}
    //     {list[i].thoughts}
    // </div> */

    render() {

        return (

            <section id='entryDiv'>
                {this.state.list[0] ? this.readEntry() : null}
            </section>

        )
    }
}




export default Entries