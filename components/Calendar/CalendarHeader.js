import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: { backgroundColor: "black" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { textAlign: "center" },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  cell: { height: 25, backgroundColor: "white", textAlign: "center", padding: 5 }
});

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CalendarHeader = ({ currentDate, setSelectedYear, setSelectedMonth, selectedMonth, selectedYear }) => ({
  year: [
    <Text style={styles.text}>
      {selectedYear !== currentDate.getFullYear() && (
        <Text onPress={() => setSelectedYear(selectedYear - 1)}>
          <MaterialCommunityIcons name="arrow-left-bold" color="black" size={30} />
        </Text>
      )}
      <Text>{selectedYear}</Text>
      <Text onPress={() => setSelectedYear(selectedYear + 1)}>
        <MaterialCommunityIcons name="arrow-right-bold" color="black" size={30} />
      </Text>
    </Text>
  ],
  month: [
    <Text style={styles.text}>
      <Text onPress={() => setSelectedMonth(selectedMonth - 1)}>
        <MaterialCommunityIcons name="arrow-left-bold" color="black" size={30} />
      </Text>
      <Text>{months[selectedMonth]}</Text>
      <Text onPress={() => setSelectedMonth(selectedMonth + 1)}>
        <MaterialCommunityIcons name="arrow-right-bold" color="black" size={30} />
      </Text>
    </Text>
  ],
  weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
});

export default CalendarHeader;
