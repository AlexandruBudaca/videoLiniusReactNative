/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Video from 'react-native-video';
import {Picker} from '@react-native-picker/picker';

const App: () => React$Node = () => {
  const [selectedValue, setSelectedValue] = useState(
    'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8',
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.sectionTitle}>Select stream</Text>
            <Picker
              selectedValue={selectedValue}
              style={{height: 50, width: 200}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item
                label="Big Buck Bunny"
                value="https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
              />
              <Picker.Item
                label="HD World"
                value="https://multiplatform-f.akamaihd.net/i/multi/april11/hdworld/hdworld_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8"
              />
              <Picker.Item
                label="CCTV"
                value="https://multiplatform-f.akamaihd.net/i/multi/april11/cctv/cctv_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8"
              />
              <Picker.Item
                label="Sintel"
                value="https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8"
              />
              <Picker.Item
                label="Eight"
                value="https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8"
              />
            </Picker>

            <Video
              key={selectedValue}
              source={{
                uri: selectedValue,
              }}
              ref={(ref) => {
                this.player = ref;
              }}
              onBuffer={this.onBuffer}
              onError={this.videoError}
              style={styles.backgroundVideo}
              controls={true}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    height: '100%',
  },
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 300,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: 225,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default App;
