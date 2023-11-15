import * as React from "react";
import {motion} from "framer-motion";

const Path = (props: any) => (
    <motion.path
        strokeWidth="3"
        strokeLinecap="round"
        {...props}
    />
);

type MenuToggleProps = {
    onClick: () => void
}
export const MenuToggle = ({onClick}: MenuToggleProps) => (
    <motion.div onClick={onClick} style={{
        width: "48px",
        height: "48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                stroke="white"
                variants={{
                    closed: {d: "M 2 0 L 20 0"},
                    open: {d: "M 3 16.5 L 17 2.5"}
                }}
            />
            <Path
                stroke="white"
                variants={{
                    closed: {d: "M 2 12 L 20 12"},
                    open: {d: "M 3 2.5 L 17 16.346"}
                }}
            />
        </svg>
    </motion.div>
);
