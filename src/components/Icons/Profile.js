import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Icon = React.memo(({ color = '#000', width = 16, height = 20, style }) => (
    <Svg width={width} height={height} viewBox="0 0 16 20" style={style}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M13.294 5.29105C13.294 8.22808 10.9391 10.5831 8 10.5831C5.0619 10.5831 2.70601 8.22808 2.70601 5.29105C2.70601 2.35402 5.0619 0 8 0C10.9391 0 13.294 2.35402 13.294 5.29105ZM8 20C3.66237 20 0 19.295 0 16.575C0 13.8539 3.68538 13.1739 8 13.1739C12.3386 13.1739 16 13.8789 16 16.599C16 19.32 12.3146 20 8 20Z" fill={color} />
    </Svg>
));

export default Icon;