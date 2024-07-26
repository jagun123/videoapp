import React from 'react';
import { View, Text, Image, TouchableOpacity, Switch, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Post = ({ navigation, route }) => {
   
  const { imageUrl } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
      </View>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }} // Replace with your image URL or source
      />
      <TextInput
        style={styles.captionInput}
        placeholder="Write a caption or add a poll..."
      />
      <View style={styles.optionsContainer}>
        <Option icon="location-outline" text="Add location" />
        <Option icon="person-outline" text="Tag people" />
        <View style={styles.option}>
          <View style={styles.optionTextContainer}>
            <Icon name="pricetag-outline" size={20} color="#000" style={styles.optionIcon} />
            <Text style={styles.optionText}>Add AI label</Text>
          </View>
          <Switch />
        </View>
        <Option icon="people-outline" text="Audience" />
        <Option icon="cart-outline" text="Add product details" />
        <Option icon="alarm-outline" text="Add reminder" />
        <Option icon="musical-notes-outline" text="Add music" />
      </View>
      <TouchableOpacity style={styles.shareButton}>
        <Text style={styles.shareButtonText}>Share</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const Option = ({ icon, text }) => (
  <TouchableOpacity style={styles.option}>
    <View style={styles.optionTextContainer}>
      <Icon name={icon} size={20} color="#000" style={styles.optionIcon} />
      <Text style={styles.optionText}>{text}</Text>
    </View>
    <Icon name="chevron-forward" size={20} color="#ccc" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  image: {
    width: '100%',
    height: 260,
    resizeMode: 'cover',
  },
  captionInput: {
    padding: 16,
    borderBottomWidth: 0,
    borderBottomColor: '#ccc',
    marginBottom:0
  },
  optionsContainer: {
     padding :16,
     gap:10
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    marginRight: 8,
  },
  optionText: {
    fontSize: 16,
  },
  shareButton: {
    backgroundColor: '#007bff',
    padding: 16,
    alignItems: 'center',
    margin: 16,
    borderRadius: 8,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Post;
