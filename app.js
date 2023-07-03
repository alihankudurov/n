// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели.

// let a = +prompt('ведите число от 1 до 7')
// function a(num){
//     if(num == 1){
//         console.log('Ponedelnik')
//     }else if(num == 2){
//         console.log('wtornik')
//     }else if(num == 3){
//         console.log('sreda')
//     }else if(num == 4){
//         console.log('chetwerk')
//     }else if(num == 5){
//         console.log('pyatnitsa')
//     }else if(num == 6){
//         console.log('subota')
//     }else if(num == 7){
//         console.log('wuhodnoy')
//     }else{
//         console.log('ty dalbaep')
//     }
// }
// var num1 = 1;
// console.log(a)

// 2. Дан список дел в формате: [
//     {id: 1, todo: 'Принять душ', done: false},
//     {id: 2, todo: 'Завтрак', done: false},
//     {id: 3, todo: 'Пойти на работу', done: false},
//     {id: 4, todo: 'Приготовить ужин', done: false},
//     {id: 5, todo: 'Лечь спать', done: false}
// ], задача: принимать от пользователя id того, что он сделал и менять статус на true, также должна быть возможность добавлять новые пункты дел, учесть, что айди должен быть уникальным
//СПОСОБ 1

// let a =  [
//         {id: 1, todo: 'Принять душ', done: false},
//         {id: 2, todo: 'Завтрак', done: false},
//         {id: 3, todo: 'Пойти на работу', done: false},
//         {id: 4, todo: 'Приготовить ужин', done: false},
//         {id: 5, todo: 'Лечь спать', done: false}]
// var b = +prompt('скажи какое девствие вы совершили в виде id(1,2,3,4,5)');
// if(b === 1){
//     for (var i = 0; i<a.length;i++){
//     }
// }else if(b === 2){
//     for (var i = 0; i<a.length;i++){
//         if (a[i].id === 2){
//             a[i].done = true
//         }
//     }
// }else if(b === 3){
//     for (var i = 0; i<a.length;i++){
//         if (a[i].id === 3){
//             a[i].done = true
//         }
//     }
// }else if(b === 4){
//     for (var i = 0; i<a.length;i++){
//         if (a[i].id === 4){
//             a[i].done = true
//         }
//     }
// }else if(b === 5){
//     for (var i = 0; i<a.length;i++){
//         if (a[i].id === 5){
//             a[i].done = true
//         }
//     }
// }else{
//     alert('к сожелению таких дейвстий нету либо вы ошиблис с айди')
// }
// let c = prompt('если хотите добавить дейвствие то (create)')
// if  (c === 'create'){
//     var w = prompt('укажите дейвствие ') 
//     // var newA = { id: users + 1, todo: aInput , done: false};
//     // users.push(newA);
//     function addA(todo) {
//     let maxId = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (arr[i].id > maxId) {
//             maxId = arr[i].id;
//         }
//     }
//     let newA = {
//         id: maxId + 1,
//         todo: todo,
//         done: false
//     };
//     arr.push(newArr);
// }
// }

// console.log(a)

//СПОСОБ 2
// let a = [
//     { id: 1, todo: 'Принять душ', done: false },
//     { id: 2, todo: 'Завтрак', done: false },
//     { id: 3, todo: 'Пойти на работу', done: false },
//     { id: 4, todo: 'Приготовить ужин', done: false },
//     { id: 5, todo: 'Лечь спать', done: false }
//   ];
  
//   var b = +prompt('Введите номер действия (id от 1 до 5):');
//   var found = false;
  
//   for (var i = 0; i < a.length; i++) {
//     if (a[i].id === b) {
//       a[i].done = true;
//       found = true;
//       break;
//     }
//   }
  
//   if (!found) {
//     alert('К сожалению, такого действия нет или вы ошиблись с id.');
//   }
  
//   var c = prompt('Если хотите добавить действие, введите "create":');
//   if (c === 'create') {
//     var w = prompt('Введите новое действие:');
//     var newUser = { id: a.length + 1, todo: w, done: false };
//     a.push(newUser);
//   }
  
//   console.log(a);


