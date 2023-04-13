import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, Button } from '@rneui/themed'
import { Icon } from '@rneui/themed';
// import Ball from './src/Ball.js'
import Deck from './src/Deck'

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default function App() {


  const renderCard = (item) => {
    return (
      <Card>
        <Card.Title>
          {item.text}
        </Card.Title>
        <Card.Divider />
        <View>
          <Image source={{ uri: item.uri }} resizeMode="cover" />
          <Text>I can costumize the Card further.</Text>
        </View>
        <Card.Divider />
        <Button buttonStyle={{ backgroundColor: '#03A9F4' }} >
          <Icon name="code" color="white" />
          View Now!
        </Button>
      </Card >
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Deck
        data={DATA}
        renderCard={renderCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
