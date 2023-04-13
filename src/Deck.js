import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

export default function Deck({ data, renderCard }) {
  const position = useRef(new Animated.ValueXY(0, 0)).current
  useEffect(() => {

  }, [])

  const renderCards = () => {
    return data.map(item => {
      return renderCard(item)
    })
  }

  return (
    <View>
      {renderCards()}
    </View>

  );
}

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 60,
    borderEndWidth: 60,
    borderColor: '#000'
  },
});
