import React, { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { connect } from "react-redux";
import CalendarHeader from "./CalendarHeader";
import CalendarCell from "./CalendarCell";
import CalendarUtil from "../../utils/calendar";
import { setDate, setSelectedYear, setSelectedMonth } from "../../store/actions/prediction";

const styles = StyleSheet.create({
  container: { backgroundColor: "black" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { textAlign: "center" },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  cell: { height: 25, backgroundColor: "white", textAlign: "center", padding: 5 }
});

function Calendar({
  predictionDate,
  setPredictionDate,
  selectedYear,
  setCalendarSelectedYear,
  selectedMonth,
  setCalendarSelectedMonth
}) {
  const currentDate = new Date();
  const calendarRows = CalendarUtil.rows(new Date(selectedYear, selectedMonth, 1));
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
  };
  const { year, month, weekdays } = CalendarHeader({
    setSelectedYear: newYear => {
      setCalendarSelectedYear(newYear);
      fadeAnim.resetAnimation();
    },
    setSelectedMonth: newMonth => {
      setCalendarSelectedMonth(newMonth);
      fadeAnim.resetAnimation();
    },
    selectedYear,
    selectedMonth,
    currentDate
  });

  fadeIn();

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
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
      </Animated.View>
    </View>
  );
}

const mapStateToProps = state => {
  const { date, selectedYear, selectedMonth } = state.prediction;

  return { predictionDate: date, selectedYear, selectedMonth };
};
const mapDispatchToProps = dispatch => ({
  setPredictionDate: date => dispatch(setDate(date)),
  setCalendarSelectedYear: year => dispatch(setSelectedYear(year)),
  setCalendarSelectedMonth: month => dispatch(setSelectedMonth(month))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
