// 引入其他的类
import Snake from "./snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

//游戏控制器，控制其他的所有类
class GameControl{
  // 定义三个属性
  // 蛇
  snake:Snake
  // 食物
  food:Food
  // 记分牌
  scorePanel:ScorePanel
// 创建一个属性来存储蛇的移动方向（也就是按键的方向）
direction:string = ''
// 创建一个属性用来记录游戏是否结束
isLive = true

  constructor(){
    this.snake=new Snake()
    this.food=new Food()
    this.scorePanel=new ScorePanel()

    this.init()
  }

  // 游戏的初始化方法，调用后游戏即将开始
  init(){
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown',this.keydownHandler.bind(this))
    // 调用run方法,使蛇移动
    this.run()
  }

  /* 
  ArrowUp Up
  ArrowDown Down
  ArrowLeft Left
  ArrowRight Right
  */
  // 创建一个键盘按下的响应函数
  keydownHandler(event:KeyboardEvent){
  //  需要检测event.key的值是否合法（用户是否按了正确的键）
    // 修改direction属性
    this.direction=event.key 
  }

  // 创建一个控制蛇移动的方法
  run(){
    /*
     根据方向（this.direction）来控制蛇的位置改变
    向上top减少、向下top增加、向左left减少、向右left增加
    */
  //  获取蛇现在的坐标
  let X = this.snake.X
  let Y = this.snake.Y

  // 根据按键方向来修改X值和Y值
  switch(this.direction){
    case "ArrowUp":
    case "Up":
      // 向上移动top减少
      Y -=10
      break;
    case "ArrowDown":
    case "Down":
      // 向下移动top增加
      Y +=10
      break;
    case "ArrowLeft":
    case "Left":
      // 向作移动left减少
      X -=10
      break;
    case "ArrowRight":
    case "Right":
      // 向右移动left增加
      X +=10
      break;
  }

  // 修改蛇的X和Y值
  this.snake.X = X
  this.snake.Y = Y

  // 开启一个定时调用
  setTimeout(this.run.bind(this),300- (this.scorePanel.level-1)*30)
  }
} 

export default GameControl