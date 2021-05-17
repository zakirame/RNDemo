
import React, { memo } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
} from 'react-native';
import Icons from './Icons';

const Header = ({title = ''}) => (
  <>
    <View style={styles.preHeader}>
      <Icons.Header color={'#E8EFFF'} />
    </View>
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerLeft} activeOpacity={0.8} onPress={() => alert('Back button')}>
        <Icons.BackArrow color={'#242833'} />
      </TouchableOpacity>
      <View style={styles.headerCenter}>
        <Text numberOfLines={1} style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.headerRight} />
    </View>
  </>
);

const styles = StyleSheet.create({
  preHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    height: 62,
    width: '100%',
  },
  header: {
    paddingTop: 44,
    paddingHorizontal: 10,
    flexDirection: 'row',
    zIndex: 10,
  },
  headerLeft: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: Platform.select({
      ios: 'AvenirNextCyr-Demi',
      android: 'avenirnextcyr-demi',
    }),
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    color: '#244CAA',
  },
});

export default memo(Header);