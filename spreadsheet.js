import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-360';
/*let spreadsheetConfig = {
    rows: 5,
    columns: 5,
    headColumn: true,
    headColumnIsString: true,
    headRow: true,
    headRowIsString: true,
    canAddRow: false,
    canAddColumn: false,
    emptyValueSymbol: '-',
    letterNumberHeads: false
};*/



/*let cellClasses = {
    rows: [
        ['', '', '', '', '', '', '', ''],
        ['green', '', '', '', '', '', '', 'dollar'],
        ['purple', '', '', '', '', '', '', 'dollar'],
        ['yellow', 'failed', '', '', '', '', '', 'dollar'],
    ]
};*/

class Spreadsheet extends Component {
    render() {
        let tableContent = this.props.data.rows.map((row, rowIndex) => {
            return <View style={rowIndex === 0 ? styles.tableHeader : styles.tableRow}>
                {row.map((cell, cellIndex) => {
                        return <View style={ rowIndex !== 0 && cellIndex === 0 ? {width: "20%", borderRightWidth: 1} : {width: "20%"}}>
                            <Text style={rowIndex === 0 ? {color: 'black', fontSize: 14} : {color: 'black', fontSize: 14, fontWeight: 'bold'}}>
                            {cell}</Text>
                        </View>
                    }
                )}
            </View>
        });


        return <View style={{width: '95%'}}>
            {tableContent}
        </View>
    }
}

const styles = StyleSheet.create({
    tableRow: {
        flexDirection: 'row'
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        marginBottom: 4
    },
});

export default Spreadsheet;
