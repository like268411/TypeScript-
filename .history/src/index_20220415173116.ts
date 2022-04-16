// 引入样式
import './style/index.less';

// 定义食物类Food
class Food{
  // 定义一个属性表示食物所对应的元素
  element:HTMLElement;

  constructor(){
    // 获取页面中的food元素并将其赋值给element
    this.element=document.getElementById('food')!;
  }

  // 定义一个获取食物X轴坐标的方法
  get X(){
    return this.element.offsetLeft;
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y(){
    return this.element.offsetTop;
  }

  // 修改食物的位置
  change(){
    // 生成一个随机的位置
    // 食物的位置最小是0，最大是290
    // 蛇移动一次就是一格，一格是10，所以食物的大小也是10的倍数
  
  // 生成随机数 
   let top=  Math.round(Math.random()*29)*10;
   let left=  Math.round(Math.random()*29)*10;
  
  //  随机数赋值给食物
   this.element.style.left= left + 'px'
   this.element.style.top= top + 'px'
  }
}

// 测试
// const food = new Food()
// console.log(food.X,food.Y);
// food.change()
// console.log(food.X,food.Y);

// 定义表示记分牌的类
class ScorePanel{
  // 记录分数和等级
  score=0
  level=1

  // 分数和等级所在的元素，在构造函数中进行初始化
  scoreEle:HTMLElement
  levelEle:HTMLElement

  // 设置一个变量限等级
  maxLevel:number

  constructor(  maxLevel:number = 10){
    this.scoreEle=document.getElementById('score')!
    this.levelEle=document.getElementById('level')!
    this.maxLevel=maxLevel
  }

  // 设置一个加分的方法
  addScore(){
    // 使分数自增 
    this.scoreEle.innerHTML = ++this.score+''
    //   判断分数是多少，能被10整除，等级加1
    if(this.score % 10 ===0 ){
      this.levelUp()
    }
  }

  // 提升等级的方法
  levelUp(){
    if(this.level < this.maxLevel){
      this.levelEle.innerHTML = ++this.score+''
    }
  }
}

const s =new ScorePanel()
for(let i=0;i<9;i++){
  s.addScore()
}
