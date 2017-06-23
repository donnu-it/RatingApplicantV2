export default [
  {
    department: 'Фізико-технічний',
    profession: 'Середня освіта (фізика)',
    program: 'Середня освіта (фізика)',
    url: 'http://phys.donnu.edu.ua',
    koefCert: 0.10,
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
    url: 'http://math.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
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
        name: 'Географія',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Історичний',
    profession: 'Історія та археологія',
    program: 'Історія та археологія',
    url: 'http://hist.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.25,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.45,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 2,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська']
      },
      {
        name: 'Географія',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Філологічний',
    profession: 'Культурологія',
    program: 'Культурологія',
    url: 'http://phil.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.45,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.25,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 2,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська', 'Російська']
      },
      {
        name: 'Математика',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Філологічний',
    profession: 'Філологія. Українська мова та література',
    program: 'Українська мова та література',
    url: 'http://phil.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.45,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.25,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 2,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська', 'Російська']
      },
      {
        name: 'Математика',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Філологічний',
    profession: "Філологія. Слов'янські мови та літератури (переклад включно)",
    program: 'Мова та література (російська); переклад (російська, українська мови)',
    url: 'http://phil.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.45,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.25,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 2,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська', 'Російська']
      },
      {
        name: 'Математика',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Філологічний',
    profession: "Філологія. Слов'янські мови та літератури (переклад включно)",
    program: 'Мова та література (польська); переклад (польська, українська мови)',
    url: 'http://phil.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.45,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.25,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 2,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська', 'Російська']
      },
      {
        name: 'Математика',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Іноземних мов',
    profession: 'Філологія. Германські мови та літератури (переклад включно)',
    program: 'Англійська мова і переклад',
    url: 'http://fim.donnu.edu.ua',
    koefCert: 0.05,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
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
        name: 'Іноземна мова',
        koefItem: 0.55,
        minVal: 110,
        priority: 2,
        detail: ['Англійська']
      },
      {
        name: '',
        koefItem: 0,
        minVal: 0,
        priority: 3
      }
    ]
  },
  {
    department: 'Іноземних мов',
    profession: 'Філологія. Германські мови та літератури (переклад включно)',
    program: 'Німецька мова і перекллад',
    url: 'http://fim.donnu.edu.ua',
    koefCert: 0.05,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
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
        name: 'Іноземна мова',
        koefItem: 0.55,
        minVal: 110,
        priority: 2,
        detail: ['Англійська', 'Німецька']
      },
      {
        name: '',
        koefItem: 0,
        minVal: 0,
        priority: 3
      }
    ]
  },
  {
    department: 'Іноземних мов',
    profession: 'Філологія. Романські мови та літератури (переклад включно)',
    program: 'Французька мова і переклад',
    url: 'http://fim.donnu.edu.ua',
    koefCert: 0.05,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
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
        name: 'Іноземна мова',
        koefItem: 0.55,
        minVal: 110,
        priority: 2,
        detail: ['Англійська', 'Французька']
      },
      {
        name: '',
        koefItem: 0,
        minVal: 0,
        priority: 3
      }
    ]
  },
  {
    department: 'Філологічний',
    profession: 'Філологія. Прикладна лінгвістика',
    program: 'Прикладна лінгвістика',
    url: 'http://phil.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.45,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.25,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 2,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська', 'Російська']
      },
      {
        name: 'Математика',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Економічний',
    profession: 'Економіка',
    program: 'Економіка (Бізнес-аналітика)',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
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
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Географія',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Економічний',
    profession: 'Економіка',
    program: 'Управління персоналом та економіка праці',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
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
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Географія',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Економічний',
    profession: 'Економіка',
    program: 'Економіка підприємства',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
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
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Географія',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Історичний',
    profession: 'Політологія',
    program: 'Політологія',
    url: 'http://hist.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.25,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.45,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 2,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська']
      },
      {
        name: 'Географія',
        koefItem: 0.20,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Філологічний',
    profession: 'Психологія',
    program: 'Психологія',
    url: 'http://phil.donnu.edu.ua',
    koefCert: 0.10,
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
        koefItem: 0.35,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Біологія',
        koefItem: 0.25,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Історія України',
        koefItem: 0.25,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Історичний',
    profession: 'Міжнародні відносини, суспільні комунікації та регіональні студії',
    program: 'Міжнародні відносини',
    url: 'http://hist.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.25,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.35,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 3,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська']
      },
      {
        name: '',
        koefItem: 0,
        minVal: 0,
        priority: 3
      }
    ]
  },
  {
    department: 'Економічний',
    profession: 'Міжнародні економічні відносини ',
    program: 'Міжнародна економіка',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
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
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 3,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська']
      }
    ]
  },
  {
    department: 'Економічний',
    profession: 'Міжнародні економічні відносини ',
    program: 'Міжнародний бізнес. Бізнес-переклад',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
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
        name: 'Географія',
        koefItem: 0.30,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 3,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська']
      }
    ]
  },
  {
    department: 'Економічний',
    profession: 'Міжнародні економічні відносини',
    program: 'International Bussiness (Міжнародний бізнес)',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
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
        name: 'Іноземна мова',
        koefItem: 0.30,
        minVal: 170,
        priority: 2,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська']
      },
      {
        name: 'Географія',
        koefItem: 0.30,
        minVal: 170,
        priority: 3
      }
    ]
  },
  {
    department: 'Філологічний',
    profession: 'Журналістика',
    program: 'Журналістика',
    url: 'http://phil.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.45,
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
        name: 'Творчий конкурс',
        koefItem: 0.25,
        minVal: 115,
        priority: 2
      },
      {
        name: '',
        koefItem: 0,
        minVal: 0,
        priority: 3
      }
    ]
  },
  {
    department: 'Економічний',
    profession: 'Облік і оподаткування',
    program: 'Облік і оподаткування',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
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
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Географія',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Економічний',
    profession: 'Фінанси, банківська справа та страхування',
    program: 'Фінанси, банківська справа та страхування',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
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
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Географія',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Економічний',
    profession: 'Менеджмент',
    program: 'Менеджмент',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Математика',
        koefItem: 0.30,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Географія',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Економічний',
    profession: 'Менеджмент',
    program: 'Управління персоналом та економіка праці',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Математика',
        koefItem: 0.30,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 3,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська', 'Російська']
      }
    ]
  },
  {
    department: 'Економічний',
    profession: 'Маркетинг',
    program: 'Маркетинг',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.35,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Географія',
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
  },
  {
    department: 'Економічний',
    profession: 'Підприємництво, торгівля та біржова діяльність',
    program: 'Підприємництво і торгівля',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
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
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Географія',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Економічний',
    profession: 'Підприємництво, торгівля та біржова діяльність',
    program: 'Туристичний бізнес',
    url: 'http://ec.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 1
      },
      {
        name: 'Математика',
        koefItem: 0.30,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Географія',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Юридичний',
    profession: 'Право',
    program: 'Право',
    url: 'http://law.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.40,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Історія України',
        koefItem: 0.30,
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
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська']
      }
    ]
  },
  {
    department: 'Біологічний',
    profession: 'Біологія',
    program: 'Біологія',
    url: 'http://bio.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0.05,
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
    program: 'Хімія',
    url: 'http://chem.donnu.edu.ua/',
    koefCert: 0.10,
    koefCourses: 0.05,
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
        name: 'Хімія',
        koefItem: 0.25,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Біологія',
        koefItem: 0.25,
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
  },
  {
    department: 'Фізико-технічний',
    profession: 'Фізика та астрономія',
    program: 'Фізика та астрономія',
    url: 'http://phys.donnu.edu.ua',
    koefCert: 0.10,
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
    ]
  },
  {
    department: 'Фізико-технічний',
    profession: 'Прикладна фізика та наноматеріали',
    program: 'Технології інтернету речей',
    url: 'http://phys.donnu.edu.ua',
    koefCert: 0.10,
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
        name: 'Іноземна мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 2,
        detail: ['Англійська', 'Німецька']
      },
      {
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Математики та ІТ',
    profession: 'Математика',
    program: 'Математика',
    url: 'http://math.donnu.edu.ua',
    koefCert: 0.09,
    koefCourses: 0.01,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Математика',
        koefItem: 0.50,
        minVal: 130,
        priority: 1
      },
      {
        name: 'Фізика',
        koefItem: 0.20,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 3,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська']
      }
    ]
  },
  {
    department: 'Математики та ІТ',
    profession: 'Статистика',
    program: "Аналіз даних, прогноз поведінки об'єктів різної природи та керування ризиками",
    url: 'http://math.donnu.edu.ua',
    koefCert: 0.09,
    koefCourses: 0.01,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Математика',
        koefItem: 0.50,
        minVal: 130,
        priority: 1
      },
      {
        name: 'Фізика',
        koefItem: 0.20,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 3,
        detail: ['Англійська', 'Німецька', 'Французька', 'Іспанська']
      }
    ]
  },
  {
    department: 'Математики та ІТ',
    profession: 'Прикладна математика',
    program: "Комп’ютерно-математичне моделювання, комп'ютерні технології, інформаційні технології",
    url: 'http://math.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Математика',
        koefItem: 0.50,
        minVal: 130,
        priority: 1
      },
      {
        name: 'Фізика',
        koefItem: 0.20,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Історія України',
        koefItem: 0.20,
        minVal: 100,
        priority: 3,
      }
    ]
  },
  {
    department: 'Математики та ІТ',
    profession: 'Комп’ютерні науки',
    program: "Сучасні інформаційні технології та програмування",
    url: 'http://math.donnu.edu.ua',
    koefCert: 0.10,
    koefCourses: 0,
    items: [
      {
        name: 'Українська мова',
        koefItem: 0.20,
        minVal: 100,
        priority: 0
      },
      {
        name: 'Математика',
        koefItem: 0.50,
        minVal: 130,
        priority: 1
      },
      {
        name: 'Фізика',
        koefItem: 0.20,
        minVal: 100,
        priority: 2
      },
      {
        name: 'Історія України',
        koefItem: 0.20,
        minVal: 100,
        priority: 3,
      }
    ]
  },
  {
    department: 'Фізико-технічний',
    profession: 'Комп’ютерні науки',
    program: "Розробка програмного забезпечення та комп’ютерна графіка",
    url: 'http://phys.donnu.edu.ua',
    koefCert: 0.10,
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
        minVal: 125,
        priority: 1
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 2,
        detail: ['Англійська', 'Німецька']
      },
      {
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Фізико-технічний',
    profession: 'Комп’ютерні науки',
    program: "Computer Science (Комп'ютерні науки)",
    url: 'http://phys.donnu.edu.ua',
    koefCert: 0.10,
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
        minVal: 125,
        priority: 1
      },
      {
        name: 'Іноземна мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 2,
        detail: ['Англійська', 'Німецька']
      },
      {
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Фізико-технічний',
    profession: 'Кібербезпека',
    program: "Кібербезпека",
    url: 'http://phys.donnu.edu.ua',
    koefCert: 0.10,
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
        name: 'Іноземна мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 2,
        detail: ['Англійська', 'Німецька']
      },
      {
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  },
  {
    department: 'Фізико-технічний',
    profession: 'Метрологія та інформаційно-вимірювальна техніка',
    program: "Стандартизація, сертифікація та управління якістю в інформаційних технологіях",
    url: 'http://phys.donnu.edu.ua',
    koefCert: 0.10,
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
        name: 'Іноземна мова',
        koefItem: 0.30,
        minVal: 100,
        priority: 2,
        detail: ['Англійська', 'Німецька']
      },
      {
        name: 'Історія України',
        koefItem: 0.30,
        minVal: 100,
        priority: 3
      }
    ]
  }
];
