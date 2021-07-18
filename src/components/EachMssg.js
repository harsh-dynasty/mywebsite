import React from "react";
import { KeyboardArrowDown } from "@material-ui/icons";

import {
    Typography,
    Paper,
    Box,
    IconButton,
    Menu,
    MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: props => props.align == "left" ? "#262d31" : "#056162",
        margin: 10,
        marginLeft: 15,
        padding: 3,
        paddingTop: 0,
        width: window.innerWidth < 720 ? "60%" : "40%",
        alignSelf: props => props.align == "left" ? "flex-start" : "flex-end"
    },
    paperHead: {
        color: "#00ae9b",
        // margin: 10,
        marginLeft: 5,
        marginBottom: 5
    },
    text: {
        color: "#ffffff",
        marginLeft: 5,

    },
    img: {
        width: "100%",
        height: 'auto',
        borderRadius: 5
    },
    action: {
        color: grey[500]
    },
    link: {
        backgroundColor: "#262d31",
        color: grey[500],
        '&:hover': {
            backgroundColor: "#0f171a"
        }
    },
    menu: {
        backgroundColor: "#262d31"
    },
    para: {
        color: grey[300],
        marginLeft: 5,
        marginTop: 5
    }
}));

const EachMssg = ({ align, title, description, link, para, img }) => {
    const classes = useStyles({ align });
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const goToLink = () => {
        window.open(link, "_blank")
    }
    return <Paper elevation={3} className={classes.paper}>
        <Box display='flex' justifyContent="space-between" alignItems="center">
            <Typography variant="body1" className={classes.paperHead}>
                {title}
            </Typography>

            {link &&
                <>
                    <IconButton className={classes.action} size='small' onClick={handleClick}>
                        <KeyboardArrowDown />
                    </IconButton>
                    <Menu
                        classes={{ list: classes.menu }}
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} className={classes.link} onClick={goToLink}>Open Link</MenuItem>

                    </Menu></>}

        </Box>

        {img && <img src={img} className={classes.img} />}

        <Typography variant="body2" className={classes.text}>
            {description}
        </Typography>
        <Box display='flex' flexDirection='column'>
            {para && para.map(line => (
                <Typography variant="caption" className={classes.para}>
                    {line}
                </Typography>

            ))}
        </Box>
    </Paper>



}

export default EachMssg