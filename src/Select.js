import '@govbr-ds/core/dist/core.min.css';
import { Component } from 'react';
const core = require('@govbr-ds/core/dist/core');


class Select extends Component {
  constructor(props) {
    super();
    this.data = props.data
    this.setSelected = props.setSelected
  }

  componentDidMount() {
    const selectList = []
    for (const brSelect of window.document.querySelectorAll('.br-select')) {
      const brselect = new core.BRSelect('br-select', brSelect)
      brSelect.addEventListener('onChange', ev => this.getItem(brselect))
      this.brSelect = brselect
      selectList.push(brselect)
    }
  }

  getItem(select) {
    let value = select.selectedValue
    if(value !=='-1'){
      this.setSelected(this.data.find((item) => item.id == value));
    } else {
      this.setSelected({});
    }
    console.log(value)

  }

  render() {
    return (
      <div>
        <div className="br-select">
          <div className="br-input">
            <label htmlFor="select-simple">Estados</label>
            <input type="text" placeholder="Selecione o item" />
            <button
              className="br-button"
              type="button"
              aria-label="Exibir lista"
              tabIndex="-1"
              data-trigger="data-trigger"
            >
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </button>
          </div>
          <div className="br-list" tabIndex="0">
            <div className="br-item" tabIndex="-1">
              <div className="br-radio">
                <input type="radio" value={-1} id={-1} htmlFor={-1} />
                <label htmlFor={-1}>{'Não Selecionar nada'}</label>
              </div>
            </div>
            {
              this.data.map( item => (
                <div className="br-item" tabIndex="-1" key={item.id}>
                  <div className="br-radio">
                    <input id={item.id} type="radio" value={item.id} />
                    <label htmlFor={item.id}>{item.descricao}</label>
                  </div>
                </div>
                )
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Select;
