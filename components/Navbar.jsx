'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import '../styles/fonts.css'; // Importa el archivo CSS de fuentes

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex items-center justify-center gap-8`}>
      {/* <img src="/melany2.png" alt="search" className="w-[200px] h-[200px] object-contain" /> */}

      <h2 className="text-[34px] text-white leading-[30px]" style={{ fontFamily: 'Rubeckia, sans-serif' }}>
        Melany Pérez Collado
      </h2>

      {/* <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" /> */}
    </div>
  </motion.nav>
);

export default Navbar;
