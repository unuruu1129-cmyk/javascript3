// const student = {
//     name: "John",
//     age: 20,
//     isStudent: true,}
// console.log(student);

// const friuts=["алим", "банана", "жүрж"];
// console.log(friuts);

// const person = {
//     name: "Ану",
//     age: 20,}
// console.log(person.name);

// const colors=["улаан", "ногоон", "цэнхэр"]
// console.log(colors[0]);

// const product = { name: "Дэвтэр", price: 2500 }
// console.log(product["price"]);

// const students = ["Бат", "Ану", "Болд"]
// console.log(students[1]);

// const person = { name: "Бат", age: 18 }
// console.log(`${person.name} ${person.age} настай.`);

// const animals = ["Нохой", "Муур", "Туулай", "Морь"]
// console.log(animals.length);

// const numbers = [10, 20, 30, 40, 50];

// console.log(numbers[numbers.length - 1]);

// const student = { name: "Сараа", age: 16, grade: 10 };
// const key="grade";
// console.log(student[key]);

// const fruits = ["Алим", "Банана", "Жүрж"];
// fruits[1]="Усан үзэм"
// console.log(fruits);

// const person = { name: "Болд", age: 18 };
// if (person.age >= 18) {
//   person.isAdult = true;
// } else {
//   person.isAdult = false;
// }
// console.log(person);

// const books = ["Математик", "Англи хэл"];
// books.push("Программчлал");
// console.log(books);

// const student = { name: "Ану", age: 15 };
// student.grade = 9;
// console.log(student);

// const player = { name: "Тэмүүлэн", score: 100 };
// if (player.score>=100) {
//     player.score=player.score+50
// } else {
//     player.score=player.score+10
// }
// console.log(player);

// const items = ["Дэвтэр", "Бал", "Баллуур"];
// const removedItem = items.pop();
// console.log(items, removedItem);

// const queue = ["Бат", "Ану"];
// queue.unshift("Болд")
// console.log(queue);

// const lamp = { isOn: true };
// if (lamp.isOn===true) {
//     lamp.isOn=false
//     console.log("Гэрлийг унтраалаа");
// } else {
//     lamp.isOn=true
//     console.log("Гэрлийг асаалаа");
// }   console.log(lamp);

// const queue = ["Болд", "Бат", "Ану"];
// const firstPerson=queue.shift()
// console.log(queue, firstPerson);

// const user = { name: "Бат", isVerified: false, temporaryCode: "ABC123" };
// if (user.isVerified===true){
//     delete user.temporaryCode
//     console.log(user);
// } else  {
//     console.log("Эхлээд бүртгэлээ баталгаажуулна уу");
// }

// const product = { name: "Дэвтэр", price: 2500, quantity: 4 };
// console.log(product.price*product.quantity);

// const rectangle = { width: 5, height: 8 };
// rectangle.area = 40;
// console.log(rectangle);

// const scores = { math: 80, english: 90, programming: 100 };
// console.log((scores.math+scores.english+scores.programming)/3);

// const product = { price: 50000, discountPercent: 0 };
// if (product.discountPercent > 0) {
//   product.finalPrice =
//     product.price - product.price * (product.discountPercent / 100);
// } else {
//   product.finalPrice = product.price;
// }
// console.log(product);

// const account = { owner: "Болд", balance: 50000 };
// const withdrawAmount = 60000;
// if (account.balance<withdrawAmount) {
//     console.log("Үлдэгдэл хүрэлцэхгүй", account.balance);
// } else {
//     console.log("Гүйлгээ амжилттай", (account.balance-withdrawAmount) );
// }

// const product = { name: "Бал", stock: 1 };
// console.log(product.stock>0 ? "Бэлэн байна": "Дууссан");

// const numbers = [15, 25, 10];
// console.log(numbers[0]+numbers[1]+numbers[2]);

// const scores = [80, 90, 100];
// console.log((scores[1]+scores[2]+scores[0])/scores.length);

// const customer = { money: 10000 },
//   product = { price: 8000, stock: 1 };
// console.log(product.price<=customer.money && product.stock>0 ? "Авч болно" : "Авч болохгүй");

