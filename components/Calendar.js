import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { connect } from "react-redux";
import CalendarUtil from "../utils/calendar";
import { setDate } from "../store/actions/prediction";

const styles = StyleSheet.create({
  container: { backgroundColor: "black" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { textAlign: "center" },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  cell: { height: 25, backgroundColor: "white", textAlign: "center", padding: 5 }
});

const tableHead = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function Calendar({ predictionDate, setPredictionDate }) {
  const currentDate = new Date();
  const calendarRows = CalendarUtil.rows(predictionDate);

  const cell = cellData => {
    let cellBackground = "white";

    if (+cellData === +predictionDate) cellBackground = "#9c2c98";
    else if (cellData < currentDate) cellBackground = "grey";

    const el = (
      <View style={[styles.cell, { backgroundColor: cellBackground }]}>
        <Text style={styles.text}>{cellData.getDate()}</Text>
      </View>
    );

    return cellData > currentDate ? (
      <TouchableOpacity onPress={() => setPredictionDate(cellData)}>{el}</TouchableOpacity>
    ) : (
      el
    );
  };

  const yearRow = (
    <Text style={styles.text}>
      {predictionDate.getFullYear() !== currentDate.getFullYear() && (
        <Text onPress={() => setPredictionDate(CalendarUtil.decrementYear(predictionDate))}>🠜</Text>
      )}
      <Text>{predictionDate.getFullYear()}</Text>
      <Text onPress={() => setPredictionDate(CalendarUtil.incrementYear(predictionDate))}>🠞</Text>
    </Text>
  );

  const monthRow = (
    <Text style={styles.text}>
      <Text onPress={() => setPredictionDate(CalendarUtil.decrementMonth(predictionDate))}>🠜</Text>
      <Text>{months[predictionDate.getMonth()]}</Text>
      <Text onPress={() => setPredictionDate(CalendarUtil.incrementMonth(predictionDate))}>🠞</Text>
    </Text>
  );

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderColor: "transparent" }}>
        <Row data={[yearRow]} style={styles.head} />
        <Row data={[monthRow]} style={styles.head} textStyle={styles.text} />
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
