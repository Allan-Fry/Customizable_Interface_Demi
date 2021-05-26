import { Component } from "react";
import { useSelector } from 'react-redux';
import { Button, Col, Container, Row, Toast, ToastHeader } from "reactstrap";
import'./ExpandableLayout.css';


export const ExpandableLayout = ({gridSpace}) => {

        const entries = useSelector(state => state.entries);

        const addNewCol = (e) =>{
            this.props.addNewCol(e);

        }
        const onButtonPress = (e) =>{
            console.log(this.mapStateToProps.entries);
        }
        const onDragOver = (ev) => {
         this.props.onDragOver(ev);
        }

        const onDrop = (ev, col) => {
            console.log(ev, col);
            this.props.onDrop(ev);
        }

       
            // var tasks ={
            //     placed:[]
            // }
            // this.props.tasks.forEach((t) =>{
            //     if(t.category==='placed'){
            //         tasks['placed'].push(
            //             <Toast    
            //             draggable
            //             //onDragStart = {(e) => this.onDragStart(e, t.name)}
            //             className="draggable"
            //             style={{backgroundColor: t.bgcolor}}
            //             >
            //                 <ToastHeader>
            //                    {t.ToastHeader}
            //                 </ToastHeader>
            //             </Toast>
            //         )
            //     }
            // })


           const renderedRows = gridSpace.map(gs =>
            (
                <Row>
                    {gs.area.map(a => (
                        <Col
                        className="GridSpace"
                        xs="auto"
                        onDragOver={onDragOver}
                        onDrop={(e)=>onDrop(e, gs.area.colName)}
                        key={a.rowName}
                        >
                        Test
                        </Col>
                    ))}
                </Row>
            ));
                    // rows[gs.rowID].push(
                    //     <Col
                    //     
                    //     >
                    //        <Toast    
                    //         draggable
                    //         //onDragStart = {(e) => this.onDragStart(e, t.name)}
                    //         className="draggable"
                    //         //style={{backgroundColor: bgcolor}}
                    //         >
                    //             <ToastHeader>
                                   
                    //             </ToastHeader>
                    //         </Toast>
                    //     </Col>
                    // )
                // });
                // gridSpace[gs.pageName].push(
                //     <Row 
                //     key={gs.rowID}
                //     >
                //         {rows[gs.rowID]}
                //         <Col 
                //         xs='1'
                //         >
                //         <Button onClick= {(e) => this.addNewCol(gs.rowID)}>
                //             +
                //         </Button>
                //         </Col>
                //     </Row>

                // )

            // });


            return(

                <Container>
                        {renderedRows} 
                        <Button 
                        onClick={onButtonPress}
                        ></Button>              
                </Container>

            );






}