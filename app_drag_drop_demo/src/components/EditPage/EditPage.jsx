
import { Component } from "react";
import { Button, Col, Container, Toast, ToastHeader, UncontrolledCollapse } from "reactstrap";
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
                    content:[]
                },
                {
                    colName:"col2",
                    content:[]
                },
                {
                    colName:"col3",
                    content:[]
                }
                ]
            },
            {
                pageName:"firstPage",
                rowID:"1",
                area:[{
                    colName:"col1",
                    content:[]
                },
                {
                    colName:"col2",
                    content:[]
                },
                {
                    colName:"col3",
                    content:[]
                }
                ]
            },
            {
                pageName:"firstPage",
                rowID:"2",
                area:[{
                    colName:"col1",
                    content:[]
                },
                {
                    colName:"col2",
                    content:[]
                },
                {
                    colName:"col3",
                    content:[]
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
                bgcolor:"skyblue"}],

        toasts: [
            
        ]
    }
    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }
    onDrop = (ev, col) => {
        // let id = ev.dataTransfer.getData("id");
        // let toasts = this.state.toasts[id];
        
        // let area = this.state.gridSpace[id].area.filter((area) => {
        //     if (area.colName === t) {
        //         area.content = toasts;
        //     }
        //     return area;
        // });

        // this.setState({
        //     ...this.state,
        //     area
        // });
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


    createToasts = (e) =>{

        this.state.tasks.forEach((t) => 
        {
          this.state["toasts"].push(
            <Col
            key={this.state.toasts.length}
            onDragStart = {(e) => this.onDragStart(e, this.state.toasts.length)}
            >
            <Col />
                <Toast    
                    draggable
                    
                    className="draggable"
                    style={{backgroundColor: t.bgcolor}}
            >
                    <ToastHeader>
                        {t.name}
                    </ToastHeader>
                </Toast>
            <Col />
            </Col>
          )  
        });

    }
        viewToasts = (e) =>{

            console.log(this.state.toasts);
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
                        toasts={this.state.toasts}
                        >
                        </AppDragDropDemo>
                    </UncontrolledCollapse>
                    <ExpandableLayout
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}
                    gridSpace={this.state.gridSpace}
                    addNewCol={this.addNewCol}
                    tasks={this.state.tasks}
                    >

                    </ExpandableLayout>
                    <Button
                    onClick={((e)=>this.createToasts(e))}
                    >
                        Create Toast
                    </Button>
                    <Button
                    onClick={((e)=>this.viewToasts(e))}
                    >
                        View Toast
                    </Button>
                </Container>

        );


    };



}