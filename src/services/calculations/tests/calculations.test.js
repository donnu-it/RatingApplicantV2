import calculate from './../calculations';
import allCourses from './../../constants/initialCourses';

const arr = [
  {
    name: 'Українська мова',
    value: 100
  },
  {
    name: 'Біологія',
    value: 100
  },
  {
    name: 'Хімія',
    value: 100
  }
];
const arr2 = [
  {
    name: 'Українська мова',
    value: 150
  },
  {
    name: 'Біологія',
    value: 190
  },
  {
    name: 'Хімія',
    value: 200
  }
];
const arr3 = [
  {
    name: 'Українська мова',
    value: 170.5
  },
  {
    name: 'Біологія',
    value: 180.1
  },
  {
    name: 'Хімія',
    value: 160
  }
];
const result =   [{
    department: 'Біологічний',
    profession: 'Біологія',
    program: 'Біологія',
    url: 'http://bio.donnu.edu.ua/uk-ua',
    koefCert: 0.0,
    koefCourses: 0.05,
    rating: 97.85000000000001,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Біологія',
        koefItem: 0.45,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Хімія',
        koefItem: 0.20,
        minVal: 100,
        priority: 2
      },
      {
        name: "Іноземна мова",
        koefItem: 0.20,
        minVal: 100,
        priority: 3,
        detail: [
          "Англійська",
          "Німецька",
          "Французька",
          "Іспанська"
        ]
      }
    ]
  },
  {
    department: 'Біологічний',
    profession: 'Екологія',
    program: 'Екологія',
    url: 'http://bio.donnu.edu.ua/uk-ua',
    koefCert: 0.0,
    koefCourses: 0.05,
    rating: 97.85000000000001,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Біологія',
        koefItem: 0.45,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Хімія',
        koefItem: 0.20,
        minVal: 100,
        priority: 2
      },
      {
        name: "Географія",
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  }
];
const result2 =   [
  {
    department: 'Біологічний',
    profession: 'Біологія',
    program: 'Біологія',
    url: 'http://bio.donnu.edu.ua/uk-ua',
    koefCert: 0.0,
    koefCourses: 0.05,
    rating: 175.615,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Біологія',
        koefItem: 0.45,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Хімія',
        koefItem: 0.20,
        minVal: 100,
        priority: 2
      },
      {
        name: "Іноземна мова",
        koefItem: 0.20,
        minVal: 100,
        priority: 3,
        detail: [
          "Англійська",
          "Німецька",
          "Французька",
          "Іспанська"
        ]
      }
    ]
  },
  {
    department: 'Біологічний',
    profession: 'Екологія',
    program: 'Екологія',
    url: 'http://bio.donnu.edu.ua/uk-ua',
    koefCert: 0.0,
    koefCourses: 0.05,
    rating: 175.615,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Біологія',
        koefItem: 0.45,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Хімія',
        koefItem: 0.20,
        minVal: 100,
        priority: 2
      },
      {
        name: "Географія",
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  }
];
const result3 =   [
  {
    department: 'Біологічний',
    profession: 'Біологія',
    program: 'Біологія',
    url: 'http://bio.donnu.edu.ua/uk-ua',
    koefCert: 0.0,
    koefCourses: 0.05,
    rating: 169.12085,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Біологія',
        koefItem: 0.45,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Хімія',
        koefItem: 0.20,
        minVal: 100,
        priority: 2
      },
      {
        name: "Іноземна мова",
        koefItem: 0.20,
        minVal: 100,
        priority: 3,
        detail: [
          "Англійська",
          "Німецька",
          "Французька",
          "Іспанська"
        ]
      }
    ]
  },
  {
    department: 'Біологічний',
    profession: 'Екологія',
    program: 'Екологія',
    url: 'http://bio.donnu.edu.ua/uk-ua',
    koefCert: 0.0,
    koefCourses: 0.05,
    rating: 169.12085,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Біологія',
        koefItem: 0.45,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Хімія',
        koefItem: 0.20,
        minVal: 100,
        priority: 2
      },
      {
        name: "Географія",
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  }
];
const testFunc = (inputValue, result) => {
  it(`If koef = ${inputValue}, return ${result}`, () => {
    expect(inputValue).toEqual(result);
  });
};

describe('services.Calcultaion', () => {
  allCourses.forEach(course => {
    const koef = parseFloat(course.koefCert) + parseFloat(course.koefCourses) + parseFloat(course.items[0].koefItem) + parseFloat(course.items[1].koefItem) + parseFloat(course.items[2].koefItem);
    testFunc(+koef.toFixed(2), 1);
  });
  it('return {}', () => {
    const calc = calculate(arr);
    expect(calc.avaliableCourses()).toEqual(result);
  });
  it('return {}', () => {
    const calc = calculate(arr2);
    expect(calc.avaliableCourses()).toEqual(result2);
  });
  it('return {}', () => {
    const calc = calculate(arr3);
    expect(calc.avaliableCourses()).toEqual(result3);
  });
});
