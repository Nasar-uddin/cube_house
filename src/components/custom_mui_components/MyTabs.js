import {withStyles} from '@material-ui/core/styles'
import {Tabs, Tab} from '@material-ui/core'

const MyTabs = withStyles((theme)=>({
    root: {
        minHeight: '30px'
    },
    indicator: {
        display: 'none',
    },
    flexContainer: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    }
}))(Tabs);

export const MyTab = withStyles((theme)=>({
    root: {
        minHeight: '30px',
        minWidth: '100px',
        padding: '3px 5px',
        marginRight: '15px',
        opacity: 1,
    },
    labelIcon: {
        marginRight: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '14px',
        fontWeight: '700',
        color: '#2d2e32',
        '&> *:first-child': {
            marginRight: '10px',
            marginBottom: '0px !important',
            fontSize: '20px',
        },
        '&::before': {
            content: '""',
            zIndex: '-1',
            display: 'block',
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '0px',
            backgroundColor: '#f8ecc7',
            transition: '0.3s'
        },
        '&:hover': {
            '&::before': {
                width: '100%'
            }
        }
    },
    selected: {
        color: '#2d2e32',
        backgroundColor: '#f8ecc7'
    }
}))(Tab)
export default MyTabs