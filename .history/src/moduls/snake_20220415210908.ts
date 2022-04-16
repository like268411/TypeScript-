class Snake {
  // 表示蛇头的元素
  head:HTMLElement
  // 蛇的身体（包括身体）
  bodies:HTMLCollection
  // 获取蛇的容器
  element:HTMLElement

  constructor(){
    this.element=document.getElementById('snake')!
    this.head=document.querySelector('#snake > div')!
    this.bodies= this.element.getElementsByTagName('div')
  
  }
  // 获取蛇的坐标（蛇头坐标）
  // 获取蛇头X轴坐标
  get X(){
    return this.head.offsetLeft
  }
  // 获取蛇头Y轴坐标
  get Y(){
    return this.head.offsetTop
  }

  //设置蛇头坐标 
  set X(value:number){
    // 如果新值和旧值相同，则直接返回不再修改
    if(this.X === value){
      return
    }
    // X的值的合法范围0-290之间
     if(value < 0 || value > 290){
      //  进入判断说明蛇撞墙了,并new一个错误
      throw new Error('蛇撞墙了!')
     }
    this.head.style.left=value+'px'
  }
  set Y(value:number){
    if(this.Y === value){
      return
    }
    // Y的值的合法范围0-290之间
    if(value < 0 || value > 290){
    //  进入判断说明蛇撞墙了
    throw new Error('蛇撞墙了!')
    }
    this.head.style.top=value+'px'
  }

  // 蛇添加身体的方法
  addBody(){
    // 向element中添加一个div
    this.element.insertAdjacentHTML("beforeend","<div></div>")
  }

  // 添加一个蛇身体移动的方法
  moveBody(){
    /* 将后边的身体设置为前边身体的位置 */
    // 遍历获取所有的身体
    for(let i =this.bodies.length-1;i<0;i--){
      // 获取前边身体的位置
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft
      let Y = this.bodies[i-1].offsetLeft

    }
  }
}

export default Snake