"user servee"

import React from 'react';
import { Header } from './components/header/Header';
import { TblBodyRow } from './components/table/TblBodyRow';
import { TblHeadRow } from './components/table/TblHeadRow';
import { TableContainer } from './components/table/TableContainer';

const TaskList = () => {
    return (
        <div><div className="overflow-x-auto">
            <Header />
            <TableContainer>
                <TblHeadRow />
                <TblBodyRow />
            </TableContainer>
        </div></div>
    )
}

export default TaskList;