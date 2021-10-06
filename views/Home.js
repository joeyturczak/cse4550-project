import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/BottomTabs';
import {DropButton} from '../components/DropButton';
import DropItem from '../components/DropItem';
import HeaderTabs from '../components/HeaderTabs';
import styles from '../stylesheet';

export function Home({navigation}) {
  return (
    <View style={{flex: 1}}>
      <HeaderTabs />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DropItem />
      </ScrollView>
      <DropButton navigation={navigation} />
      <Divider width={1} />
      <BottomTabs />
    </View>
  );
}
