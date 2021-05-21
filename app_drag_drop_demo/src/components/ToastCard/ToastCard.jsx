import React, { Component } from "react"
import { Toast, ToastBody, ToastHeader } from "reactstrap";



export default class ToastCard extends Component{
    
    onDrop(e){

        this.props.onDrop(e.target.value);

    }

    render(props){
        return(
            <Toast
            style={{backgroundColor: this.props.toast.bgcolor}}
            >
                        <ToastHeader
                        draggable  
                        onDrop={(e)=>this.onDragOver(e)}>
                            {this.props.toast.header}
                        </ToastHeader>
                        <ToastBody>
                            {this.props.toast.body}
                        </ToastBody>
            </Toast>
        );
    }

}