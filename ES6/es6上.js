// 1、变量与常量
{
  let count = 0;
  count++;
  const BASE_URL = "http://";
}

//2、模板字符串
const str1 = "abc" + "efg";
const str2 = `efg${str1}
    这是一行文字
    这是另外一行文字
`;
// console.log(str2);

//3、解构赋值
const [a, b, c] = [1, 2, 3];
// console.log(a, b, c);

const {
  username,
  age: user,
  ...other
} = {
  //想要对键名进行更改，需要在键名后添加：作为修饰符
  username: "mxx",
  age: 18,
  gender: "male",
  category: "user",
};
// console.log(username, user, other);

// 4、数组和对象的扩展
// 4/1 扩展运算符

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [100, ...arr1, ...arr2, 10, 20];
// console.log(arr3);

const obj1 = {
  a: 1,
};
const obj2 = {
  b: 2,
};
const obj3 = {
  name: "mxx",
  ...obj1,
  ...obj2,
};
// console.log(obj3);

// 4.2 数组方法 Array.from()
// Array.from(arrayLike, mapFn, thisArg)
/*
arrayLike
想要转换成数组的类数组或可迭代对象。

mapFn 可选
调用数组每个元素的函数。如果提供，每个将要添加到数组中的值首先会传递给该函数，然后将 mapFn 的返回值增加到数组中。使用以下参数调用该函数：

element
数组当前正在处理的元素。

index
数组当前正在处理的元素的索引。

thisArg 可选
执行 mapFn 时用作 this 的值。
*/
function fn() {
  Array.from(arguments).forEach(function (item) {
    console.log(item);
  });
  Array.from(arguments).forEach((item) => {
    // console.log(item);
  });
  //   这个方法主要是用于把伪数组转换成真正的数组
}
// fn(1, 2, 3, 4);

// 4.3 对象的方法 Object.assign()浅拷贝
const objA = {
  name: "mxx",
  age: 18,
};
const objB = {
  gender: "male",
};
const objC = Object.assign({}, objA, objB);
// 把后面两个对象的内容合并到objC里，也可以对一个对象基于内容进行拷贝
// console.log(objA, objB, objC);

// 5、Class
class A {
  constructor(name, age) {
    // 构造方法
    this.name = name;
    this.age = age;
  }
  fangfa() {
    console.log(`我的名字是${this.name},我的年龄是${this.age}`);
  }
}
const a1 = new A("马徐翔", 18);
// console.log(a1);
// a1.fangfa();

class B extends A {
  // 谁在最后面谁就被继承
  constructor(name, age, gender) {
    super(name, age, gender);
    this.gender = gender;
  }
  sayhello() {
    console.log(`你好我是${this.name},我的年龄是${this.age}`);
  }
}
const b1 = new B("小马", 81, "男");
// console.log(b1);
// b1.sayhello();
// b1.fangfa();

// 6、箭头函数
const getSum2 = (n) => n + 3; //一个参数的话可以不用加括号
const getSum3 = (n1, n2) => n1 + n2;
// 这里相当于return n1+n2
console.log(getSum3(10, 20));
const getSum4 = (n1, n2, ...other) => console.log(n1, n2, ...other);
getSum4(10, 20, 100, 200, 300);
const getResult = (arr) => {
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum;
};
console.log(getResult([1, 2, 3, 4, 5]));
