import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MovieDetailScreen = ({ route }) => {
  const { movieId } = route.params;

  // Fetch and display movie details using movieId
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Detail - {movieId}</Text>
      {/* Display movie details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default MovieDetailScreen;
