import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Linking, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { fetchNews } from "../../store/actions/news";
import FetchingIndicator from "../FetchingIndicator";

const newsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginBottom: 50
  },
  textBox: {
    margin: 5
  },
  text: {
    color: "black"
  },
  box: {
    backgroundColor: "white",
    marginHorizontal: 25,
    width: 300,
    height: 400,
    marginBottom: 10
  },
  image: {
    backgroundColor: "transparent",
    width: 300,
    height: 300,
    borderColor: "#9c2c98",
    borderWidth: 2
  }
});

class News extends Component {
  componentDidMount() {
    const { getNews } = this.props;
    getNews();
  }

  render() {
    const { articles, fetching, primaryTextColor, backgroundColor } = this.props;

    return (
      <View style={[newsStyles.container, {backgroundColor: backgroundColor}]}>
        {fetching ? (
          <FetchingIndicator fetching={fetching} />
        ) : (
          <ScrollView horizontal>
            {articles.map((article, index) => {
              const source = article.source.name;
              const { title, url, urlToImage } = article;

              return (
                <TouchableHighlight key={index.toString()} onPress={() => Linking.openURL(url)}>
                  <View style={newsStyles.box}>
                    <Image style={newsStyles.image} source={{ uri: urlToImage }} />
                    <View style={newsStyles.textBox}>
                      <Text styles={newsStyles.text}>{source}</Text>
                    </View>
                    <View style={newsStyles.textBox}>
                      <Text styles={newsStyles.text}>{title}</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              );
            })}
          </ScrollView>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { articles, fetching } = state.news;
  const { primaryTextColor, backgroundColor } = state.theme;
  return {
    articles,
    fetching,
    primaryTextColor,
    backgroundColor
  };
};

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(fetchNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
