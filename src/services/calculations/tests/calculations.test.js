import calculations from './../calculations';

const testFunc = (k1, v1, k2, v2, k3, v3, k4, v4, k5, v5, result) => {
  const inputValue = [k1, v1, k2, v2, k3, v3, k4, v4, k5, v5]
  it(`If value = ${inputValue}, return ${result}`, () => {
    expect(calculations.competitiveScore(k1, v1, k2, v2, k3, v3, k4, v4, k5, v5)).toEqual(result);
  });
};

const testFuncLang = (item, result) => {
  it(`If value = "Іноземна мова", return ${result}`, () => {
    expect(calculations.getMinVal(item)).toEqual(result);
  });
};

describe('services.competitiveScore', () => {
  testFunc(0.3, 150, 0.5, 152, 0.2, 190, 0.1,	190, 0.2,	200, 224.54);
});

describe('services.getMinVal', () => {
  const item1 = {
    name: 'Іноземна мова',
    koefItem: 0.20,
    minVal: 100,
    priority: 3,
    detail: ["Англійська","Німецька", "Французька", "Іспанська", "Російська"]
  };
  const item2 = {
    name: 'Математика',
    koefItem: 0.30,
    minVal: 100,
    priority: 1
  };

  testFuncLang(item1, [{"Англійська": item1.minVal}, {"Німецька": item1.minVal}, {"Французька": item1.minVal}, {"Іспанська": item1.minVal}, {"Російська": item1.minVal}]);
  testFuncLang(item2, [{[`${item2.name}`]: item2.minVal}]);
});

describe('services.allotmentSubjects', () => {
  const course =
    {
      department: 'Математики та ІТ',
      profession: 'Інформаційна, бібліотечна та архівна справа',
      program: 'Документознавство та інформаційна діяльність',
      koefCert: 0.1,
      koefCourses: 5,
      items: [
        {
          name: 'Українська мова',
          koefItem: 0.50,
          minVal: 100,
          priority: 0
        },
        {
          name: 'Історія України',
          koefItem: 0.20,
          minVal: 100,
          priority: 1
        },
        {
          name: 'Математика',
          koefItem: 0.20,
          minVal: 100,
          priority: 2
        },
        {
          name: 'Іноземна мова',
          koefItem: 0.20,
          minVal: 100,
          priority: 3,
          detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська', 'Російська']
        }
      ],
  };
  let result = [];
  const compulsorySubjects = [{'Українська мова': 100}, {'Історія України': 100}];
  const chooseSubjects = [{'Математика': 100}, {'Англійська': 100}, {'Німецька': 100}, {'Французька': 100}, {'Іспанська': 100}, {'Російська': 100}];
  result.compulsorySubj = compulsorySubjects;
  result.chooseSubj = chooseSubjects;
  it(`If courses = ${course}, return resultCompulsorySubjects = ${compulsorySubjects} resultChooseSubjects = ${chooseSubjects}`, () => {
    expect(calculations.allotmentSubjects(course)).toEqual({...result});
  });
});

describe('services.getSelectedSubjectName', () => {
  const arr = [
    {
      name: 'Українська мова',
      value: 100
    },
    {
      name: 'Математика',
      value: 100
    },

    {
      name: 'Англійська',
      value: 100
    },
    {
      name: 'Історія України',
      value: 100
    },
    {
      name: 'Середній бал атестату',
      value: 200
    }
  ];
  let result = ['Українська мова', 'Математика', 'Англійська', 'Історія України', 'Середній бал атестату' ];
  it(`If courses = ${arr}, return result = ${result}`, () => {
    expect(calculations.getSelectedSubjectName(arr)).toEqual(result);
  });
});

