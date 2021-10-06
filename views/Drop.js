import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import BottomTabs from '../components/BottomTabs';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import SearchBar from '../components/SearchBar';
import HeaderTabs from '../components/HeaderTabs.js';

export default function Drop({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderTabs />
      <SearchBar />
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
