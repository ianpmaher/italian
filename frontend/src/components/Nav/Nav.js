import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import EnglishToItalian from "../../pages/EnglishToItalian/EnglishToItalian";
import Home from "../../pages/Home/Home";
import ItalianToEnglish from "../../pages/ItalianToEnglish/ItalianToEnglish";
import Quiz from "../Quiz/Quiz";

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
                    {children}
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
    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
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
                        <Tab label="Quiz" {...a11yProps(3)} />
                        <Tab label="Translate" {...a11yProps(4)} />
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
                <TabPanel value={value} index={3} >
                    <Quiz />
                </TabPanel>
                <TabPanel value={value} index={4} >
                    Item Five
                </TabPanel>
            </Box>
        </div>
    );
};

export default Nav;
