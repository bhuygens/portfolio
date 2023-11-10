import * as React from "react";
import {motion} from "framer-motion";
import {CommonHelper} from "@/helpers/common.helper";
import styles from './menu_item.module.scss';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

type MenuItemProps = {
    item: string,
    onClick: (item: string) => void,
    index: number
}
export const MenuItem = ({item, onClick}: MenuItemProps) => {

    return (
        <motion.li
            className={styles.container}
            variants={variants}
            onClick={() => onClick(item)}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}>
            {CommonHelper.Capitalize(item)}
        </motion.li>
    );
};
