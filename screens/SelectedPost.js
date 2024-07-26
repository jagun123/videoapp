import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ColorMatrix, concatColorMatrices,  } from 'react-native-color-matrix-image-filters';

const SelectedPost = ({ route, navigation }) => {
  const { imageUrl } = route.params;
  const [selectedFilter, setSelectedFilter] = useState('normal');

  const filters = ['normal', 'grayscale', 'sepia', 'invert', 'brightness'];

  const applyFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const filterStyles = {
    normal: {},
    grayscale: { filter: 'grayscale(1)' },
    sepia: { filter: 'sepia(1)' },
    invert: { filter: 'invert(1)' },
    brightness: { filter: 'brightness(1.5)' },
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={30} color="#000" />
        </TouchableOpacity>
        <View style={styles.rightIcons}>
          <TouchableOpacity>
            <Icon name="tune" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="music-note" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={[styles.image, filterStyles[selectedFilter]]}
          source={{ uri: imageUrl }}
        />
      </View>

      <ScrollView horizontal style={styles.scrollContainer}>
        {filters.map((filter) => (
          <TouchableOpacity key={filter} onPress={() => applyFilter(filter)}>
            <Image
              style={[styles.thumbnail, filterStyles[filter]]}
              source={{ uri: imageUrl }}
            />
            <Text style={styles.filterName}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} 
          onPress={() => navigation.navigate('Edit', { imageUrl: imageUrl })}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Post', { imageUrl: imageUrl })}>
          <Text style={styles.buttonText}>Next</Text>
          <Icon name="arrow-forward" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginBottom: 10,
    // Apply a color gradient overlay
    overlayColor: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,0.5))',
  },
  scrollContainer: {
    marginVertical: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  selectedThumbnail: {
    borderColor: 'blue',
    borderWidth: 2,
  },
  filterName: {
    textAlign: 'center',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  button: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText1: {
    fontSize: 16,
    color: '#fff',
  },
});

export default SelectedPost;
