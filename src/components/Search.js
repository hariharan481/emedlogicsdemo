import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../App.css";
import { Main } from "./Main";

const Search = () => {
  const [result, setResult] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [first, setfirst] = useState("");
  const [word, setword] = useState("");
  const [isValueSelected, setIsValueSelected] = useState(false);

  function handlechange(e) {
    setword(e.target.value);
  }
  console.log(word);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/codes/${word}/matches`);
        if (response.ok) {
          const data = await response.json();
          setResult(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [word]);
  console.log("our result is", result);
  console.log(first);
  global.values = first;
  console.log(global.values.code);
  return (
    <>
      <Box
        sx={{
          height: "80px",
          position: "static",
        }}
      >
        <Stack
          sx={{ margin: "auto", color: "black", mt: "20px" }}
          direction={"row"}
          gap={5}
        >
          <Fragment>
            <Autocomplete
              id="users"
              defaultValue={null}
              getOptionLabel={(result) => `${result.id} ${result.description}`}
              options={result}
              sx={{
                width: "1450px",
                backgroundColor: "white",
                mt: "14px",
                ml: "110px",

                display: "inline-block",
                "& input": {
                  height: "5px",
                  bgcolor: "background.paper",
                  color: (theme) =>
                    theme.palette.getContrastText(
                      theme.palette.background.paper
                    ),
                },
              }}
              isoptionequalToValue={(option, value) =>
                option.description === value.description
              }
              noOptionsText={"PLEASE ENTER VALID CODES"}
              open={open}
              onInputChange={(_, value) => {
                if (value.length === 0) {
                  if (open) setOpen(false);
                } else {
                  if (!open) setOpen(true);
                }
              }}
              onClose={() => setOpen(false)}
              popupIcon={<SearchIcon />}
              onChange={(event, newValue) => {
                setfirst(newValue);
                setIsValueSelected(true);
              }}
              autoSelect
              renderOption={(props, result) => (
                <Box {...props} key={result.id}>
                  {result.id} {result.description}
                </Box>
              )}
              renderInput={(parms) => (
                <TextField
                  {...parms}
                  onChange={handlechange}
                  placeholder="search for code"
                />
              )}
            />
          </Fragment>
        </Stack>
      </Box>
      <Main isValueSelected={isValueSelected} />
    </>
  );
};

export default Search;
