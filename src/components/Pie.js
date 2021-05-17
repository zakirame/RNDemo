import React, { memo } from 'react';
import { View, Platform, Text, StyleSheet } from 'react-native';

import * as shape from 'd3-shape';
import Svg, { G, Path } from 'react-native-svg';

import { calculateRadius } from '../helpers';

const Pie = ({
    data = [],
    label = '',
    width,
    height,
    padAngle = 0.10,
    outerRadius,
    startAngle = 0,
    endAngle = Math.PI * 2,
    valueAccessor = ({ item }) => item.value,
    innerRadius = '56%',
    sort = (a, b) => b.value - a.value,
}) => {
    const maxRadius = Math.min(width, height) / 2
    const _outerRadius = calculateRadius(outerRadius, maxRadius, maxRadius)
    const _innerRadius = calculateRadius(innerRadius, maxRadius, 0)
    const lineWidth = 10;

    const arcs = data.map((item) => {
        const arc = shape
            .arc()
            .outerRadius(_outerRadius - lineWidth / 2)
            .innerRadius(_innerRadius)
            .padAngle(padAngle)

        item.arc &&
            Object.entries(item.arc).forEach(([key, value]) => {
                if (typeof arc[key] === 'function') {
                    if (typeof value === 'string') {
                        arc[key]((value.split('%')[0] / 100) * _outerRadius)
                    } else {
                        arc[key](value)
                    }
                }
            })

        return arc
    });

    const arcsOuter = data.map((item) => {
        const arc = shape
            .arc()
            .outerRadius(_outerRadius)
            .innerRadius(_outerRadius - lineWidth)
            .cornerRadius(lineWidth / 2)
            .padAngle(padAngle - 0.02)

        item.arcOuter &&
            Object.entries(item.arc).forEach(([key, value]) => {
                if (typeof arc[key] === 'function') {
                    if (typeof value === 'string') {
                        arc[key]((value.split('%')[0] / 100) * _outerRadius)
                    } else {
                        arc[key](value)
                    }
                }
            })

        return arc
    });

    const pieSlices = shape
        .pie()
        .value((d) => valueAccessor({ item: d }))
        .sort(sort)
        .startAngle(startAngle)
        .endAngle(endAngle)(data)

    return (
        <>
            <View style={styles.circle}>
                <Svg pointerEvents={Platform.OS === 'android' && 'box-none'} style={{ height, width }}>
                    <G x={width / 2} y={height / 2}>
                        {pieSlices.map((slice, index) => {
                            const { key, onPress, svg } = data[index]
                            return (
                                <Path
                                    key={key}
                                    onPress={onPress}
                                    {...svg}
                                    fillOpacity={'0.15'}
                                    d={arcs[index](slice)}
                                />
                            )
                        })}
                        {pieSlices.map((slice, index) => {
                            const { key, onPress, svg } = data[index]
                            return (
                                <Path
                                    key={key}
                                    onPress={onPress}
                                    {...svg}
                                    d={arcsOuter[index](slice)}
                                />
                            )
                        })}
                    </G>
                </Svg>
            </View>
            <View style={styles.labelWrap}>
                <Text numberOfLines={1} style={styles.label}>{label}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    circle: {
        zIndex: 10,
    },
    labelWrap: {
        ...StyleSheet.absoluteFill,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontFamily: Platform.select({
            ios: 'AvenirNextCyr-Demi',
            android: 'avenirnextcyr-demi',
        }),
        fontSize: 20,
        lineHeight: 27,
        textAlign: 'center',
        color: '#244CAA',
    },
});

export default memo(Pie);