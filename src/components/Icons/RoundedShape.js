import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Icon = React.memo(({ color = '#000', width = 32, height = 32, opacity = '1', style }) => (
    <Svg width={width} height={height} viewBox="0 0 32 32" style={style}>
        <Path d="M16 0C28.196 0 32 4.3877 32 16C32 27.6123 28.196 32 16 32C3.80401 32 0 27.6123 0 16C0 4.3877 3.80401 0 16 0Z" fill={color} fillOpacity={opacity} />
    </Svg>
));

export default Icon;