// const student = { name: "Сараа", score: 70 };
// if (student.score >= 90) {
//   console.log("Маш сайн");
// } else if (student.score < 90 && student.score >= 60) {
//   console.log("Тэнцсэн");
// } else if (student.score < 60) {
//   console.log("Тэнцээгүй");
// }

// const student = { name: "Бат", age: 16 };
// console.log("name" in student, "email" in student);

// const student = { name: "Болд", address: { city: "Улаанбаатар", district: "Хан-Уул" } }
// console.log(student.address.city);

// const person = { name: "Ану", address: { city: "Улаанбаатар", district: "Баянзүрх" } }
// if ("Улаанбаатар" === person.address.city) {
//     console.log(person.address.district);
// } else { console.log("Орон нутгийн оршин суугч"); }

// const student = { name: "Бат", scores: { math: 70, english: 80 } }
// if (student.scores.math<80){
//     console.log(student.scores.math+10);
// } else {
//     console.log("Нэмэлт оноо шаардлагагүй");
// }

// const names = ["Бат", "Ану"];
// let temp=names[0];
// names[0]=names[1]
// names[1]=temp
// console.log(names);

// const fruits = ["Алим", "Банана", "Жүрж"];
// console.log(fruits.includes("Банана") ? "Банана байна" : "Банана алга" );

// const students = ["Бат", "Ану", "Болд", "Сараа"];
// console.log(students.indexOf("Болд"));

// const order = {
//     product: { price: 5000, quantity: 3 },
//     delivery: { fee: 2500 }
// };
// const subtotal = order.product.price * order.product.quantity;
// if (subtotal >= 20000) {
//     order.delivery.fee = 0;
// }
// order.total = subtotal + order.delivery.fee;
// console.log(order.total);

// const user1 = { name: "Болд", age: 20 },
//     user2 = { email: "bold@example.com", city: "Улаанбаатар" };
//     console.log(Object.assign(user1,user2));

// const cart = [];
// if (cart.length===0) {
//     console.log("Сагс хоосон");

// }else {
//     console.log("Сагсанд бараа байна");
// }

// const numbers = [35, 20];
// if (numbers[0] > numbers[1]) {
//     console.log(numbers[0]);
// } else if (numbers[1] > numbers[0]) {
//     console.log(numbers[1]);
// } else {
//     console.log("Хоёр тоо тэнцүү");
// }

// const students = ["Бат", "Ану"];
// const newStudent = "Сараа";

//  if (!students.includes(newStudent)) {
//         students.push(newStudent);
//     } else {
//         console.log("Энэ нэр бүртгэлтэй байна");
//     }

// console.log(students);

// const user1 = { name: "Ану", age: 18 };
// const user2 = {
//     email: "anu@example.com",
//     city: "Улаанбаатар"
// };

// const user = { ...user1, ...user2 };

// console.log(user);

// const groupA = ["Бат", "Ану"];
// const groupB = ["Болд", "Сараа"];

// const allStudents = groupA.concat(groupB);

// console.log(allStudents);

// const original = [10, 20, 30];

// const copied = [...original];

// copied[0] = 99;

// console.log(original);
// console.log(copied);

// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.slice(1, 4);

// console.log(result);

// const user = {
//     name: "Сараа",
//     age: 22,
//     email: "saraa@example.com"
// };

// const profile = {
//     name: user.name,
//     age: user.age
// };

// profile.name = "Бат";

// console.log(profile.name);
// console.log(user.name);

// const colors = ["Улаан", "Ногоон", "Цэнхэр", "Шар"];

// colors.splice(1, 1);

// console.log(colors);

// const days = ["Даваа", "Лхагва"];

// days.splice(1, 0, "Мягмар");

// console.log(days);

// const words = ["Би", "JavaScript", "сурч", "байна."];

// const sentence = words.join(" ");

// console.log(sentence);

// const students = [
//     { name: "Бат", score: 75 },
//     { name: "Ану", score: 90 }
// ];

// students[0].score += 10;

// console.log(students[0].score); // 85

// if (students[1].score >= 90) {
//     console.log("Ану маш сайн");
// } else {
//     console.log("Ану хичээгээрэй");
// }
