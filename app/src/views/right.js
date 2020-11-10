import React, {
    useState
} from 'react';
import { useDrop } from 'react-dnd';
import {
    Form,
    Modal,
    Select
} from 'antd'
import IsChildren from './isChildren.js'


const style = {
    height: '70rem',
    width: '70rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    border: '3px solid'
};
const Dustbin = () => {
    const [allFormItem, changeAllFormItem] = useState([]);
    const [isVisibal, changeVisibal] = useState(false)
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'box',
        drop: (item, monitor) => {
            changeAllFormItem([...allFormItem, item])
            return { name: 'Dustbin' }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = canDrop && isOver;
    let backgroundColor = 'darkgreen';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = 'darkgreen';
    }
    function isShowModel() {
        changeVisibal(true)

    }
    function deleteItem(ind) {
        let newAllFormItem = allFormItem;
        newAllFormItem.splice(ind, 1);
        console.log(newAllFormItem, 'newAllFormItem')
        changeAllFormItem([...newAllFormItem])
    }
    function handleOk() {
        changeVisibal(false)
    }
    function handleCancel() {
        changeVisibal(false)
    }
    return (<div ref={drop} style={{ ...style, backgroundColor }}>
        <Form
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                size: 'default',
            }}
            // onValuesChange={onFormLayoutChange}
            size={'default'}
        >
            {
                allFormItem.length > 0 && allFormItem.map((item, ind) => {
                    return <Form.Item label={item.text} name={item.propsName} key={`${item.dragInpType}${ind}`}>
                        <IsChildren {...item} isShowModel={isShowModel} deleteItem={deleteItem} itemInd={ind} />
                    </Form.Item>
                })
            }
            {/* <Form.Item label="Form Size" name="size">

            </Form.Item> */}
        </Form>
        <Modal
        title="设置"
            visible={isVisibal}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form>
            <Form.Item label="标题">
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="选项一">
                <Select>
                    <Select.Option value="选项一">选项一</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="选项二">
                <Select>
                    <Select.Option value="选项一">选项一</Select.Option>
                </Select>
            </Form.Item>
            </Form>
        </Modal>
		</div>);
};
export default Dustbin