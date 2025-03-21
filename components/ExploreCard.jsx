'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-[24px]" />

    { active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-violet-50 absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]" style={{ textShadow: '2px 2px 4px rgba(152, 0, 255, 1)' }}>
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-5 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <h2 className="mt-[10px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>

);

export default ExploreCard;
