import React from 'react';
import img1 from "../picture_izBrazzerie/img1.webp"
import img1_png from "../picture_izBrazzerie/img1.png"
import {motion} from "framer-motion"
import arrow_right from "../picture_izBrazzerie/arrow_right.webp";
import arrow_right_png from "../picture_izBrazzerie/arrow_right.png";
const CardOnThirdWindow = (props) => {

    const VarianceCard = {
        open: {
            y:0,
            opacity: 1,
        },
        close: {
            y:"100%",
            opacity: 0,
        }

    }


    const VarianceButton = {
        open: {
            opacity: 1,
        },
        close: {
            opacity: 0,
        }

    }

    const pulsePicture = {
        open: {
            scale: 1.1,
        },
        close: {
            scale: 1,
        }
    }

    function checkObject() {
        switch (props.id){
            case 1: return {delay: 14, duration: 2, repeat: 3, repeatType: "reverse"};

            case 2: return {delay: 20.5, duration: 2, repeat: 3, repeatType: "reverse"};

            case 3: return {delay: 26.5, duration: 2, repeat: 3, repeatType: "reverse"};

        }
    }




    if (props.type === "normal") {
        return (
            <motion.div className="card_massive" initial='close' whileInView='open' viewport={{once: true, amount: 0.1}}>
                <motion.div className="picture_card" variants={pulsePicture} whileInView="open" initial="close" transition={checkObject(props.id)}>
                    <motion.div className="elem_picture_one" transition={{duration: 1}} variants={VarianceCard}>
                        <button className="button_picture">меню</button>
                    </motion.div>
                    <motion.div className="mainBlock_img" variants={pulsePicture} transition={checkObject(props.id)}>
                    <motion.div className="elem_picture_two" transition={{duration: 1}} variants={VarianceCard}>

                        <picture>
                            <source srcSet={img1} type="image/webp"/>
                            <source srcSet={img1_png} type="image/png"/>
                            <img className="picture_two" src={img1} alt="picture_menu"/>
                        </picture>

                    </motion.div>
                    </motion.div>
                </motion.div>


                <div className="text_card">

                    <div className="title_card">
                        <motion.div transition={{duration: 1, delay: 0.5}} variants={VarianceCard}>{props.order.title}</motion.div>
                    </div>

                    <div className="main_text_card">
                        <motion.div transition={{duration: 1, delay: 1}} variants={VarianceCard}>{props.order.title}>{props.order.text}</motion.div>
                    </div>
                </div>
                <motion.div className="card_button" transition={{duration: 1, delay: 1.5}} variants={VarianceButton}>
                    <motion.button className="butcard" whileHover={{borderColor: "rgb(206, 189, 160)", color: "rgb(206, 189, 160)", opacity: 1}}>ПЕРЕЙТИ В МЕНЮ</motion.button>
                </motion.div>
            </motion.div>
        );
    }

    else{
        return (
            <motion.div className="card_massive_mobile" initial='close' whileInView='open' viewport={{once: true, amount: 0.1}}>
                <div className="picture_card_mobile">
                    <motion.div className="elem_picture_one" transition={{duration: 1}} variants={VarianceCard}>
                        <button className="button_picture_mobile">меню</button>
                    </motion.div>
                    <motion.div className="mainBlock_img" variants={pulsePicture} transition={checkObject(props.id)}>
                    <motion.div className="elem_picture_two" transition={{duration: 1}} variants={VarianceCard}>
                        <picture>
                            <source srcSet={img1} type="image/webp"/>
                            <source srcSet={img1_png} type="image/png"/>
                            <img className="picture_two" src={img1} alt="picture_menu"/>
                        </picture>
                    </motion.div>
                    </motion.div>
                </div>


                <div className="text_card">

                    <div className="title_card_mobile">
                        <motion.div transition={{duration: 1, delay: 0.5}} variants={VarianceCard}>{props.order.title}</motion.div>
                    </div>

                    <div className="main_text_card_mobile">
                        <motion.div transition={{duration: 1, delay: 1}} variants={VarianceCard}>{props.order.text}</motion.div>
                    </div>

                </div>

                <motion.div className="card_button" transition={{duration: 1, delay: 1.5}} variants={VarianceButton}>
                    <motion.button className="butcard_mobile" whileHover={{borderColor: "rgb(206, 189, 160)", color: "rgb(206, 189, 160)", opacity: 1}}>ПЕРЕЙТИ В МЕНЮ</motion.button>
                </motion.div>

            </motion.div>
        );
    }
}

export default CardOnThirdWindow;