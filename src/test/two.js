import React from 'react'
//import Component from 'react-component'
class Child extends React.Component{
  render() {
          return (
                   <div>
                            {this.props.name}
                   </div>
          );
  }
  componentDidMount() {
          console.log('mount',this.props.name)
  }
  componentDidUpdate() {
          console.log('update',this.props.name)
  }
  componentWillUnmount() {
          console.log('unmount',this.props.name)
  }

}
class App extends React.Component{
  state = {
          list: ['a','b','c']
  }
  render() {
          return (
                   <div>
                            {this.state.list.map(item => <Child key={item} name={item}/>)}
                            <button onClick={e => {
                                     this.setState({
                                             list: ['b','c','d']
                                     })
                            }}>set</button>
                   </div>
          );
  }
}
export default App