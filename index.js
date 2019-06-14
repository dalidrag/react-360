import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import Spreadsheet from "./spreadsheet";

export default class react360visualization extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Spreadsheet />
      </View>
    );
  }
};

/*export default class Spreadsheet3D extends React.Component {
  render() {
    return (
        <View style={styles.panel}>
          <Text style={styles.greeting}>
            <Spreadsheet/>
          </Text>
        </View>
    );
  }
};*/

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 300,
    height: 600,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 16,
  },
});

AppRegistry.registerComponent('react360visualization', () => react360visualization);
// AppRegistry.registerComponent('spreadsheet', () => Spreadsheet3D);
