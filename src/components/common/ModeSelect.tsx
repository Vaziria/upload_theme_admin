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
      key: 'dump_category_facet',
      display_name: 'kategori facet csv'
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
    const props: JSX.IntrinsicElements["option"] = {};
    props.value = props.key=  item.key;
    props.children = item.display_name;

    return <option {...props} />
  }

  render(): JSX.Element {
    const props: JSX.IntrinsicElements["select"] = {}
    props.value = this.props.value
    props.className = "form-control"
    props.onChange = (event) => {
      const value = event.target.value as TaskMode
      this.props.onChange(value)
    }
    props.children = listItem.map(this.renderOption)

    return <select {...props} />
  }
}