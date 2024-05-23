import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const PaintingList = () => {
  const [paintings, setPaintings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numColumns, setNumColumns] = useState(2); // Initially set to 2 columns

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=painting&per_page=20',
          {
            headers: {
              Authorization: 'NDBdpxs9sZn2eIDaWuheJIRWw4HRIkOerMAVWFVieMDR8JDRJT4Hmlho', // Replace with your Pexels API key
            },
          }
        );
        setPaintings(response.data.photos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching paintings:', error);
        setLoading(false);
      }
    };

    fetchPaintings();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const renderPainting = ({ item }) => (
    <View style={styles.paintingContainer}>
      <Image
        source={{ uri: item.src.medium }}
        style={styles.paintingImage}
        resizeMode="cover"
      />
      <View style={styles.paintingInfo}>
        <Text style={styles.painterName}>{item.photographer}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>$20.XX</Text>
      </View>
    </View>
  );

  return (
    <View>
      <Text style={styles.title}>Chitrakala - Paintings- find your love story</Text>
      <FlatList
        data={paintings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPainting}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  paintingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  paintingImage: {
    width: '48%',
    height: 200,
  },
  paintingInfo: {
    width: '48%',
  },
  painterName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
  },
  price: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default PaintingList;
