import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { connect } from "react-redux";
import { jsonToArray } from "../../utils/jsonToArray";
import getDiff from "../../utils/DateDifference";

const tableStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", marginTop: 10 },
  head: { height: 40, backgroundColor: "#9c2c98" },
  column: { color: "azure", fontSize: 20, fontFamily: "Staatliches_400Regular" },
  text: { margin: 6, color: "azure" },
  row: { color: "azure", fontSize: 20 }
});

const showDetails = prediction => {
  Alert.alert(
    `Name: ${prediction.name}\nDate: ${prediction.value.date}\nPrice: ${prediction.value.price}\nType: ${prediction.value.type}`
  );
};

function LatestPredictions(props) {
  const { newPredictions } = props;
  const newPredictionsObject = jsonToArray(newPredictions);
  const tableHeaders = [
    <Text style={tableStyles.column}>Name</Text>,
    <Text style={tableStyles.column}>Time Left</Text>,
    <Text style={tableStyles.column}>Current Price</Text>
  ];
  const tableData = newPredictionsObject.map(prediction => [
    <Text style={tableStyles.row} onPress={() => showDetails(prediction)}>
      {prediction.name}
    </Text>,
    <Text style={tableStyles.row} onPress={() => showDetails(prediction)}>
      {getDiff(prediction.value.date)}
    </Text>,
    <Text style={tableStyles.row} onPress={() => showDetails(prediction)}>
      {`$ ${prediction.value.price}`}
    </Text>
  ]);

  return (
    <View style={tableStyles.container}>
      <Table
        borderStyle={{ borderWidth: 2, borderColor: "transparent", borderBottomWidth: 2, borderBottomColor: "azure" }}>
        <Row data={tableHeaders} style={tableStyles.head} textStyle={tableStyles.text} />
        <Rows data={tableData} textStyle={tableStyles.text} />
      </Table>
    </View>
  );
}

const mapStateToProps = state => {
  const { newPredictions } = state.currentUser;
  return { newPredictions };
};

export default connect(mapStateToProps)(LatestPredictions);
