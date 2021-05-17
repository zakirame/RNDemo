
import React, { memo } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Platform,
} from 'react-native';
import Icons from './Icons';
import Androw from 'react-native-androw';

// samples
import { navScreens } from '../samples';

const Footer = ({screen = ''}) => (
    <Androw style={styles.footer}>
        <View style={styles.footerInner}>
            {navScreens.map((item, i) => {
                let active = item.screen === screen;
                return (
                    <TouchableOpacity activeOpacity={item.active ? 1 : 0.8} key={'navs'+i} style={styles.footerItem} onPress={() => alert(item.label)}>
                        <View style={styles.footerItemInner}>{item.icon(active)}</View>
                        {active && <>
                            <View style={styles.footerItemBack}>
                                <Icons.RoundedShape color={'#E8EFFF'} width={32} height={32} />
                            </View>
                            <View style={styles.footerItemShadow}>
                                <Androw style={styles.footerItemShadowValue}>
                                    <View style={styles.footerItemShadowShape} />
                                </Androw>
                            </View>
                        </>}
                    </TouchableOpacity>
                )}
            )}
        </View>
    </Androw>
);

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'white',
        height: Platform.select({
            ios: 82,
            android: 48,
        }),
        shadowColor: '#A6B3C2',
        shadowOffset:{
            width: 0, 
            height: 4,
        },
        shadowOpacity: .3,
        shadowRadius: 14,
        zIndex: 10,
    },
    footerInner: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
    },
    footerItem: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerItemInner: {
        zIndex: 5,
    },
    footerItemBack: {
        ...StyleSheet.absoluteFill,
        zIndex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerItemShadow: {
        ...StyleSheet.absoluteFill,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
        footerItemShadowValue: {
        shadowColor: '#8385A3',
        shadowOffset:{
            width: 0, 
            height: 12,
        },
        shadowOpacity: .3,
        shadowRadius: 8
    },
    footerItemShadowShape: {
        width: 32,
        height: 32,
        backgroundColor: 'white',
        borderRadius: 14,
    },
});

export default memo(Footer);