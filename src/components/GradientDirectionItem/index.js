// Write your code here

import {DirectionButtonItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {tempDirection, buttonDetails, updateDirection} = props
  const {value, displayText} = buttonDetails

  const onClickDirection = () => {
    updateDirection(value)
  }

  return (
    <DirectionButtonItem>
      <DirectionButton
        tempDirection={tempDirection}
        buttonValue={value}
        onClick={onClickDirection}
      >
        {displayText}
      </DirectionButton>
    </DirectionButtonItem>
  )
}

export default GradientDirectionItem
