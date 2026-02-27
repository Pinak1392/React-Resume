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
        },
        {
            navColor: '#5cef68',
            backgroundColor: '#000000',
            backgroundInnerColor: '#282828',
        },
    ];

    document.documentElement.style.setProperty('--navColor', presets[preset].navColor);
    document.documentElement.style.setProperty('--backgroundColor', presets[preset].backgroundColor);
    document.documentElement.style.setProperty('--backgroundInnerColor', presets[preset].backgroundInnerColor);

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