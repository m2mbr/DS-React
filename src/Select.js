import '@govbr-ds/core/dist/core.min.css';
import React, { useState, useEffect } from 'react';
import { Component } from 'react';

const core = require('@govbr-ds/core/dist/core');

class Select extends Component {
  constructor(props) {
    super();
    this.data = props.data
    this.setSelected = props.setSelected
    this.core = window.core
  }

  componentDidMount() {
    console.log('Teste....')
    const selectList = []
    for (const brSelect of window.document.querySelectorAll('.br-select')) {
      const brselect = new this.core.BRSelect('br-select', brSelect)
      brSelect.addEventListener('onChange', ev => this.getItem(selectList[0]))
      this.brSelect = brSelect
      selectList.push(brselect)
    }
  }

  getItem(select) {
    let value = select.selectedValue
    this.setSelected(this.data.find(item => item.id == value))
  }

  render() {
    return (
      <div>
        <div className="br-select">
          <div className="br-input">
            <label htmlFor="select-simple">Estados</label>
            <input type="text" placeholder="Selecione o item" />
            <button className="br-button" type="button" aria-label="Exibir lista" tabIndex="-1" data-trigger="data-trigger"><i className="fas fa-angle-down" aria-hidden="true"></i>
            </button>
          </div>
          <div className="br-list" tabIndex="0">
            {
              this.data.map( item => (
                <div className="br-item" tabIndex="-1" key={item.id}>
                <div className="br-radio">
                  <input id={item.id} type="radio" value={item.id} />
                  <label htmlFor={item.id}>{item.descricao}</label>
                </div>
              </div>
              ))
            }
        </div>
        </div>
      </div>
    )
  }
}

export default Select;