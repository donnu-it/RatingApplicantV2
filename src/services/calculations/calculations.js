import allCourses from './../constants/initialCourses';

const calculate = (dataInput) => {

  const allotmentSubjects = (course) => {
    const getMinVal = (item) => {
      if (item.name === "Іноземна мова"){
        return item.detail.map(i => {
            return {[`${i}`]: item.minVal}
          }
        );
      }
      else
        return [{[`${item.name}`]: item.minVal}]
    };
    return {
      compulsorySubj: getMinVal(course.items[0]).concat(getMinVal(course.items[1])),
      chooseSubj: getMinVal(course.items[2]).concat(getMinVal(course.items[3]))
    }
  };

  const courseIsAvaliable = (course) => {
    const { compulsorySubj, chooseSubj } = allotmentSubjects(course);
    const selectedItemName = dataInput.map(subject => subject.name);
    const isConsist = (elem) => {
      let key;
      let index;
      for(let prop in elem) if (elem.hasOwnProperty(prop)) { key = prop; }
      index = selectedItemName.indexOf(key);
      return ((index !== -1) && (dataInput[index].value >= elem[key]));
    };
    const everyCompulsory = compulsorySubj.every(isConsist);
    const someChoose = chooseSubj.some(isConsist);
    return ((everyCompulsory  === true) && (someChoose  === true));
  };

  const ratingCourse = (course) => {
    const { compulsorySubj, chooseSubj } = allotmentSubjects(course);
    const getKoef = (item) => {
      if (item.detail && item.detail.length > 0){
        let result = {};
        item.detail.forEach(element => (
          result = { ...result, [element]: item.koefItem }
        ));
        return result;
      }
      return { [item.name]: item.koefItem };
    };

    const getAllCoursesKoef = () => {
      let newList = { 'Середній бал атестату': course.koefCert, 'Бал за підготовчі курси': course.koefCourses };
      course.items.forEach(item => {
        newList = { ...newList, ...getKoef(item) };
      });
      return newList;
    };
    const allCoursesKoef = getAllCoursesKoef();

    const getSelected = () => {
      let newList = {};
      dataInput.forEach(subject => {
        newList = { ...newList, [subject.name]: subject.value };
      });
      return newList;
    };
    const selected =  getSelected();
    const maxOfChooseSubj = () => {
      let item = '';
      let max = 100;
      chooseSubj.forEach(subject => {
        Object.keys(subject).forEach(key => {
          if (selected[key] >= max) {
            max = selected[key];
            item = { [key] : selected[key] };
          }
        });
      });
      return item;
    };

    const unitSubj = [
      ...compulsorySubj,
      maxOfChooseSubj(),
      { 'Середній бал атестату': course.koefCert },
      { 'Бал за підготовчі курси': course.koefCourses }
    ];

    const getRating = (prevItem, curItem) => {
      let key;
      for(let prop in curItem) if (curItem.hasOwnProperty(prop)) { key = prop; }
      const value = (typeof(selected[key]) !== 'undefined') ? selected[key] : 0;
      return prevItem + allCoursesKoef[key] * value;
    };
    return unitSubj.reduce(getRating, 0) * 1.03;
  };

  return {
    avaliableCourses: () => {
      let avaliableCourses = [];
      allCourses.forEach((course) => {
        const calcRating = ratingCourse(course);
        const isAvaliableCourse = courseIsAvaliable(course);
        if(isAvaliableCourse){
          avaliableCourses.push({ ...course, 'rating': calcRating });
        }
      });
      return avaliableCourses;
    }
  }
};

export default calculate;