import React, { useState } from 'react';
function App(){
  const [value,setValue] = useState('aaa')
  return (
      <div>
      <InputNumber value={value} onChange={e=>{setValue(e);console.log(e)}}/>
      <InputNumber defaultValue={value} onChange={e=>{setValue(e);console.log(e)}}/>
      </div>
  )
}
class InputNumber extends React.Component {
  constructor(props){
    super(props);
    this.input = this.props.defaultValue?React.createRef():null;
    this.controlChange = this.controlChange.bind(this);
    this.unControlChange = this.unControlChange.bind(this);
  }
  controlChange(e) {
    this.props.onChange(e.target.value);
  }
  unControlChange(e){
    this.props.onChange(this.input.current.value);
  }
  render(){
    const value = this.props.value?this.props.value:null;
    const dftValue = this.props.defaultValue?this.props.defaultValue:null;
    if(value){
      return (
        <label>
          受控：
        <input type="type" value={value} onChange={this.controlChange} /><br/>
        </label>
      )
    }
    return(
      <label>
          非受控：
      <input type="type" defaultValue={dftValue}  onChange={this.unControlChange} ref={this.input} /><br/>
      </label>
    )
  }
}

export default App