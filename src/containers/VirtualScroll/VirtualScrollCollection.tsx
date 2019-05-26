import * as React from 'react'
import { AutoSizer, Collection } from 'react-virtualized'
/********************************************************************
                WIP -  CC started but deprioritised 25/5/19
Want way to build flexible container so that any child components can
more simply sit inside <VirtualScroll /> , however challenging as 
3rd party lib expects explicit length, height, rendered components etc
instead of just taking from the child elements. To work on.                
**********************************************************************/

/*  Component to automatically render large data collection with variable column widths
    so that only the visible parts are painted by the DOM. For more info see:
    https://github.com/bvaughn/react-virtualized/blob/HEAD/docs/usingAutoSizer.md
*/

interface IProps {
  data: any[]
  renderComponent: React.Component
}
export default class VirtualScrollCollection extends React.PureComponent<
  IProps,
  null
> {
  render() {
    return (
      <AutoSizer>
        {({ width, height }) => (
          // note, this is a minimal implementation, more options found at:
          // https://github.com/bvaughn/react-virtualized/blob/master/docs/Collection.md
          <Collection
            cellCount={this.props.data.length}
            cellRenderer={this.cellRenderer}
            cellSizeAndPositionGetter={this.cellSizeAndPositionGetter}
            height={height}
            width={width}
          />
        )}
      </AutoSizer>
    )
  }
  private cellRenderer({ index, isScrolling, key, style }) {
    const { list } = this.context
    const datum = list.get(index % list.size)
    return (
      <div key={key} style={style}>
        {/* Todo */}
      </div>
    )
  }

  private cellSizeAndPositionGetter() {
    // TODO
    return {
      height: 0,
      width: 0,
      x: 0,
      y: 0,
    }
  }
}
