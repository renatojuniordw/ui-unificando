import React from 'react';

export const HeroIllustration: React.FC = () => {
    return (
        <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] aspect-square flex items-center justify-center p-6 md:p-12 shadow-2xl relative z-10 overflow-hidden border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
            <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] w-full h-full border border-white/10 flex flex-col p-6 md:p-8 text-white text-left overflow-hidden">
                <div className="flex justify-between items-center mb-8 md:mb-12">
                    <div className="h-4 w-24 md:w-32 bg-white/20 rounded-full"></div>
                    <div className="h-10 w-10 bg-indigo-500 rounded-2xl flex items-center justify-center font-black">U</div>
                </div>
                <div className="space-y-6">
                    <div className="flex gap-4 items-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] font-bold shrink-0">1</div>
                        <div className="h-3 w-32 md:w-40 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0">2</div>
                        <div className="h-3 w-24 md:w-32 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0">3</div>
                        <div className="h-3 w-40 md:w-48 bg-white/10 rounded-full"></div>
                    </div>

                    <div className="mt-auto pt-8 border-t border-white/10">
                        <div className="flex justify-between items-end">
                            <div className="space-y-2">
                                <div className="h-2 w-16 md:w-20 bg-white/10 rounded-full"></div>
                                <div className="h-2 w-10 md:w-12 bg-white/10 rounded-full"></div>
                            </div>
                            <div className="h-8 w-24 bg-green-500/20 rounded-lg border border-green-500/50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
