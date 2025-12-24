const globalVar = 'global'; // глобальная область

function myFunc() {
  const localVar = 'local'; // локальная область функции
  console.log(globalVar); // доступно
  console.log(localVar);
}
myFunc();

