import React, { Component } from 'react';
import '../css/myStyle.css';
import Top from '../Top';

class myClasses extends Component {
        constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    };

    loadData(){
        fetch('http://icarus.cs.weber.edu/~db88485/eportfolio/v1/user/Daniel/class')
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
            <div className="myClasses">
                <Top />
                <h2> Classes I have Taken:</h2> 
                <div className="ClassesView">
                  {
                      
                      this.state.posts.map(e=>{
                          var item = JSON.parse(e);
                          
                          //console.log(item);


                          return <div key={item.classid} className="Item">
                                    <input type="hidden" value={item.classid} />
                                    <b>Class Name:</b> {item.classname }<br />
                                    <b>Class Description:</b> {item.classdescription }<br />
                                    <b>School:</b> {item.school}<br />
                                    <b>Semester:</b> {item.semester} {item.year}<br />
                                    <b>Class Number:</b> {item.classnumber}<br /> 
                                    <b>Class Goal:</b> {item.goal}<br /> 
                                    <b>Class Outcome:</b> {item.outcome}<br /> 
                                    <b>Grade:</b> {item.grade}<br />
                                    <br />
                                </div> 
                          
                      }) 
                  }
                </div>
            </div>
        );
    }
}

export default myClasses;