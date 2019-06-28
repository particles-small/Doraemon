import React from "react"
import "./peppaPig.css"

class peppaPig extends React.Component{
  render(){
    return(
      <div>
        <div className="peppaPig">
          {/* <!-- 头部 --> */}
          <div className="pig_head"></div>
          <div className="pig_nose"></div>
          <div className="ear left"></div>
          <div className="ear right"></div>
          <div className="nostril left"></div>
          <div className="nostril right"></div>
          <div className="cover"></div>
          <div className="eye left"></div>
          <div className="eye right"></div>
          <div className="nose_under"></div>
          <div className="pig_jaw"></div>
          <div className="bottom"></div>
          <div className="fixface"></div>
          <div className="pig_mouse">
              <div className="part1"></div>
              <div className="part2"></div>
              <div className="part3"></div>
          </div>
          <div className="flush"></div>
          {/* <!-- 身体 --> */}
          <div className="pig_body"></div>
          {/* <!-- 腿 --> */}
          <div className="foot left"></div>
          <div className="foot right"></div>
          <div className="shoes left"></div>
          <div className="shoes right"></div>
          {/* <!-- 脚下阴影 --> */}
          <div className="shadow"></div>
          {/* <!-- 左手 --> */}
          <div className="right_hand">
              <div className="finger_top"></div>
              <div className="finger_middle"></div>
              <div className="finger_bottom"></div>
          </div>
          {/* <!-- 右手 --> */}
          <div className="left_hand">
              <div className="finger_top"></div>
              <div className="finger_middle"></div>
              <div className="finger_bottom"></div>
          </div>
          {/* <!-- 尾巴 --> */}
          <div className="tail">
              <div className="tail_1"></div>
              <div className="tail_2"></div>
              <div className="tail_3"></div>
              <div className="tail_4"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default peppaPig;