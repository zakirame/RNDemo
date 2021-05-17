import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Icon = React.memo(({ color = '#000', width = 5, height = 19, style }) => (
    <Svg width={width} height={height} viewBox="0 0 5 19" style={style}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M4.5 2.5C4.5 3.60457 3.60457 4.5 2.5 4.5C1.39543 4.5 0.5 3.60457 0.5 2.5C0.5 1.39543 1.39543 0.5 2.5 0.5C3.60457 0.5 4.5 1.39543 4.5 2.5ZM4.5 9.5C4.5 10.6046 3.60457 11.5 2.5 11.5C1.39543 11.5 0.5 10.6046 0.5 9.5C0.5 8.39543 1.39543 7.5 2.5 7.5C3.60457 7.5 4.5 8.39543 4.5 9.5ZM2.5 18.5C3.60457 18.5 4.5 17.6046 4.5 16.5C4.5 15.3954 3.60457 14.5 2.5 14.5C1.39543 14.5 0.5 15.3954 0.5 16.5C0.5 17.6046 1.39543 18.5 2.5 18.5Z" fill={color} />
    </Svg>
));

export default Icon;