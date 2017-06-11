import React, { Component }  from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import School from 'material-ui/svg-icons/social/school';

class TableInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false
    };
  };

  render() {
    const {dataList} = this.props;
    return (
      <div className="table-block">
        <Table
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
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
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {dataList.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>
                  <div className="Icon-name-row">
                    <School />
                  </div>
                  <div className="Icon-name-row">
                    <a href="#" className="Course-name">{row.profession}</a>
                    {row.rating > 0 && <p className="Course-detail"> Рейтинг абітурієнта: {row.rating}</p>}
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
                  <p
                    className="Course-name">{row.items[3].name} {row.items[3].detail && '(' + row.items[3].detail.join(', ') + ')'}</p>
                  <p className="Course-detail">Ваговий коефіцієнт: {row.items[0].koefItem}</p>
                  <p className="Course-detail">Мінімальний бал: {row.items[0].minVal}</p>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}
export default TableInfo;