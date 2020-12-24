import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from "react-native";
import { connect } from "react-redux";

const predictStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    header: {
        height: 90,
        backgroundColor: "black",
      }
})

function Predict(props) {

    return (
        <View style={predictStyles.container}>
            <SafeAreaView>
                <View style={predictStyles.header}>
                    <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>Start a new prediction.</Text>
                </View>
            </SafeAreaView>
        </View>
    )

}

const mapStateToProps = state => {
    const { displayName, fullName, email, rank, newPredictions, pastPredictions, currency, accuracy } = state.currentUser;
    return { displayName, fullName, email, rank, newPredictions, pastPredictions, currency, accuracy };
  };
  
  export default connect(mapStateToProps)(Predict);