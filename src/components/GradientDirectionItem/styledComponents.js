// Style your elements here
import styled from 'styled-components'

export const DirectionButtonItem = styled.li`
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`
export const DirectionButton = styled.button`
  width: 100px;
  border: none;
  background-color: white;
  opacity: ${props => (props.tempDirection === props.buttonValue ? 1 : 0.5)};
  color: #1e293b;
  font-size: 15px;
  border-radius: 5px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
`
