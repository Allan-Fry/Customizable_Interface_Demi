
import { Component } from "react";
import { Button, Container, UncontrolledCollapse } from "reactstrap";
import AppDragDropDemo from "../AppDragDropDemo/AppDragDropDemo";
import ExpandableLayout from "../ExpandableLayout/ExpandableLayout";




export default class EditPage extends Component{

    state = {
        gridSpace: [
            {
                pageName:"firstPage",
                rowID:"0",
                area:[{
                    colName:"col1",
                },
                {
                    colName:"col2"
                },
                {
                    colName:"col3"
                }
                ]
            },
            {
                pageName:"firstPage",
                rowID:"1",
                area:[{
                    colName:"col1"
                },
                {
                    colName:"col2"
                },
                {
                    colName:"col3"
                }
                ]
            },
            {
                pageName:"firstPage",
                rowID:"2",
                area:[{
                    colName:"col1"
                },
                {
                    colName:"col2"
                },
                {
                    colName:"col3"
                }
                ]
            }


        ],
        tasks: [
            {
                name:"Learn Angular",
                category:"unPlaced",              
                bgcolor: "yellow"
            },
            {
                name:"React",              
                category:"unPlaced",              
                bgcolor:"pink"
            },
            {
                name:"Vue",              
                category:"unPlaced",              
                bgcolor:"skyblue"}]
    }
    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }
    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");

        let tasks = this.state.tasks.filter((task) => {
            if (task.name === id) {
                task.category = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }    
    addNewCol = (e) =>{
        let previousArea = this.state.gridSpace[e].area;
        let nextID = previousArea.length + 1;
        let nextColName = "col" + nextID;
        console.log(nextID);
        previousArea.push(
            {colName:nextColName}
        )
        console.log(previousArea);
        this.setState(
        previousArea
        )
       console.log(this.state);

    }

    render(){


        return(

                <Container>
                    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                        Toggle
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                        <AppDragDropDemo
                        draggable
                        tasks={this.state.tasks}
                        onDragStart = {this.onDragStart}
                        >
                        </AppDragDropDemo>
                    </UncontrolledCollapse>
                    <ExpandableLayout
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}
                    gridSpace={this.state.gridSpace}
                    addNewCol={this.addNewCol}
                    >

                    </ExpandableLayout>
                </Container>

        );


    };



}