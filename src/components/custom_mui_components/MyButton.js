import { Button } from '@material-ui/core'
import {styled} from '@material-ui/core/styles'

const MyButton = styled(Button)({
    backgroundColor: '#bf9410',
    borderRadius: '0',
    color: '#ffffff',
    boxShadow: 'none',
    padding: '13px 23px 13px 33px',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '1.2em',
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    boxSizing: 'border-box',
    '&:hover': {
        backgroundColor: '#cca940',
        boxShadow: 'none'
    }
})

export default MyButton
