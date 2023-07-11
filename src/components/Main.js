import { Box, Container, Stack, Typography, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

import Codedet from "./Codedet";
import PropTypes from "prop-types";
import Codenotes from "./Codenotes";
import Sectionnotes from "./Sectionnotes";
import Chapternotes from "./Chapternotes";
import "../App.css";
import "../styles/Main.css";
import { Translate } from "@mui/icons-material";
import { Table2 } from "./Table2";
import { Indexcontent } from "./Indexcontent";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Main = ({ isValueSelected }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container maxWidth="4px">
        <Stack direction={"row"} gap={"10px"} mt={-2.5}>
          <Box
            classname="indexpage"
            sx={{
              height: "590px",
              width: "50%",
              display: "flex",
              border: "0.5px solid grey",
            }}
          >
            <Box
              className="wrapper"
              sx={{
                height: "20px",
                width: "100%",
                textAlign: "left",
                mt: "8px",
              }}
            >
              <Typography
                classname="indexSearch"
                sx={{
                  //backgroundColor: "#ccc6ed",
                  backgroundColor: "#c8e2dd",
                  color: "#4185d2",
                  mt: "-8px",
                }}
                variant="subtitle1"
                fontFamily={"sans-serif"}
                noWrap
                width="610px"
              >
                Index Search
              </Typography>

              <Indexcontent />
            </Box>
          </Box>

          <Box
            classname="Tabularsearch"
            sx={{
              height: "590px",
              width: "60%",
              display: "flex",
              backgroundColor: "white",
              border: "0.5px solid grey",
            }}
          >
            <Box
              className="wrapper"
              sx={{
                height: "20px",
                width: "50%",
                mt: "10px",
              }}
            >
              <Typography
                className="tabularsearch"
                variant="subtitle1"
                fontFamily={"sans-serif"}
                noWrap
                width="930px"
                sx={{
                  backgroundColor: "#c8e2dd",
                  color: "#4185d2",
                  mt: "-10px",
                }}
              >
                Tabular Search
              </Typography>
            </Box>
            <Stack direction={"column"} ml={-30} mt={10}>
              {" "}
              <Typography
                className="codedetails"
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={" #4185d2"}
                fontWeight={600}
                ml={-28}
                sx={{
                  borderBottom: "0.3px solid grey",
                  width: "132%",
                }}
              >
                Code details
              </Typography>
              <Box sx={{ marginRight: "20px" }}>
                {isValueSelected && <Codedet />}
              </Box>
              <Box
                sx={{
                  height: "300px",
                  width: "100%",
                  /// backgroundColor: "white",
                }}
              >
                <Box
                  className="tabs"
                  sx={{
                    height: "35px",
                    width: "920px",
                    backgroundColor: "#c8e2dd",
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: "13px",

                    mt: "20px",
                    ml: "-219px",
                    textAlign: "center",
                  }}
                >
                  <Stack direction={"row"} gap={"70px"} ml={5}>
                    <Box sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          marginTop: "-13px",
                        }}
                      >
                        <Tabs
                          textColor="primary"
                          indicatorColor="primary"
                          className="tabs"
                          value={value}
                          onChange={handleChange}
                          aria-label="basic tabs example"
                          sx={{
                            marginLeft: "-45px",
                            "& .MuiTab-root.Mui-selected": {
                              color: "black",
                              textAlign: "center",
                              fontWeight: 520,
                              transition: "1s",
                            },
                          }}
                          TabIndicatorProps={{
                            style: {
                              marginLeft: "8px",
                              transition: "1s",
                              height: "70%",
                              backgroundColor: "#203fac",
                              opacity: 0.3,
                            },
                          }}
                        >
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",
                              color: "#4185d2",
                              textTransform: "none",
                              width: "150px",
                            }}
                            label=" Code notes"
                            {...a11yProps(0)}
                          />
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",
                              color: "#4185d2",
                              textTransform: "none",
                              width: "150px",
                            }}
                            variant="subtitle1"
                            fontWeight={"700"}
                            label="Section notes"
                            {...a11yProps(1)}
                          />
                          <Tab
                            className="tabs"
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",
                              color: "#4185d2",
                              textTransform: "none",
                              width: "150px",
                            }}
                            variant="subtitle1"
                            fontWeight={"700"}
                            label="Chapter notes"
                            {...a11yProps(2)}
                          />
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",
                              color: "#4185d2",
                              textTransform: "none",
                              width: "150px",
                            }}
                            variant="subtitle1"
                            fontWeight={"700"}
                            label="Chapter guidlines"
                            {...a11yProps(3)}
                          />
                        </Tabs>
                      </Box>
                      <div
                        className="tabpanels"
                        style={{
                          height: "180px",
                          width: "850px",
                          overflowY: "scroll",
                          paddingLeft: "30px",
                        }}
                      >
                        {" "}
                        <CustomTabPanel value={value} index={0}>
                          <Codenotes />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                          <Sectionnotes />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                          <Chapternotes />
                        </CustomTabPanel>
                        <CustomTabPanel
                          value={value}
                          index={3}
                        ></CustomTabPanel>
                      </div>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};
