import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import moment from 'moment-timezone';

import FutureForecast from './FutureForecast';

const WeatherScroll = ({weatherData}) => {
  return (
    <ScrollView horizontal style={styles.scrollViewContainer}>
      <CurrentTempE1
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
      />
      <FutureForecast data={weatherData} />
    </ScrollView>
  );
};

const CurrentTempE1 = ({data}) => {
  if (data && data.weather) {
    const img = {
      uri:
        'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png',
    };
    return (
      <View style={styles.currentContianer}>
        <Image source={img} style={styles.img} />
        <View style={styles.otherContianer}>
          <Text style={styles.day}>
            {moment(data.dt * 1000).format('dddd')}
          </Text>
          <Text style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
          <Text style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 0.4,
    backgroundColor: '#18181bcc',
    padding: 30,
  },
  currentContianer: {
    flexDirection: 'row',
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 15,
  },
  otherContianer: {
    paddingRight: 40,
  },
  img: {
    width: 150,
    height: 150,
  },
  day: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#3c3c44',
    padding: 10,
    borderRadius: 50,
    fontWeight: '400',
    marginBottom: 15,
  },
  temp: {
    fontSize: 16,
    color: 'white',
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default WeatherScroll;
