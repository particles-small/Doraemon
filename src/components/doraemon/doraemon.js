import React from "react"
import  './doraemon.css'
class doraemon extends React.Component{
  componentDidMount(){
    let textArr=['现在我们来开始画多啦A梦吧(つд⊂)','首先我们来画它的头部','会动的眼睛≥ω≤',
    '再开画它的脸','然后是鼻子','然后是鼻子','画一个微笑的嘴巴(*ﾟーﾟ*)',
    '接下来就是它的胡须了','左边1','2','3','右边 1','2','3',
    '画它的脖子','给它加一个可爱的小铃铛≥▽≤y','给它加一个可爱的小铃铛≥▽≤y','接着来画它圆鼓鼓的身体吧','画它的大口袋','给它加上左胳膊',
    '再完善一下吧','≥▽≤/~','右胳膊','右胳膊','右胳膊','右胳膊','最后就是画它的脚','','大功告成(*ﾟ∇ﾟ)'];
    this.props.start(28,textArr);
  }
  render(){
    var curnum=this.props.cur;
    return(
      <div className="doraemon">
        <div className={curnum>0?"head":""}>
            <div className={curnum>1?"eyes":""}>
                <div className={curnum>2?"eye left":""}></div>
                <div className={curnum>2?"eye right":""}></div>
            </div>
            <div className={curnum>3?"faces":""}>
                <div className={curnum>3?"face":""}></div>
                <div className={curnum>4?"nose":""}></div>
                <div className={curnum>5?"nose-line":""}></div>
                <div className={curnum>6?"mouth":""}></div>
                <div className={curnum>7?"whiskers":""}>
                    <div className={curnum>11?"whisker right top rotate160":""}></div>
                    <div className={curnum>12?"whisker right middle":""}></div>
                    <div className={curnum>13?"whisker right bottom rotate20":""}></div>
                    <div className={curnum>8?"whisker top rotate20":""}></div>
                    <div className={curnum>9?"whisker middle":""}></div>
                    <div className={curnum>10?"whisker bottom rotate160":""}></div>
                </div>
            </div>
        </div>
        <div className={curnum>14?"neck":""}>
            <div className={curnum>15?"bell":""}>
                <div className={curnum>16?"bellTongue":""}></div>
            </div>
        </div>
        <div className={curnum>17?"body":""}>
            <div className={curnum>18?"pocket":""}></div>
            <div className={curnum>19?"hand left":""}>
                <div className={curnum>20?"arm":""}></div>
                <div className={curnum>21?"write":""}></div>
            </div>
            <div className={curnum>22?"hand right":""}>
                <div className={curnum>23?"arm":""}></div>
                <div className={curnum>24?"write":""}></div>
            </div>
            <div className={curnum>25?"footer":""}>
                <div className={curnum>26?"foot left":""}></div>
                <div className={curnum>27?"foot right":""}></div>
                <div className={curnum>28?"write":""}></div>
            </div>
        </div>
      </div>
    )
  }
}
export default doraemon;