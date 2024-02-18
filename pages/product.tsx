import React from 'react';
import styles from "../styles/Home.module.css";
import {Button, Typography} from "@mui/material";
import style from '../styles/Product.module.css'

const Product = () => {
    return (
        <div className={styles.container2}>
            <header className={style.header__product}>
                <div className={style.container__header}>
                    <div className={style.logo}>
                        <h2 className={style.header__logo}>
                            <a href="/product">World Peas</a>
                        </h2>
                    </div>
                    <a className={style.myLink} href="#">
                        NewStand
                    </a>
                    <a className={style.myLink} href="#">
                        Who we are
                    </a>
                    <a className={style.myLink} href="#">
                        My Profile
                    </a>
                    <Button className={style.basketButton} href="#" sx={{ backgroundColor: '#426B1F' }}>
                        Basket
                    </Button>
                </div>
            </header>

            <div className={style.second__block}>
                <div className={style.produce}>
                    <div className={style.produce}>
                        <Typography  gutterBottom className={style.textBlock}>
                            Produce
                        </Typography>

                        <Typography  gutterBottom className={style.text}>
                            Fresh  —  August 21, 2023
                        </Typography>
                    </div>

                    <div className={style.buttons}>
                        <Button className={style.button__default} href="#">
                            Default
                        </Button>
                        <Button className={style.buttonAZ} href="#">
                            A-Z
                        </Button>
                        <Button className={style.btn__ListView} href="#">
                            List View
                        </Button>

                    </div>

                </div>
                <div className={style.divider}></div>


            </div>
            <div className={style.product__block}>
                <div className={style.card}>
                    <div className={style.product}>
                        <img width={395} height={296} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg" alt="Your Alt Text" className={style.image__product1} />
                        <div className={style.card__text}>
                            Heirloom tomato
                            <p className={style.price}>$5.99 / lb</p>
                            <div className={style.info}>
                                Grown in San Juan Capistrano, CA
                            </div>
                        </div>


                    </div>

                </div>

                <div className={style.card}>
                    <div className={style.product}>
                        <img width={395} height={296} src="https://www.cefarm24.pl/czytelnia/wp-content/uploads/2021/01/imbir-wlasciwosci-leczenie-i-zastosowanie-e1611916619284.jpg" alt="Your Alt Text" className={style.image__product1} />
                        <div className={style.card__text}>
                            Heirloom tomato
                            <p className={style.price}>$5.99 / lb</p>
                            <div className={style.info}>
                                Grown in San Juan Capistrano, CA
                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default Product;