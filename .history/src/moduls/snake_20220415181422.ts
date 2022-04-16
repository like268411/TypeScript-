class Snake {
  // 表示蛇头的元素
  head:HTMLElement
  // 蛇的身体（包括身体）
  bodies:HTMLCollection
  // 获取蛇的容器
  element:HTMLElement

  constructor(){
    this.head=document.querySelector('#snake > div')!
    this.bodies= document.getElementById('snake')!.getElementsByTagName('div')
    this.element=document.getElementById('#nake')
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
    this.head.style.left=value+'px'
  }
  set Y(value:number){
    this.head.style.top=value+'px'
  }

}