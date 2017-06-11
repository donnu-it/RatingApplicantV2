


let newCoursesList = [];
let newCoursesList2 = [];
let newCoursesList3 = [];
let tempCourse = null;
let k = [];

// this.props.list
//   .forEach( subject => {
//     tempCourse = this.state.coursesList.courses
//       .map(course => {
//         return course.items.some( item => {
//           return item.name === subject.name
//         })
//       });
//       console.warn(`FIRST tempCourse ${tempCourse.length}`);
//       tempCourse.length &&
//       newCoursesList.push(...this.state.coursesList.courses
//         .filter( (course, j) => {
//           return course.items.some((item, i) => {
//             k[j] += +((((item.name === subject.name) ||
//               (item.name === "Іноземна мова" &&
//               item.detail.some((detailItem) => {
//                 console.info(`detailItem ${detailItem}`);
//                 return detailItem.indexOf(subject.name) !== -1
//               }))
//             ) && (item.priority === i)) ? ((i === 1) ? (i * 10) : i) : 0);
//             console.info(`FILTER k[${j}] ${k[j]}`);
//             console.info(`SOME ${course.profession} subject ~~~~ ${subject.name} ~~~~ item ~~~~ ${item.name} ~~~~ MATCH item.priority ${(item.name === subject.name) && (item.priority === i)}`);
//             console.info(`1 ${(((item.name === subject.name) ||
//             (item.name === "Іноземна мова" && item.detail.some((detailItem) => {
//                 return detailItem.indexOf(subject.name) !== -1
//               })
//             )) && (item.priority === i))}`);
//             console.info(`k[j] !== (12 || 13 || 15) ${k[j] !== (12 || 13 || 15)}`);
//             return (((item.name === subject.name) ||
//             (item.name === "Іноземна мова" && item.detail.some((detailItem) => {
//                 return detailItem.indexOf(subject.name) !== -1
//               })
//             )) && (item.priority === i));
//             // return (((item.name === subject.name) ||
//             //   (item.detail && item.detail.some((detailItem) => {
//             //       return detailItem.indexOf(subject.name) !== -1
//             //     })
//             //   )) && (item.priority === i));
//             //
//             // switch (k[j]){
//             //   case 12:
//             //     return true;
//             //   case 13:
//             //     return true;
//             //   case 15:
//             //     return true;
//             //   default:
//             //     return false;
//             // }
//           })})
//       );
//     }
//   );
let kitOne = [];
let kitTwo = [];
let checkMultiLang = item => {
  if (item.name === "Іноземна мова")
    return item.detail;
  else
    return [item.name]
};
this.state.coursesList.courses.forEach( (course, i) => {
  kitOne.push(checkMultiLang(course.items[0]).concat(checkMultiLang(course.items[1])));
  kitTwo.push(checkMultiLang(course.items[2]).concat(checkMultiLang(course.items[3])));
});
let getSubject = this.props.list.map( subject => subject.name);
let isConsist = (elem, i, array) => {
  return getSubject.indexOf(elem) !== -1;
};

console.log(`course ${this.state.coursesList.courses[0].program}`);
console.log(`kitOne ${kitOne[0]}`);
console.log(`kitOne EVERY ${kitOne[0].every(isConsist)}`);
console.log(`kitTwo ${kitTwo[0]}`);
console.log(`kitTwo SOME  ${kitTwo[0].some(isConsist)}`);

let getValue = this.props.list.map( subject => subject.value);

let culc = (prev, curr) => {
  let index = getSubject.indexOf(curr.name);
  // let rating = koef1 * subj1 + koef2 * subj2 + koef3 * subj3 + cert * koefCert + addValue * koefAdd;
};

let uniqueTags = [];
let index;
let value;
let apl = 0;
let sum = 0;

let getValue = (elem) => {
  index = getSubject.indexOf(elem.name);
  value = this.props.list[index].value;
  apl = value * elem.koefItem;
  console.warn(`item.name ${elem.name} - ${index} value ${value} apl ${apl}`);
};

this.state.coursesList.courses.forEach( (course, i) => {
  (kitOne[i].every(isConsist) === true) && (kitTwo[i].some(isConsist) === true) && (
    //sum =
    uniqueTags.push(course)
  )
});

console.info(`uniqueTags ${uniqueTags}`);
// newCoursesList.map(item => {
//   if (uniqueTags.indexOf(item) === -1) {
//     uniqueTags.push(item)
//   }
// });

//
// this.props.list
//   .forEach( (subject) => {
//       tempCourse = this.state.coursesList.courses
//         .filter(course => course.items[1].name.indexOf(subject.name) !== -1);
//
//       tempCourse.length > 0 &&
//       newCoursesList.push(...this.state.coursesList.courses
//         .filter(course => course.items[1].name.indexOf(subject.name) !== -1));
//     }
//   );
// console.log("newCoursesList", newCoursesList);
// this.props.list
//   .forEach( (subject) => {
//     tempCourse = newCoursesList
//       .filter( course => {
//         (course.items[2].name.indexOf(subject.name) !== -1) ||
//         (course.items[2].detail && course.items[2].detail.map((detailItem) => {
//           return detailItem.indexOf(subject.name) !== -1
//          })
//         );
//       }
//       );
//     tempCourse.length > 0 &&
//     newCoursesList2.push(...newCoursesList
//       .filter( course => (course.items[2].name.indexOf(subject.name) !== -1) ||
//         (course.items[2].detail > 0 && course.items[2].detail.map((detailItem) => {
//             return detailItem.indexOf(subject.name) !== -1
//           })
//         )
//       )
//     )
//   }
// );
// this.props.list
//   .forEach( (subject) => {
//       tempCourse = newCoursesList
//         .filter( course => (course.items[3].name.indexOf(subject.name) !== -1) ||
//           (course.items[3].detail !== undefined && course.items[3].detail.some((detailItem) => {
//             return detailItem.indexOf(subject.name) !== -1
//           })
//           )
//         );
//       tempCourse.length > 0 &&
//       newCoursesList3.push(...newCoursesList
//         .filter( course => (course.items[3].name.indexOf(subject.name) !== -1) ||
//           (course.items[3].detail !== undefined && course.items[3].detail.some((detailItem) => {
//             return detailItem.indexOf(subject.name) !== -1
//           })
//         )
//       )
//     );
//   }
// );