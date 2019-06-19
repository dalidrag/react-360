import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    NativeModules
} from 'react-360';


class Spreadsheet extends Component {
    state = {
        data: this.props.data.rows,
    };

    onInput(cell, rowIndex, cellIndex) {
        let newData = this.state.data;
        // 4.) show the keyboard
        NativeModules.Keyboard.startInput({
            initialValue: cell,
            placeholder: 'Enter your data',
        }).then((keyboardEntry) => {
            newData[rowIndex][cellIndex] = keyboardEntry;

            this.setState({data: newData});
        });
    }

    render() {
        let tableContent = this.state.data.map((row, rowIndex) => {
            return <View style={rowIndex === 0 ? styles.tableHeader : styles.tableRow}>
                {row.map((cell, cellIndex) => {
                        return <View onInput={() => this.onInput(cell, rowIndex, cellIndex)} style={ rowIndex !== 0 && cellIndex === 0 ? {width: "20%", borderRightWidth: 1} : {width: "20%"}}>
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
