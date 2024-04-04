// var emp_name: string = "hel";
// var age: number = 25;

// console.log("Name:", emp_name);
// console.log("Age:", age);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 1 finish

// let myVariable1: number = 5;
// if (true) {
//     let myVariable1: number = 10; 
// }
// console.log(myVariable1);

// const myVariable2: string = "Hello";

// const myVariable2: string = "Hello2"; // there is an error


// function checkvar() {
//     var myVariable3: boolean = true;
//     if (myVariable3) {
//         var myVariable3: boolean = false;
//     }
//     console.log(myVariable3);
// }
// checkvar();


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<2 finish

// let number : number = 42;
// let strText : string = "Hello, TypeScript!";
// let boolyan : boolean = true;
// let undefinedTypeVariable : undefined = undefined;

// const numberConstanda : number = 10;


// const summa : number = number + numberConstanda;
// console.log("Sum:", summa);

// const stringAdded : string = strText + " How are you?";
// console.log("Concatenated String:", stringAdded);

// const res : boolean = boolyan && true;
// console.log("Logical AND:", res);

// if (undefinedTypeVariable === undefined) {
//     console.log("Undefined.");
// } else {
//     console.log("Defined");
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>3 finished

// let n1: number = 42;
// let strVariable: string = "Hello, TypeScript!";
// let boolVariable: boolean = true;
// let undefinedVariable: undefined = undefined;

// const n2: number = 10;

// // Addition
// const sum: number = n1 + n2;
// console.log("Sum:", sum);

// const concatenatedString: string = strVariable + " How are you?";
// console.log("Concatenated String:", concatenatedString);

// const isTrue: boolean = boolVariable && true;
// console.log("Logical AND:", isTrue);

// if (undefinedVariable === undefined) {
//     console.log("undefinedVariable is undefined.");
// } else {
//     console.log("undefinedVariable is defined.");
// }

// 4 finish

// let temp = 100; 

// console.log("Type of temp:", typeof temp);

// temp = "Hello, TypeScript!"; 

// console.log("My Variable:", temp);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 5 finish

// let str_num: string = "100";
// let numberFromAssertion: number = parseInt(str_num);
// console.log("Number from assertion:", numberFromAssertion);

// let numberValue: number = 200;
// let stringFromAssertion: string = numberValue.toString(); 
// console.log("String from assertion:", stringFromAssertion);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 6 finish

// type Student = {
//     id: number;
//     studentname: string;
//     email: string;
//   };
  
//   type Point = {
//     x: number;
//     y: number;
//   };
  
//   const student1: Student = {
//     id: 1,
//     studentname: "ginny_millaray",
//     email: "ginny@example.com",
//   };
  
//   const student2: Student = {
//     id: 2,
//     studentname: "endika_keeva",
//     email: "endika@example.com",
//   };
  
//   const originPoint: Point = {
//     x: 0,
//     y: 0,
//   };
  
//   function printStudentInfo(student: Student) {
//     console.log(Student ID: ${student.id});
//     console.log(Studentname: ${student.studentname});
//     console.log(Email: ${student.email});
//   }
  
//   function calculateDistance(point1: Point, point2: Point): number {
//     const dx = point1.x - point2.x;
//     const dy = point1.y - point2.y;
//     return Math.sqrt(dx * dx + dy * dy);
//   }
  
//   console.log("Student 1:");
//   printStudentInfo(student1);
  
//   console.log("\nStudent 2:");
//   printStudentInfo(student2);
  
//   console.log("\nDistance from origin:");
//   console.log(calculateDistance(originPoint, { x: 3, y: 4 }));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ... 7 finish

// const colors: string[] = ["Red", "Green", "Blue", "Orange"];
// colors.push("White");
// colors.push("Pink");
// colors.pop(); 
// console.log("Array Elements:");
// for (const c of colors) {
//   console.log(c);
// }
// const searchColor = "Green";
// const isColorInArray = colors.includes(searchColor);
// console.log(Is ${searchColor} in the array? ${isColorInArray ? "Yes" : "No"});
// const indexOfBlue = colors.indexOf("Blue");
// console.log(Index of "Blue" in the array: ${indexOfBlue});
// if (indexOfBlue !== -1) {
//   colors.splice(indexOfBlue, 1);
// }
// console.log("Modified Array:");
// console.log(colors);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ... 8 finish

// enum Color {
//     Red,
//     Green,
//     White,
//     Blue,
//   }
//   console.log("List of colors:",Color);
//   let selectedColor: Color = Color.Red;
  
//   console.log("Selected Color:", selectedColor);



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>... 9 finish
// let isNull: null = null;
// let isUndefined: undefined = undefined;
// console.log("isNull:", isNull);
// console.log("isUndefined:", isUndefined);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>... 10 finish