// 引入样式
import './style/index.less';
import Food from './moduls/Food'

// 测试
const food = new Food()
console.log(food.X,food.Y);
food.change()
console.log(food.X,food.Y);
