module.exports = function zeros(expression) {
  let fives = 0; 
  let twos = 0; 
  let fact = expression.split('*');

  fact.forEach(el => {
    let exclMark = (el.indexOf('!!') === -1) ? 1 : 2; 
    el = parseInt(el); 

    while (el > 0) {
      let temp = el; 
      while (temp % 5 === 0) {
        fives++; 
        temp /= 5; 
      } 

      temp = el; 
      while (temp % 2 === 0) {
        twos++; 
        temp /= 5; 
      }

      el -= exclMark; 
    }
  }); 
  
  return Math.min(fives, twos); 
}