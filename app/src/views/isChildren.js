import React from 'react';
import {
    formItem
} from '../config/formItem.config.js'
import {
    Select,
    Radio,
    Button
} from 'antd';
let {
    Option
} = Select

function IsChildren({text, propsName, dragInpType, options, isShowModel, deleteItem, itemInd}) {
    let itemObj = formItem[dragInpType];
    function switchItem() {
        switch(dragInpType) {
            case 'select':
                return options && options.length > 0 && options.map(item => {
                            return <Option value={item.value}>
                                {item.label}
                            </Option>
                        })
            case 'radio':
                return options && options.length > 0 && options.map(item => {
                    return <Radio value={item.value}>{item.label}</Radio>
                })
        }
    }
    return <div>
        <itemObj.component>
            {
                itemObj.children ? switchItem() : null
            }
            
        </itemObj.component>
        <Button onClick={() => {
                isShowModel()
            }}>设置</Button>
            <Button onClick={() => {
                deleteItem(itemInd)
            }}>删除</Button>
    </div>
}


export default IsChildren

