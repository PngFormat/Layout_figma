import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Box, Button, Typography } from '@mui/material';

export default function Home() {
    return (
        <div className={styles.container2}>
            <div className={styles.container}>
                <header className={styles.header__home}>
                    <div className={styles.container__header}>
                        <h2 className={styles.header__logo}>
                            <a href="/product">World Peas</a>
                        </h2>
                        <a className={styles.myLink} href="#">
                            NewStand
                        </a>
                        <a className={styles.myLink} href="#">
                            Who we are
                        </a>
                        <a className={styles.myLink} href="#">
                            My Profile
                        </a>
                        <Button className={styles.basketButton} href="#" sx={{ backgroundColor: '#426B1F' }}>
                            Basket
                        </Button>
                    </div>
                </header>
            </div>

            <div className={styles.typography__home}>
                <Typography variant="h4" gutterBottom>
                    We’re{' '}
                    <span className={styles.highlight__text}>farmers</span>,{' '}
                    <span className={styles.highlight__text}>purveyors</span>, and{' '}
                    <span className={styles.highlight__text}>eaters</span> of <br></br> organically grown food.
                </Typography>
            </div>

            <Box display="flex" justifyContent="center">
                <Button className={styles.basketButton} href="#" sx={{ backgroundColor: '#426B1F', width: 140, height: 35 }}>
                    Browse our shop
                </Button>
            </Box>

            <div className={styles.images__block}>
                <img src="https://t3.ftcdn.net/jpg/02/05/56/54/360_F_205565499_waqtbwXp6KukIa7ilco7GfIErIjIK117.jpg" alt="Your Alt Text" className={styles.images__home} />
                <div className={styles.imageText__block}>
                    <img src="https://wallpapercosmos.com/w/full/9/f/0/585777-3840x2160-desktop-4k-vegetables-background.jpg" alt="Your Alt Text" className={styles.image__home1} />
                    <Typography variant='h6' gutterBottom className={styles.textBlock}>
                        Central California — The person who grew these was located in Central California and, er, hopefully very well-compensated.
                    </Typography>
                </div>
            </div>

            <div className={styles.someText}>
                <div className={styles.Text1}>
                    WHAT WE BELIEVE
                </div>
                <div className={styles.Text2}>
                    We believe in produce. Tasty produce. Produce like:<br></br>

                    Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts.
                    Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli.
                    Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.<br></br>
                    <br></br>
                    What are we forgetting?<br></br>
                    <br></br>
                    Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”).
                    Persian cucumbers, in addition to aforementioned “normal” cucumbers.
                    Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins).
                    Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom.
                    Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries.
                    Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive
                    . Escarole, which, we swear, we’re vendors of<br></br>
                    organic produce, but if you asked us to describe what escaroles are...<br></br>
                </div>

            </div>
        </div>
    );
}
