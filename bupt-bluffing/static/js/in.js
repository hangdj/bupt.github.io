import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './App.css';
import moment from 'moment';
import user from './user.jpg';

const colors = [
  '#FEF200',
  '#00A1E9',
  '#20B14C',
  '#A348A5',
  '#FF7E26',
  '#3F47CC',
  '#EE1B24',
];

export default class Out extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cur: 0,
      curColor: '#FEF200',
      time: '',
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      500
    );
    if (this.state.time.length === 0) this.reset();
  }

  tick() {
    const cur = (this.state.cur + 1) % 7;
    const curColor = colors[cur];
    this.setState({ cur, curColor });
  }

  reset() {
    var time = moment().format("YYYY-MM-DD hh:mm:ss").toString();
    this.setState({ time });
  }

  render() {
    return (
      <div width="100%">

        <div className="App" width="100%" height="100%">
          <div className="top">
            <img src="https://cdn.jsdelivr.net/gh/shumil573/for-pri@v0.1.0/bluffing-image/top1.jpg" alt="logo" style={{ display: "block" }} />
          </div>
          <div className="roll">
            <div>
              <a href='#/weixin-in'>
                <img src="https://cdn.jsdelivr.net/gh/shumil573/for-pri@v0.1.0/bluffing-image/top2.jpg" alt="logo" style={{ display: "block" }} />
              </a>
            </div>
            <div className="title"><p className="titleI">姓名</p></div>
            <div className="info">周芷若</div>
            <div className="title"><p className="titleI">照片</p></div>
            <div>
              <img src={user} alt="logo" style={{ display: "block" }} />
            </div>
            <div className="title"><p className="titleI">学院</p></div>
            <div className="info">计算机学院（国家示范性软件学院）</div>
            <div className="just-here"></div>
            <div className="flash" height="130px">
              {
                this.state.cur === 0 && (<div className="flash-center" style={{ backgroundColor: '#FEF200' }}></div>)
              }
              {
                this.state.cur === 1 && (<div className="flash-center" style={{ backgroundColor: '#00A1E9' }}></div>)
              }
              {
                this.state.cur === 2 && (<div className="flash-center" style={{ backgroundColor: '#20B14C' }}></div>)
              }
              {
                this.state.cur === 3 && (<div className="flash-center" style={{ backgroundColor: '#A348A5' }}></div>)
              }
              {
                this.state.cur === 4 && (<div className="flash-center" style={{ backgroundColor: '#FF7E26' }}></div>)
              }
              {
                this.state.cur === 5 && (<div className="flash-center" style={{ backgroundColor: '#3F47CC' }}></div>)
              }
              {
                this.state.cur === 6 && (<div className="flash-center" style={{ backgroundColor: '#EE1B24' }}></div>)
              }
            </div>
            <div className="title"><p className="titleI">状态码</p></div>
            <div>
              <a href='#/'>
                <img src="https://cdn.jsdelivr.net/gh/shumil573/for-pri@v0.1.0/bluffing-image/ZTM.jpg" alt="logo" style={{ display: "block" }} />
              </a>
            </div>
            <div className="ZT"><p className="ZTI">状态</p></div>
            <div className="info"><p className="yes">允许入校</p></div>
            <div className="title"><p className="titleI">学工号</p></div>
            <div className="info">2020110520</div>
            <div className="title"><p className="titleI">出入校时间</p></div>
            <div className="info">{this.state.time}</div>
          </div>

          <div className="bottom">
            <img src="https://cdn.jsdelivr.net/gh/shumil573/for-pri@v0.1.0/bluffing-image/bottom1.jpg" alt="logo" style={{ display: "block" }} />
          </div>
        </div>

      </div>
    )
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();