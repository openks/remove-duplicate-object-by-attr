根据某一个对象数组arr及对象的某个属性attr，  
移除属性attr值相同的对象，返回新的对象数组  
# 安装
```bash
npm i remove-duplicate-object-by-attr
```
# 使用
```js
import rmdoba from "remove-duplicate-object-by-attr"
let obj = [{
  name:'zs',
  age:20,
},{
  name:'zs1',
  age:19,
},{
  name:'zs',
  age:20,
}]
let new_obj = rmdoba(obj,'name')
//new_obj 
/*
new_obj =[{
  name:'zs',
  age:20,
},{
  name:'zs1',
  age:19,
}]
*/
```
# 其他情况
如果第一个参数不是数组，抛出错误并返回不做处理的第一个参数  
如果第二个参数不是字符串，抛出错误并返回不做处理的第一个参数    
如果对象数组里有对象不包含属性attr,给出关于该对象的warn提醒且返回新数组不包含该对象  
