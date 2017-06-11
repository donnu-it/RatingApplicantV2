import React from 'react';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import School from 'material-ui/svg-icons/social/school';

const TableInfo  = ({ dataList }) => {
  return (
    <div className="table-block">
      <Table fixedHeader={true} fixedFooter={true} selectable={false} multiSelectable={false} >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false} >
          <TableRow>
            <TableHeaderColumn rowSpan="2"><h4>Спеціальність</h4></TableHeaderColumn>
            <TableHeaderColumn rowSpan="2"><h4>Освітня програма</h4></TableHeaderColumn>
            <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
              <h4>Сертифікати ЗНО</h4>
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn><h4>Перший предмет</h4></TableHeaderColumn>
            <TableHeaderColumn><h4>Другий предмет</h4></TableHeaderColumn>
            <TableHeaderColumn><h4>Предмети на вибір</h4></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} deselectOnClickaway={true} showRowHover={true} stripedRows={true} >
          {dataList.map((row, index) => (
            <TableRow key={index}>
              <TableRowColumn>
                <div className="Icon-name-row">
                  <School />
                </div>
                <div className="Icon-name-row">
                  <a href="#" className="Course-name">{row.profession}</a>
                  {row.rating > 0 && <p className="Course-detail"> Рейтинг абітурієнта: {(row.rating).toFixed(2)}</p>}
                </div>
              </TableRowColumn>
              <TableRowColumn>
                <p className="Course-name">{row.program}</p>
                <p className="Course-detail">Коефіцієнт атестату: {row.koefCert}</p>
                {row.koefCourses > 0 && <p className="Course-detail"> Коефіцієнт за курси: {row.koefCourses}</p>}
              </TableRowColumn>
              <TableRowColumn>
                <p className="Course-name">{row.items[0].name}</p>
                <p className="Course-detail">Ваговий коефіцієнт: {row.items[0].koefItem}</p>
                <p className="Course-detail">Мінімальний бал: {row.items[0].minVal}</p>
              </TableRowColumn>
              <TableRowColumn>
                <p className="Course-name">{row.items[1].name}</p>
                <p className="Course-detail">Ваговий коефіцієнт: {row.items[0].koefItem}</p>
                <p className="Course-detail">Мінімальний бал: {row.items[0].minVal}</p>
              </TableRowColumn>
              <TableRowColumn>
                <p className="Course-name">{row.items[2].name} </p>
                <p className="Course-name">
                  {row.items[3].name} {row.items[3].detail && '(' + row.items[3].detail.join(', ') + ')'}
                </p>
                <p className="Course-detail">Ваговий коефіцієнт: {row.items[0].koefItem}</p>
                <p className="Course-detail">Мінімальний бал: {row.items[0].minVal}</p>
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
};

export default TableInfo;