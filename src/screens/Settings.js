import React, { memo, useMemo, useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Icons from '../components/Icons';
import Pie from '../components/Pie';

// samples
import { colors, graphData, tabsData, filesData } from '../samples';

// helpers
import { numWords } from '../helpers';

const Settings = () => {
  const [filter, setFilter] = useState('used');
  let listRef = useRef(null);

  const renderItem = ({item}) => {
    const color = colors[ item.type ];

    return (
      <TouchableOpacity style={styles.catItem} key={item.id} activeOpacity={0.8} onPress={() => alert(item.label)}>
        <View style={styles.catItemIcon}>
          <Icons.RoundedShape color={color} width={16} height={16} />
        </View>
        <Text style={styles.graphCatsText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const renderFile = ({item}) => {
    const color = colors[ item.type ];

    return (
      <TouchableOpacity style={styles.fileItem} key={item.id} activeOpacity={0.8} onPress={() => alert(item.filename)}>
        <View style={styles.fileIcon}>
          {item.type === 'video' &&  <Icons.Video color={color} />}
          {item.type === 'image' &&  <Icons.Image color={color} />}
          {item.type === 'audio' &&  <Icons.Audio color={color} />}
          <View style={styles.fileIconBg}>
            <Icons.RoundedShape color={color} width={52} height={52} opacity={'0.15'} />
          </View>
        </View>
        <View style={styles.fileName}>
          <Text numberOfLines={1} style={styles.fileNameLabel}>{item.filename}</Text>
          <Text numberOfLines={1} style={styles.fileNameExt}>{item.extension+' · '+item.used+' '+numWords(item.used)}</Text>
        </View>
        <TouchableOpacity style={styles.fileAction} activeOpacity={0.8} onPress={() => alert('File action')}>
          <Icons.Dots color={'#7E8494'} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const pieData = graphData.map((item) => ({
    value: item.value,
    svg: {
      fill: colors[ item.type ],
      onPress: () => alert(item.label),
    },
    key: `pie-${item.id}`,
  }));

  const filteredData = useMemo(() => {return [...filesData].sort((a, b) => {
    if ( filter === 'used' ) {
      return b.used - a.used;
    }
    if ( filter === 'size' ) {
      return b.size - a.size;
    }
    if ( filter === 'open' ) {
      return b.last_open - a.last_open;
    }
  })}, [filter]);

  const changeTab = (tab) => setFilter(tab);

  useEffect(() => {
    if ( listRef.current ) {
      listRef.current.scrollToIndex({ animated: true, index: 0 });
    }
  }, [filter]);

  return (
    <>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'} />
      <Header title={'Storage management'} />
      <View style={styles.page}>
        <View style={styles.body}>
          <View style={styles.graph}>
            <View style={styles.graphPieOuter}>
              <Pie data={pieData} label={'67.5 GB'} width={250} height={250} />
            </View>
            <View style={styles.graphCats}>
              <FlatList
                data={graphData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={<View />}
                ListHeaderComponentStyle={{width: 15}}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={{width: 15}}
              />
            </View>
          </View>
          <View style={styles.files}>
            <View style={styles.filesFilter}>
              {tabsData.map((item) => (
                <TouchableOpacity style={styles.tabItem} key={item.id} activeOpacity={0.8} onPress={() => changeTab(item.type)}>
                  <Text numberOfLines={1} style={[styles.tabItemText, (item.type === filter ? styles.tabItemTextSel : null)]}>{item.label}</Text>
                  {item.type === filter && <View style={styles.tabItemSel}></View>}
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.filesBody}>
              <FlatList
                ref={listRef}
                data={filteredData}
                renderItem={renderFile}
                keyExtractor={item => item.id}
                ListHeaderComponent={<View />}
                ListHeaderComponentStyle={{height: 15}}
              />
            </View>
          </View>
          <Footer screen={'Settings'} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  body: {
    flex: 1,
  },
  graphPieOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 8,
  },
  catItem: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  catItemIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  graphCatsText: {
    fontFamily: Platform.select({
      ios: 'AvenirNextCyr-Medium',
      android: 'avenirnextcyr-medium',
    }),
    fontSize: 15,
    lineHeight: 22,
    color: '#5D6373',
    textAlign: 'center',
  },
  files: {
    flex: 1,
    zIndex: 5,
  },
  filesBody: {
    flex: 1,
  },
  filesFilter: {
    flexDirection: 'row',
    marginTop: 8,
  },
  tabItem: {
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#D3D7E0',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  tabItemText: {
    fontFamily: Platform.select({
      ios: 'AvenirNextCyr-Demi',
      android: 'avenirnextcyr-demi',
    }),
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#7E8494',
  },
  tabItemTextSel: {
    color: '#244CAA',
  },
  tabItemSel: {
    position: 'absolute',
    bottom: -1,
    backgroundColor: '#447BFB',
    height: 4,
    left: 21,
    right: 21,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  fileItem: {
    height: 84,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIcon: {
    marginLeft: 25,
    marginRight: 16,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileIconBg: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileName: {
    flex: 1,
  },
  fileNameLabel: {
    fontFamily: Platform.select({
      ios: 'AvenirNextCyr-Medium',
      android: 'avenirnextcyr-medium',
    }),
    fontSize: 16,
    lineHeight: 22,
    color: '#242833',
  },
  fileNameExt: {
    fontFamily: Platform.select({
      ios: 'AvenirNextCyr-Medium',
      android: 'avenirnextcyr-medium',
    }),
    fontSize: 14,
    lineHeight: 19,
    color: '#5D6373',
    marginTop: 1,
  },
  fileAction: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginLeft: 15,
  }
});

export default memo(Settings);
