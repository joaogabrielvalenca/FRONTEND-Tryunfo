import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
    } = this.props;
    return (
      <div
        style={ {
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid red',
        } }
      >
        <h2>Cartinhas do barulho</h2>
        <p data-testid="name-card">
          nome:
          {' '}
          {cardName}
        </p>
        <img src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">
          descricao:
          {' '}
          {cardDescription}
        </p>
        <h4 data-testid="attr1-card">
          Atributo 1:
          {' '}
          {cardAttr1}
        </h4>
        <h4 data-testid="attr2-card">
          Atributo 2:
          {' '}
          {cardAttr2}
        </h4>
        <h4 data-testid="attr3-card">
          Atributo 3:
          {' '}
          {cardAttr3}
        </h4>
        <h4 data-testid="rare-card">
          Raridade:
          {' '}
          {cardRare}
        </h4>
        {cardTrunfo ? (
          <h4 data-testid="trunfo-card">
            Super Trunfo
            {cardTrunfo}
          </h4>
        ) : null}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
