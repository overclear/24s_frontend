"use client";
import { Grid, Box, IconButton, FormControl, TextField } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { Delete, Edit } from "@mui/icons-material";

import optionTableDefault from "../utils/optionTableDefault";

export default function Home() {
    return (
        <div className="container my-5">
            <Box sx={{ bgcolor: "white", borderRadius: "10px", my: "2rem", p: "2rem" }}>
                <Grid container>
                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <TextField label="user's name" variant="outlined" />
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
                        <MaterialReactTable
                            {...optionTableDefault()}
                            data={[...Array(19)].map((_, idx) => ({
                                name: "test name",
                                age: 20 + idx,
                                email: `test${idx}@mail.com`,
                                avatarUrl: `avatar ${idx}`,
                            }))}
                            columns={[
                                { accessorKey: "name", header: "ชื่อ" },
                                { accessorKey: "age", header: "อายุ" },
                                { accessorKey: "email", header: "อีเมล" },
                                {
                                    accessorKey: "avatarUrl",
                                    header: "รูป",
                                    Cell: ({ row }) => (
                                        <>
                                            <img
                                                src="https://boostech.co/assets-img/default.png"
                                                width={64}
                                                height={64}
                                                alt=""
                                            ></img>
                                        </>
                                    ),
                                },
                            ]}
                            enableRowActions
                            renderRowActions={({ cell, row, table }) => {
                                return (
                                    <Box sx={{ display: { xs: "block", lg: "flex" } }}>
                                        <IconButton color="primary" sx={{ margin: 0.5, border: 1 }} size="small">
                                            <Edit />
                                        </IconButton>
                                        <IconButton sx={{ margin: 0.5, border: 1 }} color="error" size="small">
                                            <Delete />
                                        </IconButton>
                                    </Box>
                                );
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
