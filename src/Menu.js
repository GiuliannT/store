import React from 'react';
import Search from './Search.js';
import './Menu.css';
import PanelAdd from './PanelAdd.js';

class Menu extends React.Component{

    constructor(props){
        super(props);

        this.state = {newItemPanel: false}

        // this.add = this.add.bind(this)

        // this.onCancel = this.onCancel.bind(this)
    }
    
    add = () =>{    // si no usamos formato flecha, tenemos q usar this.add = this.add.bind(this)
        this.setState({newItemPanel: true})
    }

    onCancel = () => {
        // e.preventDefault();
        this.setState({newItemPanel: false})
    }

    render(){
        return(
        <div className="container">
            <div className="subcontainer">

                <div className="logo">
                    {this.props.title}
                </div>

                <div className="search">
                    <Search onsearch={this.props.onsearch}/>
                </div>

                <div className="actions">
                    <button onClick={this.add} className="button btn-blue">+ Add new Book</button>
                </div>

            </div>
            { //si es true, entonces
                (this.state.newItemPanel)?
                <PanelAdd oncancel={this.onCancel} onadd={this.props.onadd}/>
                :
                ''
            }
           

        </div>
        )}
}

export default Menu;