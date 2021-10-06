import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function DropItem() {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 10,
      }}>
      <LeftContainer />
      <MainContainer />
    </View>
  );
}

const LeftContainer = () => {
  return (
    <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <FontAwesome5 name="caret-right" size={24} color="grey" />
      </View>
    </View>
  );
};

const MainContainer = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          source={require('../assets/react-logo.png')}
          style={{
            width: 25,
            height: 25,
            borderRadius: 25,
            marginRight: 10,
          }}
        />
        <Text style={{marginRight: 5, color: 'grey'}}>@suppapenguin</Text>
        {/* <FontAwesome5
          name="check"
          size={12}
          color={"blue"}
          style={{
            marginRight: 5,
            alignSelf: "center",
            justifyContent: "center",
          }}
        /> */}
        <Text style={{marginRight: 5, color: 'grey'}}>15h</Text>
      </View>
      <View>
        <Text style={{marginTop: 5, lineHeight: 18}}>
          Something small and SOMETHING LARGE
        </Text>
        <Image
          style={{
            marginVertical: 10,
            width: '100%',
            height: 200,
            resizeMode: 'cover',
            borderRadius: 15,
            overflow: 'hidden',
          }}
          source={require('../assets/buffalo.jpg')}
        />
      </View>
    </View>
  );
};
