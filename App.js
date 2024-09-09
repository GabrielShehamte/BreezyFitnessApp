// const fs = require('fs');
// const gracefulFs = require('graceful-fs');
// gracefulFs.gracefulify(fs);
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json'

export default function App() {
  const exercise = exercises[0];
  // console.log(exercises);

  return (


    <View style={styles.container}>
      <View>
        {/* <Text>Welcome to My App "Breezys Fitness"</Text> */}
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          Muscle: {exercise.muscle} | Equipment: {exercise.equipment}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  exerciseName: {
    fontSize: 24,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'steelblue'
  }
});
