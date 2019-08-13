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
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import '../App.css'
import { Grid } from '@material-ui/core'
const MAX_COUNTER = 5
/**
 * Creates a material table with given data.
 */
class SimpleTable extends Component {
  constructor (props) {
    super(props)
    this.imageContext = require.context('../../public/assets/images/avatars/', true)
    this.state = { counter: 0 }
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      2000)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState((state) => {
      if (state.counter > MAX_COUNTER) {
        clearInterval(this.timerID)
      } else {
        return {
          counter: state.counter + 1
        }
      }
    }
    )
  }

  /**
   * Create material table cells
   * @param {*} oneRow An object with elements of one table row
   * @param {bools} isHeader if true the rows are part of the header
   */
  makeTableCells (oneRow, isHeader = false) {
    const tableCells = []
    const showCheck = this.state.counter >= 1
    const showSwitch = this.state.counter >= 2
    const showAvatar = this.state.counter >= 3
    const showIcon = this.state.counter >= 4
    const showChip = this.state.counter >= 5
    showCheck && tableCells.push(<TableCell padding='checkbox'> <Checkbox /> </TableCell>)
    for (var key in oneRow) {
      /**
     * If Switch property defined and
     * this is the coloumn for switch value and
     * This is not the table header, then render the switch
     */
      if (showSwitch && (this.props.Switch === key) && !isHeader) {
        tableCells.push(<TableCell> <Switch checked={oneRow[key]} /></TableCell>)
      } else if ((key === '1') && !isHeader) {
        tableCells.push(
          <TableCell style={{ alignItems: 'center', display: 'flex' }}>
            {showAvatar && <Avatar src={this.imageContext(oneRow[key].avatar)} />}
            <div style={{ padding: '5%' }}>{oneRow[key].name}</div>
          </TableCell>)
      } else if ((key === '6') && !isHeader) {
        tableCells.push(<TableCell >{showChip &&
          <Chip color='secondary' label={oneRow[key].status} />}
        </TableCell>)
      } else {
        tableCells.push(<TableCell>{oneRow[key]}</TableCell>)
      }
    }
    showIcon && tableCells.push(<TableCell padding='checkbox'>  {<i class='material-icons'>edit</i>}
      {<i class='material-icons'>delete</i>} </TableCell>)

    return tableCells
  }

  /**
  * Takes an arry of table row objects
  * @param {Array{}} tableData
  * @param {bools} isHeader if true the rows are part of the header
  */
  makeTableRows (tableData, isHeader = false) {
    return (tableData.map((row) => {
      return (<TableRow>

        {this.makeTableCells(row, isHeader)}

      </TableRow>)
    }))
  }

  render () {
    return (
      <Grid >
        <Table >
          {/**
          * Note, table header below is passed as an array, because the
          * function makeTableRows takes an array
          */}
          <TableHead id='tablehead'>{this.makeTableRows([this.props.TableHeader], true)}</TableHead>
          {/** Here the table body is already an array */}
          <TableBody id='tablebody'>{this.makeTableRows(this.props.TableData)}</TableBody>
        </Table>
      </Grid>
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
