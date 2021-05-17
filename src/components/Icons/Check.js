import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Icon = React.memo(({ color = '#000', width = 22, height = 21, style }) => (
    <Svg width={width} height={height} viewBox="0 0 22 21" style={style}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M13.2267 1.18031C11.8247 0.161738 9.92633 0.161737 8.52438 1.18031L2.28951 5.71021C0.887564 6.72879 0.30093 8.53426 0.836427 10.1823L3.21794 17.5119C3.75343 19.16 5.28925 20.2758 7.02216 20.2758H14.7289C16.4618 20.2758 17.9976 19.16 18.5331 17.5119L20.9146 10.1823C21.4501 8.53426 20.8635 6.72879 19.4615 5.71021L13.2267 1.18031ZM5.93327 9.5377C5.54275 9.92823 5.54275 10.5614 5.93327 10.9519L8.7617 13.7803C9.15223 14.1709 9.78539 14.1709 10.1759 13.7803L15.8328 8.12349C16.2233 7.73296 16.2233 7.0998 15.8328 6.70928C15.4422 6.31875 14.8091 6.31875 14.4186 6.70928L9.46881 11.659L7.34749 9.5377C6.95696 9.14718 6.3238 9.14718 5.93327 9.5377ZM7.00009 15.4999C6.4478 15.4999 6.00009 15.9477 6.00009 16.4999C6.00009 17.0522 6.4478 17.4999 7.00009 17.4999H15.0001C15.5524 17.4999 16.0001 17.0522 16.0001 16.4999C16.0001 15.9477 15.5524 15.4999 15.0001 15.4999H7.00009Z" fill={color} />
    </Svg>
));

export default Icon;