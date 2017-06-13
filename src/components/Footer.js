import React from 'react';

const Footer = (props) => {
  const getFullYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-right footer__context">
            <p>&copy; 1937-{getFullYear} Донецький національний університет імені Василя Стуса</p>
            <p>Використання будь-яких матеріалів, розміщених на даному сайті, дозволяється за умови посилання на&nbsp;
              <a href="https://www.donnu.edu.ua">www.donnu.edu.ua</a><br/>
              Для інтернет-видань &ndash; обов'язковим є пряме посилання, відкрите для пошукових систем.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;