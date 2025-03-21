import React from 'react';
import './css/Footer.css'
import {motion} from "framer-motion"
import logotype from "../HeaderBlock/pictures_footer/Бразери в лого и в проекты.webp"
import Map_Page from "../Pages/Map_Page";
const BlockFour = ({page, window_of_page}) => {
    const VarianceMap = {
        open: {
            opacity: 1,
        },
        close: {
            opacity: 0,
        }

    }


    if (window_of_page === "mainPage") {
        return (
            <div className="block4_mobile">
                <motion.div className="footer_block4_mainPage"
                            variants={VarianceMap}
                            whileInView='open'
                            initial='close'
                            viewport={{once: true, amount: 0.4}}
                            transition={{duration: 0.5}}>
                    <div className="text_footer">
                        <div className="text_one">
                            <div className="puncts">
                                <div className="elems_footer_one">
                                    <a className="linker" href="?">О ПРОЕКТЕ</a>
                                    <a className="linker" href="?">SIBUMI</a>
                                    <a className="linker" href="?">IZ BRAZERIE</a>
                                    <a className="linker" href="?">KONDITORIA</a>
                                </div>
                            </div>
                        </div>
                        <div className="text_two">
                            <div className="puncts_two">
                                <div className="elems_footer_two">
                                    <a className="linker" href="?">КОНТАКТЫ</a>
                                    <a className="linker" href="?">ДОСТАВКА</a>
                                    <a className="linker" href="?">ОПЛАТА</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="links_logo">
                        <div className="link_pool">
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href="?" className="link_elem"/>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href="?" className="link_elem"/>
                        </div>


                        <div className="block_with_logotype_mainPage">
                            <div className="main_logo_block_footer">
                                <div className="logotype_footer_mainPage">
                                    <img className="logo_img" src={logotype} alt="logotype_footer"/>
                                </div>

                                <div className="text_footer_logo_mainPage">
                                    <h>Для самых притязательных здесь фраз</h>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>


                {/*<motion.div  variants={VarianceMap}*/}
                {/*             whileInView='open'*/}
                {/*             initial='close'*/}
                {/*             viewport={{ once: true, amount: 0.4 }}*/}
                {/*             transition={{duration: 0.5}}*/}
                {/*             className="map">*/}
                {/*    /!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
                {/*    <Map_Page/>*/}

                {/*</motion.div>*/}
       </div>
        )
    }


    if (window_of_page === "standart_mainPage") {
        return (
            <div className="block4_mobile">
                <motion.div className="footer_block4"
                            variants={VarianceMap}
                            whileInView='open'
                            initial='close'
                            viewport={{once: true, amount: 0.4}}
                            transition={{duration: 0.5}}>
                    <div className="text_footer">
                        <div className="text_one">
                            <div className="puncts">
                                <div className="elems_footer_one">
                                    <a className="linker" href="?">О ПРОЕКТЕ</a>
                                    <a className="linker" href="?">SIBUMI</a>
                                    <a className="linker" href="?">IZ BRAZERIE</a>
                                    <a className="linker" href="?">KONDITORIA</a>
                                </div>
                            </div>
                        </div>
                        <div className="text_two">
                            <div className="puncts_two">
                                <div className="elems_footer_two">
                                    <a className="linker" href="?">КОНТАКТЫ</a>
                                    <a className="linker" href="?">ДОСТАВКА</a>
                                    <a className="linker" href="?">ОПЛАТА</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="links_logo">
                        <div className="link_pool">
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href="?" className="link_elem"/>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href="?" className="link_elem"/>
                        </div>


                        <div className="block_with_logotype_mainPage">
                            <div className="main_logo_block_footer">
                                <div className="logotype_footer_mainPage">
                                    <img className="logo_img" src={logotype} alt="logotype_footer"/>
                                </div>

                                <div className="text_footer_logo_mainPage">
                                    <h>Для самых притязательных здесь фраз</h>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>


                <motion.div  variants={VarianceMap}
                             whileInView='open'
                             initial='close'
                             viewport={{ once: true, amount: 0.4 }}
                             transition={{duration: 0.5}}
                             className="map">
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <Map_Page/>

                </motion.div>
            </div>
        )
    }


    else {

        return (
            <div className="block4">
                <motion.div className="footer_block4"
                            variants={VarianceMap}
                            whileInView='open'
                            initial='close'
                            viewport={{once: true, amount: 0.4}}
                            transition={{duration: 0.5}}>
                    <div className="text_footer">
                        <div className="text_one">
                            <div className="puncts">
                                <div className="elems_footer_one">
                                    <a className="linker" href="?">О ПРОЕКТЕ</a>
                                    <a className="linker" href="?">SIBUMI</a>
                                    <a className="linker" href="?">IZ BRAZERIE</a>
                                    <a className="linker" href="?">KONDITORIA</a>
                                </div>
                            </div>
                        </div>
                        <div className="text_two">
                            <div className="puncts_two">
                                <div className="elems_footer_two">
                                    <a className="linker" href="?">КОНТАКТЫ</a>
                                    <a className="linker" href="?">ДОСТАВКА</a>
                                    <a className="linker" href="?">ОПЛАТА</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="links_logo">
                        <div className="link_pool">
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href="?" className="link_elem"/>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href="?" className="link_elem"/>
                        </div>


                        <div className="block_with_logotype">
                            <div className="main_logo_block_footer">
                                <div className="logotype_footer">
                                    <img className="logo_img" src={logotype} alt="logotype_footer"/>
                                </div>

                                <div className="text_footer_logo">
                                    <h>Для самых притязательных здесь фраз</h>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={VarianceMap}
                            whileInView='open'
                            initial='close'
                            viewport={{once: true, amount: 0.4}}
                            transition={{duration: 0.5}}
                            className="map">
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <Map_Page/>

                </motion.div>
            </div>
        );
    };
}
export default BlockFour;
