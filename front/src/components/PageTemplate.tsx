import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import BaseCard from './BaseCard'
import Editor from './Editor'

const useStyles = makeStyles((theme: Theme) => createStyles({
  row: {
    height: '400px',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  }
}))

const PageTemplate: React.FC = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <div className={classes.row}>
          <BaseCard><Editor width={'300px'} height={'300px'} /></BaseCard>
        </div>
        <div className={classes.row}>
          <BaseCard><Editor width={'300px'} height={'300px'} /></BaseCard>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default PageTemplate
