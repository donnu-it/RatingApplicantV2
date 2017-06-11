import calculate from './../calculations';

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

describe('services.Calcultaion', () => {
  it('return {}', () => {
    const calc= calculate(arr);
    expect(calc.avaliableCourses()).toEqual(result);
  });
});
