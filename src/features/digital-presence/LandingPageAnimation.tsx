import React from 'react';
import { motion } from 'framer-motion';

export const LandingPageAnimation = () => {
    return (
        <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl overflow-hidden relative border border-slate-800 h-[500px] group">
            <div className="bg-white rounded-[1.8rem] h-full flex flex-col overflow-hidden shadow-inner">
                {/* Browser Bar */}
                <div className="bg-slate-100 h-10 border-b border-slate-200 flex items-center px-6 justify-between shrink-0">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="h-4 w-48 bg-white border border-slate-200 rounded-full"></div>
                    <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                </div>

                {/* Animated Landing Page Content */}
                <div className="flex-1 overflow-hidden relative">
                    <motion.div
                        animate={{ y: [0, -300, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="p-8 space-y-12"
                    >
                        {/* Hero Section */}
                        <div className="text-center space-y-4">
                            <div className="h-8 bg-slate-900 rounded-xl w-full"></div>
                            <div className="h-3 bg-slate-200 rounded-full w-3/4 mx-auto"></div>
                            <div className="h-10 bg-indigo-600 rounded-2xl w-32 mx-auto"></div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-28 bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col justify-end gap-2">
                                    <div className="w-8 h-8 bg-indigo-100 rounded-lg"></div>
                                    <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                                    <div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
                                </div>
                            ))}
                        </div>

                        {/* Content Section */}
                        <div className="space-y-4">
                            <div className="h-40 bg-slate-100 rounded-3xl w-full"></div>
                            <div className="h-4 bg-slate-200 rounded-full w-full"></div>
                            <div className="h-4 bg-slate-200 rounded-full w-5/6"></div>
                        </div>

                        {/* Final CTA */}
                        <div className="p-8 bg-slate-900 rounded-3xl text-center space-y-4">
                            <div className="h-6 bg-white/20 rounded-lg w-1/2 mx-auto"></div>
                            <div className="h-12 bg-indigo-600 rounded-2xl w-full"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
