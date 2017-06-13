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
    value: 160.5
  }
];
const result =   [{
    department: 'Біологічний',
    profession: 'Біологія',
    program: 'Біологія',
    url: 'http://bio.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0.05,
    rating: 87.55,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
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
        name: 'Історія України',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Біологічний',
    profession: 'Екологія',
    program: 'Екологія',
    url: 'http://bio.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0.05,
    rating: 87.55,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
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
        name: 'Історія України',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Хімічний',
    profession: 'Хімія',
    program: 'Біохімія',
    url: 'http://chem.donnu.edu.ua/',
    koefCert: 0.10,
    koefCourses: 0.05,
    rating: 87.55,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Біологія',
        koefItem: 0.30,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Хімія',
        koefItem: 0.25,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Математика',
        koefItem: 0.25,
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
    url: 'http://bio.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0.05,
    rating: 160.165,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
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
        name: 'Історія України',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Біологічний',
    profession: 'Екологія',
    program: 'Екологія',
    url: 'http://bio.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0.05,
    rating: 160.165,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
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
        name: 'Історія України',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Хімічний',
    profession: 'Хімія',
    program: 'Біохімія',
    url: 'http://chem.donnu.edu.ua/',
    koefCert: 0.10,
    koefCourses: 0.05,
    rating: 156.56,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Біологія',
        koefItem: 0.30,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Хімія',
        koefItem: 0.25,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Математика',
        koefItem: 0.25,
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
    url: 'http://bio.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0.05,
    rating: 151.66235,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
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
        name: 'Історія України',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Біологічний',
    profession: 'Екологія',
    program: 'Екологія',
    url: 'http://bio.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0.05,
    rating: 151.66235,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
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
        name: 'Історія України',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Хімічний',
    profession: 'Хімія',
    program: 'Біохімія',
    url: 'http://chem.donnu.edu.ua/',
    koefCert: 0.10,
    koefCourses: 0.05,
    rating: 149.66415,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Біологія',
        koefItem: 0.30,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Хімія',
        koefItem: 0.25,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Математика',
        koefItem: 0.25,
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
    const koef = course.koefCert + course.koefCourses + course.items[0].koefItem + course.items[1].koefItem + course.items[2].koefItem;
    testFunc(koef, 1);
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
