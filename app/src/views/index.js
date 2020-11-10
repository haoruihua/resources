import React, { Component } from 'react';
import drag from "../config/drag.config";
import Left from "./left.js";
import Right from "./right.js";

class Index extends Component {
    render() {
        return (
            <div>
                <div>
                    {
                        drag.map((item, ind) => {
                            return <Left name={item.propsName} key={ind} content={item} />
                        })
                    }
                </div>
                <div>
                    <Right />
                </div>
            </div>
        )
    }
}


export default Index