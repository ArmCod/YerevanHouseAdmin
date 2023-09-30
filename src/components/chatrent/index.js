import { Button, FormControl, Input, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "../../utils/helpers/deletemodal";
import { Link } from "react-router-dom";


const ChatRentComponent = () => {




    return (
        <>
            <div style={{ margin: '0 0 10px 10px' }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button color="secondary" variant="contained">
                        Գլխավոր
                    </Button>
                </Link>
            </div>
            <TableContainer component={Paper} id={'pag'}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Անուն</TableCell>
                            <TableCell align="left">Էլ․ հասցե</TableCell>
                            <TableCell align="left">Հեռախոսահամար</TableCell>
                            <TableCell align="left">Դիալոգ</TableCell>
                            <TableCell align="center">Պատասխանված</TableCell>
                            <TableCell align="center">Ջնջել</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    </TableBody>
                </Table>



            </TableContainer >

        </>
    );
}

export default ChatRentComponent;