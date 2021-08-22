import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, RefreshControl } from 'react-native';
import PostCard from '../../components/postCard/PostCard';
import TopBar from '../../components/topBar/TopBar';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Home({ navigation }) {

  // If the information can vary, it is consumed from an API
  const headerMenus = [
    {
      id: 1,
      title: 'New',
      onPress: () => getRedditData('new')
    },
    {
      id: 2,
      title: 'Top',
      onPress: () => getRedditData('top')
    },
    {
      id: 3,
      title: 'Popular',
      onPress: () => getRedditData('controversial')
    },
    {
      id: 4,
      title: 'Hot',
      onPress: () => getRedditData('hot')
    },
  ]

  const [listData, setListData] = useState();
  const [selectedMenu, setSelectedMenu] = useState(1);

  const [previousCall, setPreviousCall] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await getRedditData(previousCall);
    setRefreshing(false);
  }

  const getRedditData = async (category = "new") => {
    fetch(`https://api.reddit.com/r/pics/${category}.json?`).
      then(res => res.json()).
      then(data => {
        setListData(data.data.children);
        setPreviousCall(category);
      });
  }

  useEffect(() => {
    getRedditData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList head data={listData} keyExtractor={(item, index) => index + ''}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        ListHeaderComponent={() => (
          <React.Fragment>
            <TopBar content={headerMenus} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            <View style={styles.divider} />
          </React.Fragment>
        )}
        renderItem={({ item, index }) => (
          <PostCard key={index} content={item.data} onPress={() => navigation.navigate('web', { uri: item.data.url })} />
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  divider: {
    height: hp('1%')
  }
});
