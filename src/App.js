import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    saveCard: [],
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const { cardTrunfo } = this.state;
    let value;
    if (target.type === 'checkbox') {
      value = !cardTrunfo;
      this.setState({ cardTrunfo: value });
    } else {
      value = target.value;
    }
    this.setState({ [name]: value }, () => this.checkButtonDisabled());
  };

  checkButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
    } = this.state;
    const validName = cardName.length === 0;
    const validDescription = cardDescription.length === 0;
    const validRare = cardRare.length === 0;
    const validImage = cardImage.length === 0;
    const validCardAttr1 = cardAttr1 > Number('90') || cardAttr1 < 0;
    const validCardAttr2 = cardAttr2 > Number('90') || cardAttr2 < 0;
    const validCardAttr3 = cardAttr3 > Number('90') || cardAttr3 < 0;
    const totalAttrSum = Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3)
      > Number('210');
    console.log('total', totalAttrSum);
    console.log(
      'total',
      Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3),
    );

    this.setState({
      isSaveButtonDisabled:
        validName
        || validDescription
        || validImage
        || validRare
        || validCardAttr1
        || validCardAttr2
        || validCardAttr3
        || totalAttrSum,
    });
  };

  handleOnButtonSave = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo,
      hasTrunfo,
    } = this.state;
    this.setState((prevState) => ({
      saveCard: [
        ...prevState.saveCard,
        {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardImage,
          cardTrunfo,
          hasTrunfo,
        },
      ],
    }));
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  // componentDidUpdate() {
  //   console.log(this.state.saveCard);
  // }

  render() {
    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      saveCard } = this.state;
    return (
      <div>
        <h1>Tryunfo!!!</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardDescription={ cardDescription }
          cardName={ cardName }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
          onSaveButtonClick={ this.handleOnButtonSave }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        { saveCard.map((item) => (
          <Card
            key={ item.cardName }
            cardName={ item.cardName }
            cardDescription={ item.cardDescription }
            cardAttr1={ item.cardAttr1 }
            cardAttr2={ item.cardAttr2 }
            cardAttr3={ item.cardAttr3 }
            cardImage={ item.cardImage }
            cardRare={ item.cardRare }
            cardTrunfo={ item.cardTrunfo }

          />
        )) }
      </div>
    );
  }
}

export default App;
