import React, { Component } from 'react'
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { score, name, description, doScore } = this.props
    let blocked = score !== undefined
    return (
      <tr
        className={`RuleRow RuleRow-${blocked ? 'disabled' : 'active'}`}
        onClick={blocked ? null : doScore}>
        <td className='RuleRow-name'>{name}</td>
        <td className='RuleRow-score'>{blocked ? score : description}</td>
      </tr>
    )
  }
}

export default RuleRow
