import React from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/sql'
import 'brace/theme/github'

const Editor: React.FC = () => {
  const [code, setCode] = React.useState('')
  const handleChange = (value: string, event?: any) => {
    console.log('new value...', value)
    console.log('event:', event)
    setCode(value)
  }
  return (
    <AceEditor
      mode="sql"
      theme="github"
      value={code}
      onChange={handleChange}
    />
  )
}

export default Editor
