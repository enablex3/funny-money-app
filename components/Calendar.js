import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { connect } from "react-redux";
import CalendarUtil from "../utils/calendar";
import { setDate } from "../store/actions/prediction";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "black" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { textAlign: "center" },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  cell: { height: 25, backgroundColor: "white", borderRadius: 2, textAlign: "center", padding: 5 }
});

const tableHead = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function Calendar({ predictionDate, setPredictionDate }) {
  const currentDate = new Date();
  const calendarRows = CalendarUtil.rows(predictionDate);

  const cell = cellData => {
    const el = (
      <View style={styles.cell}>
        <Text style={styles.text}>{cellData.getDate()}</Text>
      </View>
    );

    return cellData > currentDate ? (
      <TouchableOpacity onPress={() => setPredictionDate(cellData)}>{el}</TouchableOpacity>
    ) : (
      el
    );
  };

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderColor: "transparent" }}>
        <Row data={[predictionDate.getFullYear()]} style={styles.head} textStyle={styles.text} />
        <Row data={[months[predictionDate.getMonth()]]} style={styles.head} textStyle={styles.text} />
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {calendarRows.map((rowData, index) => (
          <TableWrapper key={index.toString()} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell key={cellIndex.toString()} data={cell(cellData)} textStyle={styles.text} />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </View>
  );
}

const mapStateToProps = state => ({ predictionDate: state.prediction.date });
const mapDispatchToProps = dispatch => ({ setPredictionDate: date => dispatch(setDate(date)) });

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
