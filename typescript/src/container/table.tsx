/**
 * 这里是容器组件
 */
import * as React from 'react'
import { connect } from 'react-redux'
import * as Actions from 'reduxs/action'
import { Enthusiasm } from 'reduxs/reducer'
interface Props {
  decrementEnthusiasm: () => {},
  incrementEnthusiasm: () => {},
  enthusiasmLevel: number
}
class Table extends React.Component<Props, {}> {
  public state = {
  }
  constructor(props: Props) {
    super(props)
    this.state = {}
    console.log(props)
  }
  public render() {
    return (
      <div>
        <button 
          onClick={() => {
          this.props.decrementEnthusiasm()
        }}>减少</button>
        <button
          onClick={() => {
          this.props.incrementEnthusiasm()
        }}>增加</button>
        <span>{ this.props.enthusiasmLevel }</span>
      </div>
    )
  }
}

export function mapStateToProps(store:{enthusiasm: Enthusiasm}, ownProps: any) {
  return {
    enthusiasmLevel: store.enthusiasm.enthusiasmLevel,
  }
}
function mapDispatchToProps(dispatch: any) {
  return {
    decrementEnthusiasm: () => dispatch(Actions.decrementEnthusiasm()),
    incrementEnthusiasm: () => dispatch(Actions.incrementEnthusiasm())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table)
