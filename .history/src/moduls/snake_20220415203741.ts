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

    if(this.X === value){
      return
    }
    this.head.style.left=value+'px'
  }
  set Y(value:number){
    if(this.Y === value){
      return
    }
    this.head.style.top=value+'px'
  }

  // 蛇添加身体的方法
  addBody(){
    // 向element中添加一个div
    this.element.insertAdjacentHTML("beforeend","<div></div>")
  }
}

export default Snake