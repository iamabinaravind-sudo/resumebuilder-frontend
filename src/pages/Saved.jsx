import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const rows = [
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16,
    carbs: 24,
    protein: 6,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16,
    carbs: 49,
    protein: 3.9,
  },
];

function Saved() {
  const [search, setSearch] = useState("");

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 4, backgroundColor: "#fff", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        All Saved Resumes
      </Typography>

      <Typography sx={{ fontSize: 13, mb: 3, color: "#333" }}>
        All resumes submitted to the platform, allowing administrators or
        recruiters to efficiently view, search, filter, and manage candidate
        profiles. It provides a quick overview of available candidates and
        their key details, making the recruitment and candidate-selection
        process more organized and efficient.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <TextField
          size="small"
          placeholder="Search Candidate by their Job Roles"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: 320 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <TableContainer component={Paper} elevation={0}>
        <Table size="small" aria-label="dessert nutrition table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#212529" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Dessert (100g serving)
              </TableCell>
              <TableCell align="right" sx={{ color: "white", fontWeight: "bold" }}>
                Calories
              </TableCell>
              <TableCell align="right" sx={{ color: "white", fontWeight: "bold" }}>
                Fat (g)
              </TableCell>
              <TableCell align="right" sx={{ color: "white", fontWeight: "bold" }}>
                Carbs (g)
              </TableCell>
              <TableCell align="right" sx={{ color: "white", fontWeight: "bold" }}>
                Protein (g)
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredRows.map((row) => (
              <TableRow
                key={row.name}
                hover
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}

            {filteredRows.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Saved;