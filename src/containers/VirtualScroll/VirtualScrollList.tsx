import * as React from 'react'
import { AutoSizer, List } from 'react-virtualized'

/*  Component to automatically render large data list so that only the visible
    parts are painted by the DOM. For more info see:
    https://github.com/bvaughn/react-virtualized/blob/HEAD/docs/usingAutoSizer.md
*/

interface IProps {
  data: any[]
  rowComponent: React.Component
}
export default class AutoSizerExample extends React.PureComponent<
  IProps,
  null
> {
  render() {
    return (
      <AutoSizer>
        {({ width, height }) => (
          <List
            height={height}
            rowCount={this.props.data.length}
            rowHeight={30}
            rowRenderer={this.rowRenderer}
            width={width}
          />
        )}
      </AutoSizer>
    )
  }
  rowRenderer = ({ index, isScrolling, key, style }) => {
    return <div key={key}>{this.props.rowComponent}</div>
  }
}
