//inspirer de https://codesandbox.io/s/f63sw?module=/example.js&file=/example.js:0-1690
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const Themes = [
  { key: 'af', value: 'af',  text: 'Alice in Wonderland' },
  { key: 'ax', value: 'ax', text: 'Great Gatsby/1920s' },
  { key: 'al', value: 'al',  text: 'Black and White Ball' },
  { key: 'dz', value: 'dz',  text: 'Enchanted Forest Theme' },
  
  
 
]



const DropdownExampleSearchSelection = () => (
  <Dropdown className="dropdown" id="drop"
    placeholder='Select Theme'
    fluid 
    search 
    selection
   
    options={Themes}
  />
)



export default DropdownExampleSearchSelection
