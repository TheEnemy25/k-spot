"use client";

import React, { useEffect } from 'react';

const Scrollbar: React.FC = () => {
    // useEffect(() => {
    //     let isScrolling: NodeJS.Timeout;
    //     const body = document.body;

    //     const showScrollbar = () => {
    //         body.classList.remove('hidden');
    //     };

    //     const hideScrollbar = () => {
    //         body.classList.add('hidden');
    //     };

    //     const handleScroll = () => {
    //         showScrollbar();
    //         clearTimeout(isScrolling);
    //         isScrolling = setTimeout(hideScrollbar, 1000);
    //     };

    //     const checkScrollbar = () => {
    //         if (window.innerWidth > document.documentElement.clientWidth) {
    //             body.classList.add('has-scrollbar');
    //         } else {
    //             body.classList.remove('has-scrollbar');
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     // window.addEventListener('resize', checkScrollbar);
    //     hideScrollbar();
    //     checkScrollbar();

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         window.removeEventListener('resize', checkScrollbar);
    //         clearTimeout(isScrolling);
    //     };
    // }, []);

    return null;
};

export default Scrollbar;
