import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function HeaderTabs() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <LogoButton name="search" />
      <LogoButton name="google" text="LOGO" />
      <LogoButton name="bell" />
    </View>
  );
}

const LogoButton = props => {
  return (
    <TouchableOpacity style={{margin: 10}}>
      {props.text ? (
        <Text
          style={{
            margin: 10,
            marginBottom: 3,
            alignSelf: 'center',
            fontSize: 22,
          }}>
          {props.text}
        </Text>
      ) : (
        <FontAwesome5
          name={props.name}
          size={25}
          style={{margin: 10, marginBottom: 3, alignSelf: 'center'}}
        />
      )}
    </TouchableOpacity>
  );
};
