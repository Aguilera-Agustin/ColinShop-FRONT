import { indigo, red } from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette:{
        primary: indigo,
        secondary: red
    }
})

export default theme;