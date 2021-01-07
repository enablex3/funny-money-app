import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  text: { textAlign: "center" },
  cell: { height: 25, backgroundColor: "white", textAlign: "center", padding: 5 }
});

const CalendarCell = ({ calendarDate, selectedDate, setSelectedDate, currentDate }) => {
  let cellBackground = "white";

  if (+calendarDate === +selectedDate) cellBackground = "#9c2c98";
  else if (calendarDate < currentDate) cellBackground = "grey";

  const el = (
    <View style={[styles.cell, { backgroundColor: cellBackground }]}>
      <Text style={styles.text}>{calendarDate.getDate()}</Text>
    </View>
  );

  return calendarDate > currentDate ? (
    <TouchableOpacity onPress={() => setSelectedDate(calendarDate)}>{el}</TouchableOpacity>
  ) : (
    el
  );
};

export default CalendarCell;
