import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Icon = React.memo(({ color = '#000', width = 480, height = 62, style }) => (
    <Svg width={width} height={height} viewBox={'0 0 480 62'} style={style}>
        <Path d="M479.458 61.0235C468.433 59.3096 457.416 57.5279 446.399 55.7462C402.306 48.6156 358.219 41.486 313.704 38.7105C263.153 35.5424 212.419 38.1403 161.929 42.1003C158.136 42.3961 154.339 42.6993 150.537 43.0028C100.323 47.011 49.4028 51.0756 0.542168 39.0315L0.542168 0H479.458V61.0235Z" fill={color} />
    </Svg>
));

export default Icon;