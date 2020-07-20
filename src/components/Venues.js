//inspirer de https://codesandbox.io/s/f63sw?module=/example.js&file=/example.js:0-1690
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const Venues = [
  { key: 'af', value: 'af',  text: 'Canadian Museum of History' },
  { key: 'ax', value: 'ax', text: 'Sala San Marco' },
  { key: 'al', value: 'al',  text: ' The Guild Estate' },
  { key: 'dz', value: 'dz',  text: 'Deer Creek Golf & Banquet Facility' },
 
 
]



const DropdownExampleSearchSelection = () => (
  <Dropdown className="dropdown"
    placeholder='Select Venue' 
    fluid 
    search 
    selection
   
    options={Venues}
  />
)



export default DropdownExampleSearchSelection
