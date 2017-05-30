import React from 'react';

const Footer = (props) => {
  const getFullYear = new Date().getFullYear();
  return (
    <div className="App-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-right">
            <p>&copy; 1937-{getFullYear} Донецький національний університет імені Василя Стуса</p>
            <p>Використання будь-яких матеріалів, розміщених на даному сайті, дозволяється за умови посилання на
              <a href="https://www.donnu.edu.ua"> &nbsp;www.donnu.edu.ua.&nbsp;</a><br/>Для
              Для інтернет-видань &ndash; обов'язковим є пряме посилання, відкрите для пошукових систем.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;