import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  Heading,
  Instruction,
  DirectionButtonsContainer,
  ColorInput,
  ColorPickContainer,
  InputLabel,
  ColorPicker,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    selectedDirection: gradientDirectionsList[0].value,
    selectedColor1: '#8ae323',
    selectedColor2: '#014f7b',
    tempColor1: '#8ae323',
    tempColor2: '#014f7b',
    tempDirection: gradientDirectionsList[0].value,
  }

  updateDirection = value => {
    this.setState({tempDirection: value})
  }

  updateColor1 = event => {
    this.setState({tempColor1: event.target.value})
  }

  updateColor2 = event => {
    this.setState({tempColor2: event.target.value})
  }

  changeGradient = () => {
    const {tempDirection, tempColor1, tempColor2} = this.state
    this.setState({
      selectedDirection: tempDirection,
      selectedColor1: tempColor1,
      selectedColor2: tempColor2,
    })
  }

  render() {
    const {
      selectedDirection,
      selectedColor1,
      selectedColor2,
      tempColor1,
      tempColor2,
      tempDirection,
    } = this.state
    const gradientDirection = `to ${selectedDirection}`
    return (
      <GradientGeneratorContainer
        color1={selectedColor1}
        color2={selectedColor2}
        direction={gradientDirection}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Instruction>Choose Direction</Instruction>
        <DirectionButtonsContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              buttonDetails={each}
              tempDirection={tempDirection}
              updateDirection={this.updateDirection}
              key={each.directionId}
            />
          ))}
        </DirectionButtonsContainer>
        <Instruction>Pick the Colors</Instruction>
        <ColorPicker>
          <ColorPickContainer>
            <InputLabel>{tempColor1}</InputLabel>
            <ColorInput
              type="color"
              id="color1"
              value={tempColor1}
              onChange={this.updateColor1}
            />
          </ColorPickContainer>
          <ColorPickContainer>
            <InputLabel>{tempColor2}</InputLabel>
            <ColorInput
              type="color"
              id="color2"
              value={tempColor2}
              onChange={this.updateColor2}
            />
          </ColorPickContainer>
        </ColorPicker>
        <GenerateButton type="button" onClick={this.changeGradient}>
          Generate
        </GenerateButton>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
