// this is one of the child component

// import React, { Component } from 'react';

// component를 MyName이라는 클래스로 만들었다.
// class MyName extends Component {
//     render() {
//         return (
//             <div>
//                 my name is <b>{this.props.name}</b>입니다.
//                 {/* name이라는 props를 보여주도록 설정, 이건 부모에게서 받아온 props: 자식 컴포넌트에서 수정할 수 없다 */}
//             </div>
//         );
//     }
//     static defaultProps = {
//         name: '기본 이름'
//     }
// }
// export default MyName;

import React, { Component } from 'react'

class MyName extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
    static defaultProps = {
        name: '기본 이름'
    }
}
export default MyName