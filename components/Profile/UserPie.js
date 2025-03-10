import React from 'react'
import { StyleSheet, Dimensions, Platform} from 'react-native';
import { connect } from "react-redux";
import { PieChart } from 'react-native-chart-kit';
import { portfolioConstruct } from "../../utils/statArray";
import { jsonToArray } from "../../utils/jsonToArray";

const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
};

let data;

const screenWidth = Dimensions.get('window').width;
 
function UserPie(props) {
    const { portfolio, primaryTextColor } = props;

    data = portfolioConstruct(jsonToArray(portfolio), primaryTextColor);

    return (
        <PieChart
            data={data}
            width={ Platform.OS === "web" ? screenWidth / 4 : screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="accuracy"
            backgroundColor="transparent"
            paddingLeft="5"
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
    const { portfolio } = state.currentUserStats;
    const { primaryTextColor, backgroundColor } = state.theme;
    return { portfolio, primaryTextColor, backgroundColor };
};

export default connect(mapStateToProps)(UserPie);