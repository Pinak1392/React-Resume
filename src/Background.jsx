import { useRef } from 'react';
import Bubble from './Bubble';
import popSound from './assets/bubblePop.mp3';
import Snake from './Snake';

export default function Background({preset}) {
    const audioRef = useRef(new Audio(popSound));
    audioRef.current.volume = 0.2;

    const presets = [
        {
            navColor: '#3D518C',
            backgroundColor: '#ABD2FA',
            backgroundInnerColor: '#f8f8f8',
            HeadingBackgroundColor: '#f8f8f8',
            HeadingColor: '#282828',
            baseAColor: '#299fff',
        },
        {
            navColor: '#5cef68',
            backgroundColor: '#000000',
            backgroundInnerColor: '#282828',
            HeadingBackgroundColor: '#282828',
            HeadingColor: '#f8f8f8',
            baseAColor: '#5cef68',
        },
        {
            navColor: '#333333',
            backgroundColor: '#282828',
            backgroundInnerColor: '#f8f8f8',
            HeadingBackgroundColor: '#f8f8f8',
            HeadingColor: '#282828',
            baseAColor: '#299fff',
        }
    ];

    document.documentElement.style.setProperty('--navColor', presets[preset].navColor);
    document.documentElement.style.setProperty('--HeadingBackgroundColor', presets[preset].HeadingBackgroundColor);
    document.documentElement.style.setProperty('--HeadingColor', presets[preset].HeadingColor);
    document.documentElement.style.setProperty('--backgroundColor', presets[preset].backgroundColor);
    document.documentElement.style.setProperty('--backgroundInnerColor', presets[preset].backgroundInnerColor);
    document.documentElement.style.setProperty('--BaseAColor', presets[preset].baseAColor);

    console.log(typeof preset);

    return(
        <div className='Background'>
            <div className='BackgroundInner'/>
            {preset === 0 && [...Array(200)].map((_, i) => (
                <Bubble key={i} popAudio={audioRef} />
            ))}
            {preset === 1 && <div className='SnakeContainer'>
                <Snake size={100} />
                <Snake size={50} />
                <Snake size={25} />
                <Snake size={75} />
            </div>}
        </div>
    );
}