let defaultCity = "上海"
// 有可能当用户使用隐身模式或禁用 localStorage，会导致浏览器报错。所以建议使用 try catch 进行优化
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}


export default {
  // 存放的是全局公用数据
  city: defaultCity
}