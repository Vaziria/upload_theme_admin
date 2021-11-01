import React from "react"
import { TaskMode } from "../../model/Task"

type OptItem = {
  key: TaskMode
  display_name: string
}

const listItem: OptItem[] = [
    {
      key: 'toko_username',
      display_name: 'list username toko txt'
    },
    {
      key: 'product_url',
      display_name: 'list url txt'
    },
    {
      key: 'category',
      display_name: 'kategori'
    },
    {
      key: 'dump_category',
      display_name: 'kategori csv'
    },
    {
      key: 'keyword',
      display_name: 'keyword'
    },
    // {
    //   key: 'url',
    //   display_name: 'url'
    // }
]

interface IProp {
  onChange: (mode: TaskMode) => void
  value?: TaskMode 
}

export default class ModeSelect extends React.Component<IProp> {
  renderOption(item: OptItem): JSX.Element {
    return <option value={item.key} key={item.key}>{ item.display_name }</option>
  }

  render(): JSX.Element {
    return (
      <select className="form-control"
        value={this.props.value}
        onChange={(event) => {
          // eslint-disable-next-line
          const value = event.target.value as any
          this.props.onChange(value)
        }}>
        { listItem.map(this.renderOption) }
      </select>
    )
  }
}