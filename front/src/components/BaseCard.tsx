import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) => createStyles({
  card: {
    minWidth: 275,
    width: '100%',
    height: '100%'
  }
}))

interface BaseCardProps {
  children: React.ReactNode
  onExecute?: () => void
}

const BaseCard: React.FC<BaseCardProps> = (props) => {
  const classes = useStyles()
  const { children, onExecute } = props
  return (
    <Card className={classes.card}>
      <CardContent>
        {children}
      </CardContent>
      <CardActions>
        <Button onClick={onExecute} size="small">Execute</Button>
      </CardActions>
    </Card>
  )
}

export default BaseCard
