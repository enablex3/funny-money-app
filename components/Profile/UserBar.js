import React from 'react'
import { StyleSheet, Dimensions, Platform} from 'react-native';
import { connect } from "react-redux";
import { BarChart } from 'react-native-chart-kit';
import { averagesConstruct } from "../../utils/statArray";
import { jsonToArray } from "../../utils/jsonToArray";

const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
};

let data;

const screenWidth = Dimensions.get('window').width;
 
function UserPie(props) {
    const { averages, primaryTextColor } = props;

    data = averagesConstruct(jsonToArray(averages));
    
    return (
        <BarChart
            style={{ marginTop: 10, marginBottom: 10, borderRadius: 10, borderWidth: 1, borderColor: "rgb(26, 255, 146)"}}
            data={data}
            width={ Platform.OS === "web" ? screenWidth / 4 : screenWidth}
            height={200}
            chartConfig={chartConfig}
        />
    );
  
};
 
const styles = StyleSheet.create({
  container: { flex: 1 },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});

const mapStateToProps = state => {
    const { averages } = state.currentUserStats;
    const { primaryTextColor, backgroundColor } = state.theme;
    return { averages, primaryTextColor, backgroundColor };
};

export default connect(mapStateToProps)(UserPie);