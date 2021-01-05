import React from "react";
import { StyleSheet, View } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import CalendarUtil from "../utils/calendar";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "black" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  btn: { width: 58, height: 18, backgroundColor: "#78B7BB", borderRadius: 2 },
  btnText: { textAlign: "center", color: "#fff" }
});

const tableHead = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function Calendar() {
  const currentDate = new Date();
  const calendarRows = CalendarUtil.rows(currentDate);

  console.log(calendarRows);

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderColor: "transparent" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {calendarRows.map((rowData, index) => (
          <TableWrapper key={index.toString()} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell key={cellIndex.toString()} data={cellData.getDate()} textStyle={styles.text} />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </View>
  );
}

export default Calendar;
