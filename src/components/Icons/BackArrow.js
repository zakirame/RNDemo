import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Icon = React.memo(({ color = '#000', width = 20, height = 14, style }) => (
    <Svg width={width} height={height} viewBox="0 0 20 14" style={style}>
        <Path d="M6.02132 0.29451C6.41185 -0.0960139 7.04501 -0.0960133 7.43553 0.294511C7.82606 0.685035 7.82606 1.3182 7.43553 1.70872L3.38528 5.75898H19C19.5523 5.75898 20 6.20669 20 6.75898C20 7.31126 19.5523 7.75898 19 7.75898H3.31421L7.4 11.8448C7.79052 12.2353 7.79052 12.8685 7.4 13.259C7.00948 13.6495 6.37631 13.6495 5.98579 13.259L0.607107 7.8803C0.509462 7.78265 0.436232 7.66984 0.387417 7.54944C0.151697 7.3665 0 7.08046 0 6.75898C0 6.41442 0.174262 6.11056 0.439461 5.93073C0.48365 5.85114 0.539532 5.7763 0.607106 5.70872L6.02132 0.29451Z" fill={color} />
    </Svg>
));

export default Icon;