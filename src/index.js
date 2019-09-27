module.exports = check =  (text, bracketsConfig, stack=[]) => {  
  [...text].forEach( char => {                                                        // Для каждого символа из входной строки    
      bracketsConfig.forEach( bracket => {                                            // проверяется принадлежность к скобочным символам
        (stack[stack.length-1] == bracket[0]  && char == bracket[1]) ?                // Если найдена пара скобок одного типа в правильной последовательности
          stack.pop() :                                                               // То удалить из стека эту пару скобок
          ((bracket.includes(char)) ? stack.push(char) : undefined)                    // Если входной символ является скобочным одного типа, то поместить его в стек
      }); 
    }
  );
  return (stack.length == 0);                                                         // Если скобок парное количество то стек пустой
}

// В одну строку
// module.exports = check =  (text, bracketsConfig) =>   
//   [...text].reduce((stack, char) => {                                                            
//     bracketsConfig.forEach(bracket => {([stack[stack.length-1], char].every((value, index)=> value == bracket[index])) ? stack.pop() : (bracket.includes(char) ? stack.push(char) : undefined)});    
//     return stack;},[]).length == 0 ? true : false;
    
