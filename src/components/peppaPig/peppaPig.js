import React from "react"
import "./peppaPig.css"

class peppaPig extends React.Component{
  componentDidMount(){
    this.props.start(34,[])
  }
  render(){
    let cur=this.props.cur;
    return(
     <div className="peppaPig">
          {/* <!-- 头部 --> */}
          <div className={cur>0?"pig_head":''}></div>
          <div className={cur>1?"pig_nose":''}></div>
          <div className={cur>2?"ear left":''}></div>
          <div className={cur>3?"ear right":''}></div>
          <div className={cur>4?"nostril left":''}></div>
          <div className={cur>5?"nostril right":''}></div>
          <div className={cur>6?"cover":''}></div>
          <div className={cur>7?"eye left":''}></div>
          <div className={cur>8?"eye right":''}></div>
          <div className={cur>9?"nose_under":''}></div>
          <div className={cur>10?"pig_jaw":''}></div>
          <div className={cur>11?"bottom":''}></div>
          <div className={cur>12?"fixface":''}></div>
          <div className={cur>13?"pig_mouse":''}>
              <div className={cur>14?"part1":''}></div>
              <div className={cur>15?"part2":''}></div>
              <div className={cur>16?"part3":''}></div>
          </div>
          <div className={cur>16?"flush":''}></div>
          {/* <!-- 身体 --> */}
          <div className={cur>17?"pig_body":''}></div>
          {/* <!-- 腿 --> */}
          <div className={cur>18?"foot left":''}></div>
          <div className={cur>19?"foot right":''}></div>
          <div className={cur>20?"shoes left":''}></div>
          <div className={cur>21?"shoes right":''}></div>
          {/* <!-- 脚下阴影 --> */}
          <div className={cur>22?"shadow":''}></div>
          {/* <!-- 左手 --> */}
          <div className={cur>23?"right_hand":''}>
              <div className={cur>24?"finger_top":''}></div>
              <div className={cur>25?"finger_middle":''}></div>
              <div className={cur>26?"finger_bottom":''}></div>
          </div>
          {/* <!-- 右手 --> */}
          <div className={cur>27?"left_hand":''}>
              <div className={cur>28?"finger_top":''}></div>
              <div className={cur>29?"finger_middle":''}></div>
              <div className={cur>30?"finger_bottom":''}></div>
          </div>
          {/* <!-- 尾巴 --> */}
          <div className="tail">
              <div className={cur>31?"tail_1":''}></div>
              <div className={cur>32?"tail_2":''}></div>
              <div className={cur>33?"tail_3":''}></div>
              <div className={cur>34?"tail_4":''}></div>
          </div>
        </div>
    )
  }
}

export default peppaPig;