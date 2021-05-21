import React, { Component } from "react"
import { Toast, ToastBody, ToastHeader } from "reactstrap";



export default class ToastCard extends Component{
    
    onDrop(e){
        let header = this.props.toast.header;
        let toastID = this.props.toast.toastID;
        this.props.onDrop(e, header, toastID);
    }
    onDragStart(e){

        let header = this.props.toast.header;
        let id = this.props.toast.toastID;

        this.props.onDragStart(e, header, id);
        
    }
    onDragOver = (ev) => {
        ev.preventDefault();
    }


    render(props){
        return(
            <Toast
            onDragOver={(e)=>this.onDragOver(e)}
            style={{backgroundColor: this.props.toast.bgcolor}}
            >
                        <ToastHeader
                        draggable 
                        onDragStart={(e)=>this.onDragStart(e)} 
                        onDrop={(e)=>this.onDrop(e)}
                        >
                            {this.props.toast.header}
                        </ToastHeader>
                        <ToastBody>
                            {this.props.toast.body}
                        </ToastBody>
            </Toast>
        );
    }

}