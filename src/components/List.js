import React from 'react';
import { Card } from './Card';


export class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tasks : [],
            task : "",
            description : ""
        }
    }


    componentDidMount= () =>{
        let storage = window.localStorage;
        this.setState({tasks: JSON.parse(storage.getItem("tasks"))});
        
    }

    pushNewTask = () =>{
        let task = this.state.tasks
        task.push({title:this.state.task,content:this.state.description});
        this.setState({
            tasks : task,
            task: "",
            description : ""
        });
        window.localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }

    
    updateTask = (e) => {
        this.setState({task:e.target.value})
    }

    updateDesc = (e) => {
        this.setState({description : e.target.value})
    }

    render() {
        return (
            <div style={{minWidth:"80%",maxWidth:"80%"}}>
                <div className="w-full ">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Task Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={this.state.task} id="task" type="text" placeholder="Task" onChange={this.updateTask}/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Description
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={this.state.description} id="Description" placeholder="Description" onChange={this.updateDesc}/>
                    </div>
                    <div className="flex items-center justify-between">
                        {this.state.task.length ? 
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.pushNewTask}>
                            Create
                            </button> 
                            : null}
                    </div>
                    </form>
                </div>



                <div >
                {
                    this.state.tasks.map((props, id) =>{
                        return <Card key={id} title={props.title} content={props.content}/>}
                    )
                }
                </div>
                {/* <button 
                style={{position:"fixed",bottom:"2%",right:"3%"}}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Add Task
                </button> */}
            </div>

        )
    }
}

  