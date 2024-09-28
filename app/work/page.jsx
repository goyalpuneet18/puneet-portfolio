"use client";

import { motion } from "framer-motion";
import React,  {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { TooltipTrigger, TooltipContent, TooltipProvider, Tooltip } from "@/components/ui/tooltip";


const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'ReactJS',
        description: 'A JavaScript library for building user interfaces',
        stacl : [{
            name: 'React',
            icon: 'react'
        }, {
            name: 'JavaScript',
            icon: 'javascript'
        }, {
            name: 'HTML',
            icon: 'html'
        }, {
            name: 'CSS',
            icon: 'css'
        }],
        image:'/'
    }
]

const Work = () => {
    return (
        <div>Work page</div>
    );
}

export default Work;