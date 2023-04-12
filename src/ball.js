import React, {useRef,useEffect} from 'react';
import { StyleSheet, View, Animated } from 'react-native';

export default function App() {
const position = useRef(new Animated.ValueXY(0,0)).current
  useEffect(() => {
     Animated.spring(position, {
      toValue: {x:200,y:500}
    }).start()
  },[])

  return (
    <Animated.View {...position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>

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
