import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import CalendarUtil from "../utils/calendar";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "black" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  cell: { width: 58, height: 18, backgroundColor: "#78B7BB", borderRadius: 2 }
});

const tableHead = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function Calendar() {
  const currentDate = new Date();
  const calendarRows = CalendarUtil.rows(currentDate);

  const cell = cellData => {
    const el = (
      <View style={styles.cell}>
        <Text>{cellData.getDate()}</Text>
      </View>
    );

    return cellData > currentDate ? <TouchableOpacity onPress={() => null}>{el}</TouchableOpacity> : el;
  };

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderColor: "transparent" }}>
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

export default Calendar;
