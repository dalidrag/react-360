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

let data = {
    rows: [
        ['Customer', 'Job', 'Contact', 'City', 'Revenue'],
        ['iDiscovery', 'Build', 'John Doe', 'Boston, MA', '500,000'],
        ['SxSW', 'Build', 'Tom Fuller', 'San Francisco, CA', '600,000'],
        ['CapitalTwo', 'Failed', 'Eric Pixel', 'Seattle, WA', '450,000']
    ]
};

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
        let tableContent = data.rows.map(row => {
            return <View style={styles.tableRow}>
                {row.map(cell => {
                        return <View style={{width: "25%"}}>
                            <Text style={{color: 'black', fontSize: 14}}>
                            {cell}</Text>
                        </View>
                    }
                )}
            </View>
        });


        return <View style={{width: '100%'}}>
            {tableContent}
        </View>
    }
}

const styles = StyleSheet.create({
    tableRow: {
        flexDirection: 'row'
    },
});

export default Spreadsheet;
