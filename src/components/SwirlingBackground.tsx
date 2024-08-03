import React from 'react';

type SwirlingBackgroundProps = {
    children?: React.ReactNode;
}
const SwirlingBackground: React.FC<SwirlingBackgroundProps> = ({children}) => {
    return (
        <div className="relative w-full items-center justify-center bg-stone-100 pb-12">
            {/* Background Layer */}
            <div className="absolute top-0 left-0 w-full h-full bg-blob-animation"></div>
            {/*<div style={{backgroundImage: 'url("/images/waveBackground7.png")', backgroundSize: 'cover'}}*/}
            {/*     className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover"></div>*/}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                {children}
            </div>
        </div>
    )
}

const WaveBackground: React.FC<SwirlingBackgroundProps> = ({children}) => {
    return (
        <div className="relative w-full items-center justify-center bg-stone-100 max-h-100 pb-32">

        <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
        </div>
        </div>
    )
}

export default SwirlingBackground
// const HeroBanner = () => {
//     return (
//         <div className="relative w-full flex items-center justify-center overflow-hidden">
//             {/* Background Layer */}
//             <div className="absolute top-0 left-0 w-full h-full bg-blob-animation"></div>
//
//             {/* Text Layer */}
//             <div className="z-10">
//                 <h1 className="text-8xl opacity-60 font-bold text-white">Explore Our World</h1>
//             </div>
//         </div>
//     );
// };
//
// export default HeroBanner;
