import React, { Component } from 'react';
//import aGoal from '../js/goals';
import '../css/myStyle.css';
import Top from '../Top';

class Goals extends Component  {
    
    constructor(props){
        super(props);
        
        this.state = {
            posts: [],
        }
    };
    
    loadData(){
        fetch('http://icarus.cs.weber.edu/~db88485/eportfolio/v1/user/Daniel/goal')
                        .then(res => {
                            return res.json();
                        })
                        .then(res => {
                            this.setState({ posts: res.map(e=>e) });
                        })
                        ;
    };

    componentDidMount() {
        this.loadData();
    };

    render() {
        return (
            <div className="Goals">
                <Top />
                <h2> Goals I Have: </h2> 
                <div className="GoalsView">
                  {
                      
                      this.state.posts.map(e=>{
                          var item = JSON.parse(e);
                          //console.log(item);
                          //this.props.data.item = {...item};

                          return <div key={item.goalid} className="Item">
                                    <input type="hidden" value={item.goalid} />
                                    <b>Goal Name:</b> {item.goalname }<br />
                                    <b>Goal Description:</b> {item.goaldescription }<br />
                                    <b>Target Date:</b> {item.targetdate}<br /> 
                                    <b>Completed Date:</b> {item.completedate}<br />
                                    <br />
                                </div> 
                                
                            
                          
                      }) 
                  }
                </div>
            </div>
        );

    }
}

export default Goals;