export const competitiveScore = (k1, v1, k2, v2, k3, v3, k4, v4, k5, v5) => {
  return (k1 * v1 + k2 * v2 + k3 * v3 + k4 * v4 + k5 * v5) * 1.03;
};

export const getMinVal = (item) => {
  if (item.name === "Іноземна мова"){
    return item.detail.map(i => {
        return {[`${i}`]: item.minVal}
      }
    );
  }
  else
    return [{[`${item.name}`]: item.minVal}]
};

export const getKoef = (item) => {
  if (item.name === "Іноземна мова"){
    return Object.assign({}, ...item.detail.map(i => {
        return {[`${i}`]: item.koefItem}
      })
    );
  }
  else
    return {[`${item.name}`]: item.koefItem}
};

const compulsorySubjFunc = (course) => {
  return getMinVal(course.items[0]).concat(getMinVal(course.items[1]));
};
const chooseSubjFunc = (course) => {
  return getMinVal(course.items[2]).concat(getMinVal(course.items[3]));
};
export const allotmentSubjects = (course) => {
  let compulsorySubj;
  let chooseSubj;
  let arr = [];
  compulsorySubj = compulsorySubjFunc(course);
  chooseSubj = chooseSubjFunc(course);
  arr.compulsorySubj = compulsorySubj;
  arr.chooseSubj = chooseSubj;
  return {...arr};
};

export const getSelectedSubjectName = (arr) => {
  let selectedItemName;
  selectedItemName = arr.map(subject => subject.name);
  return selectedItemName
};

export const courseIsAvaliable = (course, lists) => {
  const {compulsorySubj, chooseSubj} = allotmentSubjects(course);
  const selectedItemName = getSelectedSubjectName(lists);
  const isConsist = (elem) => {
    let key;
    let index;
    for(let prop in elem) if (elem.hasOwnProperty(prop)) { key = prop; }
    index = selectedItemName.indexOf(key);
    return ((index !== -1) && (lists[index].value >= elem[key]));
  };

  const everyCompulsory = compulsorySubj.every(isConsist);
  const someChoose = chooseSubj.some(isConsist);
  if ((everyCompulsory  === true) && (someChoose  === true)){
    return true;
  }
  else
    return false
};

export const ratingCourse = (course, lists) => {
  const {compulsorySubj, chooseSubj} = allotmentSubjects(course);
  let allCourseKoef = Object.assign({}, ...course.items.map(i => { return getKoef(i)}), {[`Середній бал атестату`]: course.koefCert}, {[`Бал за підготовчі курси`]: course.koefCourses});
  let allSelectVal = Object.assign({}, ...lists.map(i => { return {[`${i.name}`]: i.value} }));
  const choose = Object.assign({}, ...chooseSubj);

  const getMaxOfChoose = () => {
    let item = '';
    let max = 100;
    for(let prop in choose)
      if (choose.hasOwnProperty(prop)) {
        if (typeof(allSelectVal[prop]) != "undefined"){
          // console.log(`${allSelectVal[prop]} >= ${max} ? {${[`${prop}`]} : ${allSelectVal[prop]}}`);
          if (allSelectVal[prop] >= max){
            max = allSelectVal[prop];
            item = {[`${prop}`] : allSelectVal[prop]};
          }
        }
    }
    return item;
  };
  let maxOfChooseSubj = getMaxOfChoose();
  const unitSubj = compulsorySubj.concat(maxOfChooseSubj).concat({[`Середній бал атестату`]: course.koefCert}).concat({[`Бал за підготовчі курси`]: course.koefCourses});
  const getRating = (prevItem, curItem) => {
    let key;
    for(let prop in curItem) if (curItem.hasOwnProperty(prop)) { key = prop; }
    const value = (typeof(allSelectVal[key]) != "undefined") ? allSelectVal[key] : 0;
    //console.log(`${key} ${allCourseKoef[key]} * ${value} = ${prevItem + allCourseKoef[key] * value}`);
    return prevItem + allCourseKoef[key] * value;
  };
  let result = unitSubj.reduce(getRating, 0);
  return result * 1.03;
};
export const pickOutCourses = (courses, lists) => {
  let avaliableCourses = [];
  const addCourseToList = (course) => {
    const isAvaliable = courseIsAvaliable(course, lists)
    if(isAvaliable){
      return avaliableCourses.push(Object.assign({}, course, {'rating': ratingCourse(course, lists)}));
    }
    return avaliableCourses;
  };
  courses.forEach( addCourseToList );
  return avaliableCourses;
};

export default { competitiveScore, allotmentSubjects, getMinVal, courseIsAvaliable, getSelectedSubjectName, pickOutCourses};