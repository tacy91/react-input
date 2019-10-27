import React from 'react'
class App4 extends React.Component{
  state = {
      num: 1
  }
  render() {
      return (
          <div>
              sss
          </div>
      );
  }
  componentDidUpdate(prevProps, prevState) {
      console.log(this.state.num)
  }
  componentDidMount() {
      let { num } = this.state
      this.setState({
          num: ++num
      })
      this.setState({
          num: ++num
      })
  }
}
class App extends React.Component{
  state = {
      num: 1
  }
  render() {
      return (
          <div>
              sss
          </div>
      );
  }
  componentDidUpdate(prevProps, prevState) {
      console.log(this.state.num)
  }
  componentDidMount() {
      setTimeout(() => {
          console.log('timeout')
      })
      new Promise((resovle) => {
          console.log('before')
          resovle('then')
          console.log('after')
      }).then(res => {
          console.log(res)
      })
      let {num} = this.state
      this.setState({
          num: ++num
      }, () => {
          console.log('after setState')
      })
      console.log('---')
  }
}
export default App