export default {
  // 改变数据
  changeCity(state, city) {
    state.city = city;
    try {
      localStorage.city = city;
    } catch (e) {
    }
  }
}