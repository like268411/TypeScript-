class Snake {
  // 表示蛇头的元素
  head:HTMLElement
  // 蛇的身体（包括身体）
  bodies:HTMLElement

  constructor(){
    this.head=document.querySelector('#snake > div')!
    this.bodies= document.getElementById('snake')!.getElementsByTagName('div')
  }
}