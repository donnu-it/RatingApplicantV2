import React from 'react';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import School from 'material-ui/svg-icons/social/school';

const TableInfo  = ({ dataList }) => {
  return (
    <table className="table table-hover table-striped table-responsive table-sm">
      <thead>
        <tr>
          <th className="table_th-fix"><h4>Спеціальність</h4></th>
          <th className="table_th-fix"><h4>Освітня програма</h4></th>
          <th><h4>Перший предмет</h4></th>
          <th><h4>Другий предмет</h4></th>
          <th className="table_th-fix"><h4>Предмети на вибір</h4></th>
        </tr>
      </thead>
      <tbody >
        {dataList.map((row, index) => (
          <tr key={index}>
            <td>
              <div className="icon_row">
                <School />
              </div>
              <div className="icon_row">
                <p><a href={row.url} className="cell-title">{row.profession}</a></p>
                {row.rating > 0 && row.profession !== 'Журналістика' && <p className="cell-detail"> Рейтинг абітурієнта: {(row.rating).toFixed(2)}</p>}
              </div>
            </td>
            <td>
              <p className="cell-title">{row.program}</p>
              <p className="cell-detail">Коефіцієнт атестату: {row.koefCert}</p>
              {row.koefCourses > 0 && <p className="cell-detail"> Коефіцієнт за курси: {row.koefCourses}</p>}
            </td>
            <td>
              <p className="cell-title">{row.items[0].name}</p>
              <p className="cell-detail">Ваговий коефіцієнт: {row.items[0].koefItem}</p>
              <p className="cell-detail">Мінімальний бал: {row.items[0].minVal}</p>
            </td>
            <td>
              <p className="cell-title">{row.items[1].name}</p>
              <p className="cell-detail">Ваговий коефіцієнт: {row.items[1].koefItem}</p>
              <p className="cell-detail">Мінімальний бал: {row.items[1].minVal}</p>
            </td>
            <td>
              <p className="cell-title">{row.items[2].name}{row.items[2].detail && ' (' + row.items[2].detail.join(', ') + ')'} </p>
              <p className="cell-title">
                {row.items[3].name} {row.items[3].detail && ' (' + row.items[3].detail.join(', ') + ')'}
              </p>
              <p className="cell-detail">Ваговий коефіцієнт: {row.items[2].koefItem}</p>
              <p className="cell-detail">Мінімальний бал: {row.items[2].minVal}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default TableInfo;