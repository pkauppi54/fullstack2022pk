import React, { Component }from "react";

class Counter extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="">
                        <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
                            {this.formatCount()}
                        </span>
                    </div>
                    <div className="">
                        <button
                            className="btn btn-secondary"
                            onClick={() => this.props.onIncrement(this.props.counter)}
                        >
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                        <button 
                            className="btn btn-info m-2"
                            onClick={() => this.props.onDecrement(this.props.counter)}
                            disabled={this.props.counter.value === 0 ? "disabled" : ""}
                        >
                            <i className="fa fa-minus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn "
                    </div>
                </div>
            </div>
        )
    }
}