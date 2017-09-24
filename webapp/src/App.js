import React from 'react';

class App extends React.Component {
    
    onPopup(){
        alert('a');
    }
    
    //기본세팅
    render(){
        
        let text = 'React';
        let check = false;
        
        return(
            
            // 리액트 컴포넌트는 항상 단일 구조여야 한다.
            // 리액트에서 클래스를 만들때에는 class가 아니라 className으로 작성해야 한다.
            // 리액트 JSX 문법에서는 if나 for 등을 사용할수 없다. 대신 삼항연산자는 가능하다.
            // (조건) ? 참일때 실행 : 거짓일때 실행
            // 변수 사용하고 싶으면 {} 감싸야 한다.
            
            <div>
                { check ? <h1>{text} Project</h1> : <h1>{text} False</h1> }
                <h2 className="title" onClick={this.onPopup} >Welcome To {text} World</h2>
            </div>
        )
    }
}

export default App;