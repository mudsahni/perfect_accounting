// components/WaveBackground.tsx
import React from 'react';
interface WaveBackgroundProps {
    children: React.ReactNode;
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({ children }) => {
    return (
        <div className='waveContainer'>
            <div className='waveBackground'></div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default WaveBackground;