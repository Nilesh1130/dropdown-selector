import React, { useState } from "react"

import Dropdown from "./components/Dropdown"

const dropdownOptions = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
]

export default () => {
  // state to manage dropdown selection
  const [selected, setSelected] = useState(dropdownOptions[0])
  return (
    <div>
      <Dropdown dropdownOptions={dropdownOptions} selected={selected} onSelectedChange={setSelected} />
    </div>
  )
}