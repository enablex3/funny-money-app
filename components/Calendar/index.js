import React from "react";
import { StyleSheet, View } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { connect } from "react-redux";
import CalendarHeader from "./CalendarHeader";
import CalendarCell from "./CalendarCell";
import CalendarUtil from "../../utils/calendar";
import { setDate } from "../../store/actions/prediction";

const styles = StyleSheet.create({
  container: { backgroundColor: "black" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { textAlign: "center" },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  cell: { height: 25, backgroundColor: "white", textAlign: "center", padding: 5 }
});

function Calendar({ predictionDate, setPredictionDate }) {
  const currentDate = new Date();
  const calendarRows = CalendarUtil.rows(predictionDate);
  const { year, month, weekdays } = CalendarHeader({
    selectedDate: predictionDate,
    setSelectedDate: setPredictionDate,
    currentDate
  });

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderColor: "transparent" }}>
        <Row data={year} style={styles.head} />
        <Row data={month} style={styles.head} textStyle={styles.text} />
        <Row data={weekdays} style={styles.head} textStyle={styles.text} />
        {calendarRows.map((rowData, index) => (
          <TableWrapper key={index.toString()} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex.toString()}
                data={CalendarCell({
                  calendarDate: cellData,
                  selectedDate: predictionDate,
                  setSelectedDate: setPredictionDate,
                  currentDate
                })}
                textStyle={styles.text}
              />
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
