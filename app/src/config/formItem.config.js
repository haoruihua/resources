import {
    Input,
    Select,
    Radio
} from 'antd'



export const formItem = {
    'input': {
        component: Input
    },
    'select': {
        component: Select,
        children: true
    },
    'radio': {
        component: Radio.Group,
        children: true
    }
}