'use client';
import {AnimatePresence, motion} from "framer-motion";
import React from "react";

import {useState} from "react";

type ServicePageDetailsCardProps = {
    items: {id: string; title: string; subtitle: string;}[]
}
const ServicePageDetailsCard: React.FC<ServicePageDetailsCardProps>  = ({items}) => {
    const [selectedId, setSelectedId] = useState<string | null>(null)

    return (
        <div className="flex flex-wrap gap-20">

            {items.map(item => (
                <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)} className="bg-pink-500 p-24 flex-1">
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div layoutId={selectedId} className="overlay">
                        {/* Find the item in the array to display its data */}
                        {items.filter(item => item.id === selectedId).map((item) => (
                            <React.Fragment key={item.id}>
                                <motion.h5>{item.subtitle}</motion.h5>
                                <motion.h2>{item.title}</motion.h2>
                                <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
                            </React.Fragment>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ServicePageDetailsCard;