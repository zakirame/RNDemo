import React from 'react';
import Icons from '../components/Icons';

export const colors = {
    'audio': '#4AC367',
    'image': '#FFC107',
    'archive': '#2196F3',
    'document': '#8D6E63',
    'video': '#00BCD4',
    'other': '#DA5DF5',
};
  
export const graphData = [
    {
        id: 'stat0',
        value: 33.3,
        label: 'Music',
        type: 'audio',
    },
    {
        id: 'stat1',
        value: 12.9,
        label: 'Images',
        type: 'image',
    },
    {
        id: 'stat2',
        value: 5.08,
        label: 'Archives',
        type: 'archive',
    },
    {
        id: 'stat3',
        value: 8.47,
        label: 'Documents',
        type: 'document',
    },
    {
        id: 'stat4',
        value: 21.8,
        label: 'Video',
        type: 'video',
    },
    {
        id: 'stat5',
        value: 18.45,
        label: 'Others',
        type: 'other',
    }
];
  
export const navScreens = [
    {
        label: 'Home',
        type: 'screen',
        icon: (active) => <Icons.Cloud color={active ? '#447BFB' : '#959FBA'} />,
        screen: 'Home',
    },
    {
        label: 'Local',
        type: 'screen',
        icon: (active) => <Icons.Check color={active ? '#447BFB' : '#959FBA'} />,
        screen: 'Local',
    },
    {
        label: 'Upload',
        type: 'action',
        icon: (active) => <Icons.Add color={active ? '#447BFB' : '#959FBA'} />,
        screen: 'Upload',
    },
    {
        label: 'Notifications',
        type: 'screen',
        icon: (active) => <Icons.Bell color={active ? '#447BFB' : '#959FBA'} />,
        screen: 'Notifications',
    },
    {
        label: 'Profile',
        type: 'screen',
        icon: (active) => <Icons.Profile color={active ? '#447BFB' : '#959FBA'} />,
        screen: 'Settings',
    },
];
  
export const filesData = [
    {
        id: 'file97128',
        filename: 'TikTok dance',
        type: 'video',
        extension: 'mov',
        used: 5,
        size: 705689,
        last_open: 1559682000000,
    },
    {
        id: 'file91236',
        filename: 'Selfie without beard',
        type: 'image',
        extension: 'jpg',
        used: 2,
        size: 90514,
        last_open: 1628110800000,
    },
    {
        id: 'file57723',
        filename: 'University lectures',
        type: 'audio',
        extension: 'mp3',
        used: 1,
        size: 5678194,
        last_open: 1596574800000,
    },
    {
        id: 'file972348',
        filename: 'DJI_0020',
        type: 'video',
        extension: 'mp4',
        used: 0,
        size: 1049389,
        last_open: 1559682000000,
    },
    {
        id: 'file9423436',
        filename: 'IMG_3685',
        type: 'image',
        extension: 'png',
        used: 92,
        size: 70764,
        last_open: 1628110800000,
    },
    {
        id: 'file5234223',
        filename: 'AUDIO_0EEE950929F3-1',
        type: 'audio',
        extension: 'mp3',
        used: 56,
        size: 8923194,
        last_open: 1596574800000,
    }
];
  
export const tabsData = [
    {
        label: 'Least used',
        type: 'used',
        key: 'tab0',
    },
    {
        label: 'Largest',
        type: 'size',
        key: 'tab1',
    },
    {
        label: 'Latest accessed',
        type: 'open',
        key: 'tab2',
    },
  ];