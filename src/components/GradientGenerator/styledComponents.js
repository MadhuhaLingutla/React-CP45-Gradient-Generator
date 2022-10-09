// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  background-image: linear-gradient(
    ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  height: 100vh;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const Instruction = styled.p`
  color: #ededed;
  font-size: 25px;
  font-weight: bold;
`
export const DirectionButtonsContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
export const ColorPicker = styled.ul`
  list-style: none;
  display: flex;
`
export const ColorPickContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`
export const InputLabel = styled.p`
  color: #ededed;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`
export const ColorInput = styled.input`
  height: 30px;
  width: 80px;
  background-color: transparent;
  border: none;
`
export const GenerateButton = styled.button`
  font-size: 15px;
  color: #1e293b;
  font-weight: bold;
  background-color: #00c9b7;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border: none;
  margin-top: 10px;
`
