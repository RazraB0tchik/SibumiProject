import React, {useState} from 'react';
import "./css/CardMenu.css"
import basket_img from "../HeaderBlock/pictures_footer/Корзина.webp"
import basket_img_png from "../HeaderBlock/pictures_footer/Корзина (1).png"
import ButtonCount from "./Button_Count"
import {motion} from "framer-motion";
const CardMenu = (props) => {

    const [selectImg, setSelectImg] = useState(false);

    const changeButton ={
        close:{
            rotateX: "270deg",
            opacity: 0,
        }
    }

    const changeCountButton={
        open:{
            rotateX: "360deg",
            display: "block",
            opacity: 1,
        }
    }

    return (
        <motion.div className="card_block" animate={{opacity: 1}} initial={{opacity:0}} transition={{duration: 1, delay: 0.4}}>
            <div className="picture_block">
                <div className="background_block">
                    <div className="background_button_element">
                        <p className="text_background_element">{props.page}</p>
                    </div>
                </div>
                <div className="front_picture_block">

                    <picture>
                        <source srcSet={props.element.img_elem} type="image/webp"/>
                        <source srcSet={props.element.img_png_elem} type="image/png"/>
                        <img src={props.element.img_elem} alt="picture_menu" className="img_position_menu"/>
                    </picture>

                </div>
            </div>
            <div className="text_block">
                <div className="block_with_text_menuElem">
                    <div className="name_elem_menu">
                        {props.element.text_elem}
                    </div>
                    <div className="prise_block">
                        {props.element.prise}
                    </div>
                </div>
                <div className="block_with_icon">
                    <motion.div className={"inside_basket_block"} onClick={()=>setSelectImg(!selectImg)} variants={changeButton} animate={selectImg ? "close" : "open"} transition={{duration: 1}}>

                        <picture>
                            <source srcSet={basket_img} type="image/webp"/>
                            <source srcSet={basket_img_png} type="image/png"/>
                            <img src={basket_img} alt="basket_page" className="basket_img"/>
                        </picture>

                    </motion.div>

                    <motion.div className="button_count_block" variants={changeCountButton} initial={{opacity: 0, display: "none", rotateX: "180deg"}} animate={selectImg ?  "open" : "close"} transition={{duration: 1.5}}>
                        <ButtonCount ct={props.element.nb} sum={props.element.summa}/>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default CardMenu;