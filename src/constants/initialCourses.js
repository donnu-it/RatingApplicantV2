export default {
  courses: [
    {
      department: 'Фізико-технічний',
      profession: 'Середня освіта (фізика)',
      program: 'Середня освіта (фізика)',
      koefCert: 0.1,
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
          min: 100,
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
          min: 100,
          priority: 2
        },
        {
          name: 'Іноземна мова',
          koefItem: 0.20,
          minVal: 100,
          priority: 3,
          detail: ["Англійська","Німецька", "Французька", "Іспанська", "Російська"]
        }
      ],
    }
  ]
};