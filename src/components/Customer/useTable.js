import React from 'react'
import { Table } from '@material-ui/core'
import { TableRow } from '@material-ui/core'
import { TableCell } from '@material-ui/core'
import { TableHead } from '@material-ui/core'


export default function useTable(records, headcells) {
    
    const TblContainer = props => (
        <Table>
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
    
    return {
        TblContainer,
        TblHead
    }
}
