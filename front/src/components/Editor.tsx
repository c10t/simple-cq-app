import React from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/sql'
import 'brace/theme/github'

export interface EditorProps {
  onTextChange?: (value: string, event?: any) => void
  width?: string
  height?: string
}

const Editor: React.FC<EditorProps> = (props) => {
  const { onTextChange = () => void (0), width = '100%', height = '600px' } = props
  const [code, setCode] = React.useState('')
  const handleChange = (value: string, event?: any) => {
    onTextChange(value, event)
    setCode(value)
  }
  return (
    <AceEditor
      mode="sql"
      theme="github"
      width={width}
      height={height}
      value={code}
      onChange={handleChange}
    />
  )
}

export default Editor
