import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Icon = React.memo(({ color = '#000', width = 36, height = 36, style }) => (
    <Svg width={width} height={height} viewBox="0 0 36 36" style={style}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M6.68629 6.6863C15.3101 -1.93757 21.1025 -1.52484 29.3137 6.6863C37.5248 14.8974 37.9375 20.6898 29.3137 29.3137C20.6898 37.9376 14.8974 37.5248 6.68629 29.3137C-1.52488 21.1026 -1.93761 15.3102 6.68629 6.6863ZM18 11C17.4477 11 17 11.4477 17 12V17H12C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19H17V24C17 24.5523 17.4477 25 18 25C18.5523 25 19 24.5523 19 24V19H24C24.5523 19 25 18.5523 25 18C25 17.4477 24.5523 17 24 17H19V12C19 11.4477 18.5523 11 18 11Z" fill={color} />
    </Svg>
));

export default Icon;