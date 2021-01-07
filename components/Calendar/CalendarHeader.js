import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text } from "react-native";
import CalendarUtil from "../../utils/calendar";

const styles = StyleSheet.create({
  container: { backgroundColor: "black" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { textAlign: "center" },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  cell: { height: 25, backgroundColor: "white", textAlign: "center", padding: 5 }
});

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CalendarHeader = ({ selectedDate, setSelectedDate, currentDate }) => ({
  year: [
    <Text style={styles.text}>
      {selectedDate.getFullYear() !== currentDate.getFullYear() && (
        <Text onPress={() => setSelectedDate(CalendarUtil.decrementYear(selectedDate))}>
          <MaterialCommunityIcons name="arrow-left-bold" color="black" size={30} />
        </Text>
      )}
      <Text>{selectedDate.getFullYear()}</Text>
      <Text onPress={() => setSelectedDate(CalendarUtil.incrementYear(selectedDate))}>
        <MaterialCommunityIcons name="arrow-right-bold" color="black" size={30} />
      </Text>
    </Text>
  ],
  month: [
    <Text style={styles.text}>
      <Text onPress={() => setSelectedDate(CalendarUtil.decrementMonth(selectedDate))}>
        <MaterialCommunityIcons name="arrow-left-bold" color="black" size={30} />
      </Text>
      <Text>{months[selectedDate.getMonth()]}</Text>
      <Text onPress={() => setSelectedDate(CalendarUtil.incrementMonth(selectedDate))}>
        <MaterialCommunityIcons name="arrow-right-bold" color="black" size={30} />
      </Text>
    </Text>
  ],
  weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
});

export default CalendarHeader;
