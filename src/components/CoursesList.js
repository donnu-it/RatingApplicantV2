import React, {Component} from 'react';

import { data } from './../services';
//import InitialCourses from '../constants/initialCourses';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import School from 'material-ui/svg-icons/social/school';

class CourseList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,

      coursesList: data
    };
    this.calculateRating = this.calculateRating.bind(this);
  };

  calculateRating = () => {
  };

  render() {
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
    this.state.coursesList.courses.forEach( (course, i) => {
      (kitOne[i].every(isConsist) === true) && (kitTwo[i].some(isConsist) === true) && (
        index = getSubject.indexOf(course.items[1].name),
        value = this.props.list[index].value,
        apl = value * course.items[1].koefItem,
        console.warn(`item.name ${course.items[1].name} - ${index} value ${value} apl ${apl}`),
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

    return (
      <div className="table-block">
        <Table
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn rowSpan="2"><h4>Спеціальність</h4></TableHeaderColumn>
              <TableHeaderColumn rowSpan="2"><h4>Освітня програма</h4></TableHeaderColumn>
              <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
                <h4>Сертифікати ЗНО</h4>
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn><h4>Перший предмет</h4></TableHeaderColumn>
              <TableHeaderColumn><h4>Другий предмет</h4></TableHeaderColumn>
              <TableHeaderColumn><h4>Предмети на вибір</h4></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {uniqueTags.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>
                  <div className="Icon-name-row">
                    <School />
                  </div>
                  <div className="Icon-name-row">
                    <a href="#" className="Course-name">{row.profession}</a>

                  </div>
                </TableRowColumn>
                <TableRowColumn>
                  <p className="Course-name">{row.program}</p>
                  <p className="Course-detail">Коефіцієнт атестату: {row.koefCert}</p>
                  {row.koefCourses && <p className="Course-detail"> Коефіцієнт за курси: {row.koefCourses}</p>}
                </TableRowColumn>
                <TableRowColumn>
                  <p className="Course-name">{row.items[0].name}</p>
                  <p className="Course-detail">Ваговий коефіцієнт: {row.items[0].koefItem}</p>
                  <p className="Course-detail">Мінімальний бал: {row.items[0].minVal}</p>
                </TableRowColumn>
                <TableRowColumn>
                  <p className="Course-name">{row.items[1].name}</p>
                  <p className="Course-detail">Ваговий коефіцієнт: {row.items[0].koefItem}</p>
                  <p className="Course-detail">Мінімальний бал: {row.items[0].minVal}</p>
                </TableRowColumn>
                <TableRowColumn>
                  <p className="Course-name">{row.items[2].name} </p>
                  <p className="Course-name">{row.items[3].name} {row.items[3].detail && '(' + row.items[3].detail.join(', ') + ')'}</p>
                  <p className="Course-detail">Ваговий коефіцієнт: {row.items[0].koefItem}</p>
                  <p className="Course-detail">Мінімальний бал: {row.items[0].minVal}</p>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default CourseList;
