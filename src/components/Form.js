import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;
    return (
      <div>
        <form style={ { display: 'flex', flexDirection: 'column' } }>
          <label htmlFor="cardName">
            Nome
            <input
              id="cardName"
              placeholder="Nome da carta"
              type="text"
              value={ cardName }
              name="cardName"
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição
            <textarea
              type="text"
              value={ cardDescription }
              name="cardDescription"
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="cardAttr1">
            Atributo 1
            <input
              type="number"
              value={ cardAttr1 }
              name="cardAttr1"
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="cardAttr2">
            Atributo 2
            <input
              type="number"
              value={ cardAttr2 }
              name="cardAttr2"
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="cardAttr3">
            Atributo 3
            <input
              type="number"
              value={ cardAttr3 }
              name="cardAttr3"
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="cardImage">
            Imagem
            <input
              type="text"
              value={ cardImage }
              name="cardImage"
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
          <label htmlFor="cardRare">
            Selecione a raridade:
            <select
              value={ cardRare }
              name="cardRare"
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          {!hasTrunfo ? (
            <label htmlFor="cardTrunfo">
              Super Trunfo
              <input
                type="checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                data-testid="trunfo-input"
              />
            </label>
          ) : (
            <h4>Você já tem um Super Trunfo em seu baralho</h4>
          )}

          <button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
            value="saveButton"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
