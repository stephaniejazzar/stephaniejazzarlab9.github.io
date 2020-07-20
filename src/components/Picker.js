//https://www.youtube.com/watch?v=ea_k66GynCg&list=PLpG9MHuD988g-7vniIEs0yk8bmxL35v7c&index=13
import React, { Component } from 'react';
import Calendar from 'react-calendar'

export default class Picker extends Component {
    state = {
        date: new Date()
    }
    onChange = date =>{
        this.setState({
            date:date
        })
    }
    
    render() {
        return (
            <div style={{boxShadow: "5px 5px 25px"}}>
            <Calendar 
                onChange={this.onChange}
                
            />
           <p className="validate">Chosen Date: {this.state.date.toLocaleDateString()}</p> 
            <button className="validate">OK</button>
                
            </div>
        )
    }
}
