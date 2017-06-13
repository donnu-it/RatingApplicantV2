import React from 'react';

const Intro = (props) => {
  return (
    <div className="intro-block">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
          <div className="number">1</div>
        </div>
        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
          <h1>Оберіть три предмети</h1>
          <p className="intro"> Необхідно обрати із запропонованого переліку предмети, наявні у сертифікаті.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
        <div className="number">2</div>
        </div>
        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
        <h1>Отримайте перелік програм підготовки</h1>
      <p className="intro"> А також інформацію про мінімальні бали, необхідні для вступу, та вагові коефіцієнти до конкурсних предметів.</p>
      </div>
      </div>
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
        <div className="number">3</div>
        </div>
        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
        <h1>Розрахуйте свій конкурсний бал для кожного напряму підготовки</h1>
      <p className="intro">Внесіть кількість балів сертифікату ЗНО, щоб розрахувати свій конкурсний бал для кожного напряму підготовки.</p>
      </div>
      </div>
    </div>
  );
};


export default Intro;