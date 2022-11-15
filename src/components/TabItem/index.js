import './index.css'

const TabItem = props => {
  const {tabDetails, active, onClick} = props

  const onClickTabItem = () => {
    onClick(tabDetails.tabId)
  }
  return (
    <li className="tab-item">
      <button
        className={active ? 'active-tab tab-item-button' : 'tab-item-button'}
        type="button"
        onClick={onClickTabItem}
      >
        {tabDetails.displayText}
      </button>
    </li>
  )
}
export default TabItem
