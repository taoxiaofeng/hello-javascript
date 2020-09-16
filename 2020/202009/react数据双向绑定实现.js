import React from 'react';
import RactDOM from 'react-dom';


class A extends React.Component {
    render() {
        let { name } = this.state;
        return <>
            姓名：<span>{name}</span>
            <br />
            <input type="text" value={name}  onChange = { () => {
                this.setState({
                    name: eventManager.target.value
                })
            }}/>
        </>

    }
}

componentDinMount() {
    setTimeout(_ => {
        this.setState({
            name: '改变数据'
        })
    }, 1000)
}

RactDOM.render(<>
    <A />
</>, document.getElementById('root'));