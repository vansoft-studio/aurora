/**
 * @fileoverview  This is a simple Material table
 * APIs:
 *  Checkbox  {bool}  default is false
 *    If defined adds a check box to the table
 *  Switch {Intiger} default 0
 *    If non-zero assums the value to be a coloumn number to 
 *    dispplayed as switch
 *  Delete {bool}  default is false
 *    If defined adds a delete icon to each row
 *  Contact {bool}  default is false
 *    If defined adds a Contact button
 *  Edit {Bool} default is false
 *    If defined adds an edit button
 *  TableHeader { 1 :<Column name>, 2: <Column name>}
 *    The values to be displayed in table header
 *  TableData P{Array{ 1 :<Column value>, 2: <Column value})
 *    The values in each table cells by row
 *  My test change on branch, another change
 */

import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import Switch from '@material-ui/core/Switch'

/**
 * Creates a material table with given data.
 */
class SimpleTable extends Component {
  /**
   * Create material table cells
   * @param {*} oneRow An object with elements of
   * one table row
   * @param {bools} isHeader if true the rows are part of the header
   */
  makeTableCells (oneRow, isHeader = false) {
    const tableCells = []

    for (var key in oneRow) {
      /**
       * If Switch property defined and 
       * this is the coloumn for switch value and
       * This is not the table header, then render the switch
       */
      if ( this.props.Switch && (this.props.Switch == key) && !isHeader ) {
        tableCells.push(<TableCell><Switch checked={oneRow[key]}></Switch></TableCell>)
      }
      else {
        tableCells.push(<TableCell>{oneRow[key]}</TableCell>)
      }
    }

    return tableCells
  }

  /**
  * Takes an arry of table row objects
  * @param {Array{}} tableData
  * @param {bools} isHeader if true the rows are part of the header
  */
  makeTableRows (tableData, isHeader = false) {
    const checkBox = this.props.CheckBox ? <TableCell padding='checkbox'> <Checkbox /> </TableCell> : null

    return (tableData.map((row) => {
      return (<TableRow>
        {checkBox}
        {this.makeTableCells(row, isHeader)}
      </TableRow>)
    }))
  }

  render () {
    return (
      <div>
        <Table >
          {/**
          * Note, table header below is passed as an array, because the
          * funtion makeTableRows takes an array
          */}
          <TableHead>{this.makeTableRows([this.props.TableHeader], true)}</TableHead>
          {/** Here the table body is alreay an array */}
          <TableBody>{this.makeTableRows(this.props.TableData)}</TableBody>
        </Table>
      </div >
    )
  }
}

/**
 * Default values for  props that are not passed.
 */
SimpleTable.defaultProps = {
  Checkbox: false,
  Delete: false,
  Contact: false,
  Edit: false,
  Switch: 0
}

export default SimpleTable
