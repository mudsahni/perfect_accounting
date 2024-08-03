import React from 'react';

function ImageGridComponent() {
    return (
        <div className="">
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-stone-100 rounded-xl sm:p-0">
                    <img src="/images/working_man.png" alt="Description" className="w-full h-auto mb-3 transition-transform ease-in-out duration-500 hover:scale-110"/>
                </div>
                <div className="bg-stone-100 rounded-xl sm:p-0">
                    <img src="/images/working_woman.png" alt="Description" className="w-full h-auto mb-3 transition-transform ease-in-out duration-500 hover:scale-110"/>
                </div>
                <div className="bg-stone-100 rounded-xl sm:p-0">
                    <img src="/images/working_man.png" alt="Description" className="w-full h-auto mb-3 transition-transform ease-in-out duration-500 hover:scale-110"/>
                </div>
                <div className="bg-stone-100 rounded-xl sm:p-0">
                    <img src="/images/working_woman.png" alt="Description" className="w-full h-auto mb-3 transition-transform ease-in-out duration-500 hover:scale-110"/>
                </div>
            </div>
        </div>
    );
}

export default ImageGridComponent;
