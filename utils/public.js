let _methods = {
  //折扣值 将数字提取出来，例如 5折，提取数字5
  extractNumber(value) {
    var result = value.replace('折', '');
    console.log(result);
    return result
  }
}

export { _methods };