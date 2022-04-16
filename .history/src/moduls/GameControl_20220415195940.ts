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
  }

  // 创建一个键盘按下的响应函数
  keydownHandler(event:KeyboardEvent){
    // 修改direction的值
    this.direction=event.key
    
  }
} 

export default GameControl