import { View,SafeAreaView, Text } from 'react-native';
import React from 'react';
import HeaderTab from './Components/HeaderTab';
import SearchBar from './Components/SearchBar';
import Categories from './Components/Categories';

export default function Home() {
  return (
    <SafeAreaView>
      <HeaderTab/>
      <SearchBar/>
      <Categories/>
    </SafeAreaView>
  );
}
