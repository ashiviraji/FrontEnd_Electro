import React, {useState} from 'react'
import { makeStyles, Table } from '@material-ui/core'
import { TableRow } from '@material-ui/core'
import { TableCell } from '@material-ui/core'
import { TableHead } from '@material-ui/core'
import { TablePagination } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.light,
        },
        '& tbody td' : {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
}))

export default function useTable(records, headcells, filterFn) {

    const classes = useStyles();

    const pages = [5,10,25]
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage]=useState(pages[page])
    
    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )
    
    const TblHead = props => {
        return (<TableHead>
            <TableRow>
                {
                    headcells.map(headCell => (<TableCell key={headCell.id}>
                        {headCell.label}
                    </TableCell>))
                }
            </TableRow>
        </TableHead>)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value,10))
        setPage(0);
    }
    
    const TblPagination = () => (<TablePagination
        component = "div"
        page = {page}
        rowsPerPageOptions = {pages}
        rowsPerPage={rowsPerPage}
        count = {records.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage = {handleChangeRowsPerPage}
    />)

    // function stableSort(array, comparator){
    //     const stabilizedThis = array.map((el, index) => [el, index]);
    //     stabilizedThis.sort((a,b) => {
    //         const order = comparator(a[0], b[0])
    //         if (order !== 0) return order;
    //         return a[1] - b[1];
    //     })
    //     return stabilizedThis.map((el) => el[0]);
    // }

    const recordsAfterPagingAndSorting = () => {
        return filterFn.fn(records).slice(page*rowsPerPage, (page+1)*rowsPerPage)
    }

    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }
}