describe('services.courseIsAvaliable', () => {
  const course =
    {
      department: 'Математики та ІТ',
      profession: 'Інформаційна, бібліотечна та архівна справа',
      program: 'Документознавство та інформаційна діяльність',
      koefCert: 0.1,
      koefCourses: 5,
      items: [
        {
          name: 'Українська мова',
          koefItem: 0.50,
          minVal: 100,
          priority: 0
        },
        {
          name: 'Історія України',
          koefItem: 0.20,
          minVal: 100,
          priority: 1
        },
        {
          name: 'Математика',
          koefItem: 0.20,
          minVal: 100,
          priority: 2
        },
        {
          name: 'Іноземна мова',
          koefItem: 0.20,
          minVal: 100,
          priority: 3,
          detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська', 'Російська']
        }
      ],
    };
  const arr = [
    {
      name: 'Українська мова',
      value: 100
    },
    {
      name: 'Математика',
      value: 100
    },

    {
      name: 'Англійська',
      value: 100
    },
    {
      name: 'Історія України',
      value: 100
    },
    {
      name: 'Середній бал атестату',
      value: 200
    }
  ];
  const result = true;

  it(`If courses = ${course}, return result = ${result}`, () => {
    expect(calculations.courseIsAvaliable(course, arr)).toEqual(result);
  });
});

describe('services.pickOutCourses', () => {
  const courses =
    [
      {
        department: 'Фізико-технічний',
        profession: 'Середня освіта (фізика)',
        program: 'Середня освіта (фізика)',
        koefCert: 0.1,
        koefCourses: 0,
        items: [
          {
            name: 'Українська мова',
            koefItem: 0.30,
            minVal: 100,
            priority: 0
          },
          {
            name: 'Математика',
            koefItem: 0.30,
            minVal: 100,
            priority: 1
          },
          {
            name: 'Фізика',
            koefItem: 0.30,
            minVal: 100,
            priority: 2
          },
          {
            name: 'Історія України',
            koefItem: 0.30,
            minVal: 100,
            priority: 3
          }
        ],
      },
      {
        department: 'Математики та ІТ',
        profession: 'Інформаційна, бібліотечна та архівна справа',
        program: 'Документознавство та інформаційна діяльність',
        koefCert: 0.1,
        koefCourses: 5,
        items: [
          {
            name: 'Українська мова',
            koefItem: 0.50,
            minVal: 100,
            priority: 0
          },
          {
            name: 'Історія України',
            koefItem: 0.20,
            minVal: 100,
            priority: 1
          },
          {
            name: 'Математика',
            koefItem: 0.20,
            minVal: 100,
            priority: 2
          },
          {
            name: 'Іноземна мова',
            koefItem: 0.20,
            minVal: 100,
            priority: 3,
            detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська', 'Російська']
          }
        ]
      }
    ];
  const arr = [
    {
      name: 'Українська мова',
      value: 150
    },
    {
      name: 'Математика',
      value: 100
    },

    {
      name: 'Англійська',
      value: 200
    },
    {
      name: 'Історія України',
      value: 100
    },
    {
      name: 'Середній бал атестату',
      value: 200
    }
  ];
  const result = [
    {
      department: 'Фізико-технічний',
      profession: 'Середня освіта (фізика)',
      program: 'Середня освіта (фізика)',
      koefCert: 0.1,
      koefCourses: 0,
      rating: 128.75,
      items: [
        {
          name: 'Українська мова',
          koefItem: 0.30,
          minVal: 100,
          priority: 0
        },
        {
          name: 'Математика',
          koefItem: 0.30,
          minVal: 100,
          priority: 1
        },
        {
          name: 'Фізика',
          koefItem: 0.30,
          minVal: 100,
          priority: 2
        },
        {
          name: 'Історія України',
          koefItem: 0.30,
          minVal: 100,
          priority: 3
        }
      ],
    },
    {
      department: 'Математики та ІТ',
      profession: 'Інформаційна, бібліотечна та архівна справа',
      program: 'Документознавство та інформаційна діяльність',
      koefCert: 0.1,
      koefCourses: 5,
      rating: 159.65,
      items: [
        {
          name: 'Українська мова',
          koefItem: 0.50,
          minVal: 100,
          priority: 0
        },
        {
          name: 'Історія України',
          koefItem: 0.20,
          minVal: 100,
          priority: 1
        },
        {
          name: 'Математика',
          koefItem: 0.20,
          minVal: 100,
          priority: 2
        },
        {
          name: 'Іноземна мова',
          koefItem: 0.20,
          minVal: 100,
          priority: 3,
          detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська', 'Російська']
        }
      ]
    }
  ];

  it(`If courses = ${courses}, return result = ${result}`, () => {
    expect(calculations.pickOutCourses(courses, arr)).toEqual(result);
  });
});
