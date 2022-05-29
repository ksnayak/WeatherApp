import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import DateTime from './components/DateTime';
import WeatherScroll from './components/WeatherScroll';

const API_KEY = 'ac4e0e015ba893d35f622dd069573212';
const img = require('./assets/image.png');

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    Geolocation.getCurrentPosition(
      success => {
        let {latitude, longitude} = success.coords;
        console;
        fetchDataFromApi(latitude, longitude);
      },
      err => {
        if (err) {
          fetchDataFromApi('40.7128', '74.0060');
        }
      },
    );
  }, []);

  const fetchDataFromApi = (latitude, longitude) => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`,
      )
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          setData(data);
        });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.imageBackground}>
        <DateTime
          current={data.current}
          timezone={data.timezone}
          lat={data.lat}
          lon={data.lon}
        />
        <WeatherScroll weatherData={data.daily} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default App;
