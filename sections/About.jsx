'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| Me presento"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Mi nombre es <span className="font-extrabold"> Melany Pérez Collado </span> nací el 17 de febrero de 2010. Desde pequeña mis ratos libres los paso con mis primas 🫂, montando bicicleta 🚲 y haciendo manualidades 🧶 (uiii que monada 😏). <br/>
        Me caracterizo por coger buenas calificaciones y participar en concursos (toda una polillona 👩🏻‍🎓).
        Mi familia es bastante extensa 🧑‍🧑‍🧒‍🧒, al comenzar la secundaria he conocido muchísimas amistades 🫶🏻 (una matica de wara).<br/>
        A los 9 años estuve en clases de danza 💃🏻 (de ahí mis grandes dotes como bailarina 😋).<br/>
        Soy bastante sociable, amistosa y educada 🙌🏻.
        Me gusta escuchar todo tipo de música 🎧, pasear mucho a la playa 🏖️, a comer cositas 🍴 (pa mantener esta cuerpa 🧜🏻‍♀️) y jugar billar 🎱. 
        Vivo tirándome fotos donde quiera 🤳🏻
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
