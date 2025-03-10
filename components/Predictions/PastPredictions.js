import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { jsonToArray } from "../../utils/jsonToArray";
import { connect } from "react-redux";
import { acc } from "react-native-reanimated";

const tableStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black', marginTop: 10 },
    head: { height: 40, backgroundColor: '#9c2c98' },
    column: { color: "azure", fontSize: 20, fontFamily: "Staatliches_400Regular"},
    text: { margin: 6, color: "azure" },
    row: { color: "azure", fontSize: 20 }
  });

function PastPredictions(props) {
    const { pastPredictions, accuracy, primaryTextColor, backgroundColor, purpleTheme } = props;
    const pastPredictionsObject = jsonToArray(pastPredictions);
    const tableHeaders = [
        <Text style={[tableStyles.column, {color: primaryTextColor}]}>Name</Text>, 
        <Text style={[tableStyles.column, {color: primaryTextColor}]}>Accuracy</Text>,
        <Text style={[tableStyles.column, {color: primaryTextColor}]}>Final Price</Text>
    ];
    const tableData = pastPredictionsObject.map(prediction =>
        [
            <Text style={[tableStyles.row, {color: primaryTextColor}]} onPress={() => showDetails(prediction)}>{prediction.name}</Text>, 
            <Text style={[tableStyles.row, {color: primaryTextColor}]} onPress={() => showDetails(prediction)}>{accuracy}</Text>,
            <Text style={[tableStyles.row, {color: primaryTextColor}]} onPress={() => showDetails(prediction)}>${prediction.value.price}</Text>
        ]
    );

    const showDetails = (prediction) => {
        Alert.alert("Name: " + prediction.name +
                    "\nDate: " + prediction.value.date + 
                    "\nPrice: " + prediction.value.price + 
                    "\nType: " + prediction.value.type);
    }

    return(
        <View style={[tableStyles.container, {backgroundColor: backgroundColor}]}>
        <Table borderStyle={{borderWidth: 2, borderColor: 'transparent'}}>
          <Row data={tableHeaders} style={[tableStyles.head, {backgroundColor: purpleTheme}]} textStyle={tableStyles.text}/>
          <Rows data={tableData} textStyle={tableStyles.text} />
        </Table>
      </View>
    )
};

const mapStateToProps = state => {
    const { pastPredictions, accuracy } = state.currentUser;
    const { primaryTextColor, backgroundColor, purpleTheme } = state.theme;
    return { pastPredictions, accuracy, primaryTextColor, backgroundColor, purpleTheme };
};

export default connect(mapStateToProps)(PastPredictions);