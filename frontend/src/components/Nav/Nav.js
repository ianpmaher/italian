import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import EnglishToItalian from "../../pages/EnglishToItalian/EnglishToItalian";
import Home from "../../pages/Home/Home";
import ItalianToEnglish from "../../pages/ItalianToEnglish/ItalianToEnglish";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <span>{children}</span>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const Nav = (props) => {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ bgcolor: "background.paper" }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="English to Italian" {...a11yProps(1)} />
                    <Tab label="Italian to English" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} >
                <Home />
            </TabPanel>
            <TabPanel value={value} index={1} >
                <EnglishToItalian />
            </TabPanel>
            <TabPanel value={value} index={2} >
                <ItalianToEnglish />
            </TabPanel>
        </Box>
    );
};

export default Nav;
