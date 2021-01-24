import React from 'react'
import { StyleSheet, Dimensions, Platform} from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
};

const screenWidth = Dimensions.get('window').width

const data = [
    { name: 'XRP', accuracy: 10, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15,  },
    { name: 'BTC', accuracy: 25, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'GOLD', accuracy: 15, color: 'pink', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'SILVER', accuracy: 40, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'APPLE', accuracy: 10, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
];
 
function UserPie() {
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

export default UserPie;