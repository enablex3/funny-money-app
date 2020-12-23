import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Linking } from "react-native";
import { connect } from "react-redux";
import { fetchNews } from "../store/actions/news";
import FetchingIndicator from "./FetchingIndicator";

const newsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginVertical: 50
  },
  text: {
    color: "black"
  },
  box: {
    backgroundColor: "white",
    marginHorizontal: 25,
    marginBottom: 50,
    maxWidth: 300
  },
  image: {
    width: 50,
    height: 50
  }
});

class News extends Component {
  componentDidMount() {
    const { getNews } = this.props;
    getNews();
  }

  render() {
    const { articles, fetching } = this.props;

    return (
      <View style={newsStyles.container}>
        {fetching ? (
          <FetchingIndicator fetching={fetching} />
        ) : (
          <ScrollView horizontal>
            {articles.map((article, index) => {
              const source = article.source.name;
              const { title, url, urlToImage } = article;

              return (
                <View key={index.toString()} style={newsStyles.box}>
                  <Text styles={newsStyles.text}>{source}</Text>
                  <Text styles={newsStyles.text} onPress={() => Linking.openURL(url)}>
                    {title}
                  </Text>
                  <Image style={newsStyles.image} source={{ uri: urlToImage }} />
                </View>
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

  return {
    articles,
    fetching
  };
};

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(fetchNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
