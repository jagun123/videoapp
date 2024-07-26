import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageZoom from 'react-native-image-pan-zoom';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';


const apiURL = 'https://picsum.photos/v2/list?page=2&limit=20';

const NewPost = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        setImages(data);
        if (data.length > 0) {
          setSelectedImage(data[0].download_url);
        }
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedImage(item.download_url)}>
      <Image source={{ uri: item.download_url }} style={styles.thumbnailImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="close" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>New post</Text>
        </View>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('SelectedPost', { imageUrl: selectedImage })}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Main Image */}
      <View style={styles.mainImageContainer}>
        {selectedImage && (
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={300}
            imageWidth={Dimensions.get('window').width}
            imageHeight={300}
          >
            <Image source={{ uri: selectedImage }} style={styles.mainImage} />
          </ImageZoom>
        )}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Text style={styles.footerText}>Recents</Text>
          <AntDesign name="down" size={20} color="#000" />
        </View>
        <View style={styles.footerRight}>
          <TouchableOpacity style={styles.footerButton}>
            <Feather name="copy" size={20} color="#fff" />
            <Text style={styles.footerButtonText}> Select Multiple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraIcon}>
            <Icon name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Images Grid */}
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        style={styles.recentsList}
      />
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    padding: 10,
  },
  nextText: {
    fontSize: 18,
    color: '#007AFF',
  },
  mainImageContainer: {
    alignItems: 'center',
    marginVertical: 10,
    height: 300, // Adjusted height
    width: '100%', // Adjusted width
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  recentsList: {
    marginTop: 10,
  },
  thumbnailImage: {
    width: Dimensions.get('window').width / 4 - 10,
    height: Dimensions.get('window').width / 4 - 10,
    margin: 5,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize:21,
    padding: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
  },
  footerButtonText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 5,
  },
  cameraIcon: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 25,
  },
});

export default  NewPost
