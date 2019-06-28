import React from "react"
import "../css/index.css"
let timer;
class Index extends React.Component{
  constructor(props){
    super(props);
    this.state={
      step:0,
      drawing:require('./doraemon/doraemon.js').default
    }
  }
  start=(steps,textArr)=>{
    timer=setInterval(() => {
      let curstep=this.state.step;
      if(curstep>=steps){
        clearInterval(timer);
      }
      this.setState({step:++curstep},function(){
        if(textArr.length){
          document.getElementsByClassName("tip")[0].innerHTML=textArr[curstep-1];
        }
        else{
          document.getElementsByClassName("tip")[0].innerHTML="请跟着我来画~w_w~ ";
        }
      })
    }, 1000);
  }
  pause(e){
    let val=e.target.flag;
    e.target.flag=val?0:1;
    if(val){
      this.start()
    }
    else{
      clearInterval(timer);
    }
  }
  drawChange=(e)=>{
    let selectD=e.target.value;
    let draw;
    switch(selectD){
      case '1':  //多啦A梦
        draw=require('./doraemon/doraemon.js').default;
        break;
      case '2':  //小猪佩奇
        draw=require('./peppaPig/peppaPig.js').default;
        break;
      default:
       return 0;
    }
    clearInterval(timer);
    this.setState({
      step:0,
      drawing:draw
    })
  }
  render(){
    var Picture=this.state.drawing;
    return(
      <div style={{width:'100%',display:"flex",justifyContent:"center",paddingTop:50}}>
        <div className="wrapper" style={{position:'absolute'}}>
          <span>请选择所需要的图画：</span>
          <select onChange={this.drawChange}>
            <option value="1">哆啦A梦</option>
            <option value="2">小猪佩奇</option>
          </select>
          <button flag="0" onClick={(e)=>this.pause(e)} style={{marginLeft:50}}>暂停/开始</button>
        </div>
        <div className="tip">开始喽</div>
        <div className="canvas">
          <Picture start={this.start} end={this.end} cur={this.state.step}></Picture>
        </div>
      </div>
    )
  }
}

export default Index;