import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import moment from 'moment-timezone';

const FutureForecast = ({data}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {data && data.length > 0 ? (
        data.map(
          (data, idx) =>
            idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />,
        )
      ) : (
        <View />
      )}
    </View>
  );
};

const FutureForecastItem = ({forecastItem}) => {
  const img = {
    uri:
      'http://openweathermap.org/img/wn/' +
      forecastItem.weather[0].icon +
      '@2x.png',
  };
  return (
    <View style={styles.container}>
      <Text style={styles.day}>
        {moment(forecastItem.dt * 1000).format('ddd')}
      </Text>
      <Image source={img} style={styles.img} />
      <Text style={styles.temp}>Day - {forecastItem.temp.day}&#176;C</Text>
      <Text style={styles.temp}>Night - {forecastItem.temp.night}&#176;C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 5,
  },
  img: {
    width: 100,
    height: 100,
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

export default FutureForecast;
