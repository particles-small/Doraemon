import React from "react"

class Index extends React.Component{
  constructor(props){
    super(props);
    this.state={
      step:0
    }
  }
  start=(steps)=>{
    console.log("get"+steps)
    let timer=setInterval(() => {
      let curstep=this.state.step;
      if(curstep>=steps){
        clearInterval(timer);
      }
      this.setState({step:++curstep},function(){
        console.log(this.state.step)
      })
    }, 1000);
  }
  end=()=>{
      this.setState({})
  }
  render(){
    var Ab=require('./doraemon.js').default;

    return(
      <div style={{display:"flex",justifyContent:"center",paddingTop:50}}>
        <Ab start={this.start} end={this.end} cur={this.state.step}></Ab>
      </div>
    )
  }
}

export default Index;