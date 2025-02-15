import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: movie.poster }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.genre}>{movie.genre}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 150,
  },
  info: {
    padding: 8,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
  },
  genre: {
    color: 'gray',
  },
});

export default MovieCard;
