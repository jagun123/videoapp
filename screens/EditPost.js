import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ColorMatrix, concatColorMatrices, brightness as brightnessMatrix, contrast as contrastMatrix } from 'react-native-color-matrix-image-filters';
import Slider from '@react-native-community/slider';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';

const EditPost = ({ navigation, route }) => {
  const { imageUrl } = route.params;
  const [brightnessValue, setBrightnessValue] = useState(1);
  const [contrastValue, setContrastValue] = useState(1);
  const [showSlider, setShowSlider] = useState(null); // null, 'brightness', 'contrast'

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit</Text>
      
      <ColorMatrix
        matrix={concatColorMatrices(
          brightnessMatrix(brightnessValue),
          contrastMatrix(contrastValue)
        )}
      >
        <Image 
          style={styles.image}
          source={{ uri: imageUrl }} 
        />
      </ColorMatrix>

      {showSlider ? (
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={2}
            value={showSlider === 'brightness' ? brightnessValue : contrastValue}
            onValueChange={showSlider === 'brightness' ? setBrightnessValue : setContrastValue}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <View style={styles.sliderButtons}>
            <TouchableOpacity onPress={() => setShowSlider(null)}>
              <MaterialIcons name="close" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowSlider(null)}>
              <MaterialIcons name="check" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.adjustments}>
          <TouchableOpacity onPress={() => {/* Handle Adjust action */}}>
            <View style={styles.adjustmentItem}>
              <Text style={styles.adjustmentText}>Adjust</Text>
              <SimpleLineIcons name="frame" size={24} color="#000" style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowSlider('brightness')}>
            <View style={styles.adjustmentItem}>
              <Text style={styles.adjustmentText}>Brightness</Text>
              <MaterialIcons name="brightness-5" size={24} color="#000" style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowSlider('contrast')}>
            <View style={styles.adjustmentItem}>
              <Text style={styles.adjustmentText}>Contrast</Text>
              <Foundation name="contrast" size={24} color="#000" style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {/* Handle Structure action */}}>
            <View style={styles.adjustmentItem}>
              <Text style={styles.adjustmentText}>Structure</Text>
              <Feather name="triangle" size={24} color="#000" style={styles.icon} />
            </View>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between', // Space between elements
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  adjustments: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
  adjustmentItem: {
    alignItems: 'center',
  },
  adjustmentText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 5,
    borderColor: '#000',
    borderWidth: 1,
    shadowColor: '#000',
  },
  sliderContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  button: {
    alignSelf: 'center', // Center the button horizontally
    backgroundColor: 'grey',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20, // Increased padding for larger button
    alignItems: 'center',
    marginVertical: 20, // Margin from top and bottom
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default EditPost;
