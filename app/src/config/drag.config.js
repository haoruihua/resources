const dragBtnType = [
    {
        text: '姓名',
        propsName: 'userName',
        dragInpType: 'input'
    },
    {
        text: '性别',
        propsName: 'userSex',
        dragInpType: 'radio',
        options: [
            {
                value: '1',
                label: '男'
            },
            {
                value: '2',
                label: '女'
            }
        ]
    },
    {
        text: '邮箱',
        propsName: 'userAddress',
        dragInpType: 'input'
    },
    {
        text: '身份证',
        propsName: 'userId',
        dragInpType: 'input'
    },
    {
        text: '下拉框',
        propsName: 'userSelect',
        dragInpType: 'select',
        options: [
            {
                value: '选项一',
                label: '一'
            },
            {
                value: '选项二',
                label: '二'
            }
        ]
    }
]


export default dragBtnType;


