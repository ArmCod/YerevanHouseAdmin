import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "../../utils/helpers/deletemodal";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ChatRentComponent = () => {
  const [messagesData, setMessagesData] = useState();

  useEffect(() => {
    fetch(`https://back.yerevanhouse.net/api/admin/chat/rent`)
      .then((res) => res.json())
      .then((res) => setMessagesData(res));
  }, []);

  const handleDeleteMessage = (id) => {
    fetch(`https://back.yerevanhouse.net/api/admin/chat/rent/drop?id=${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errorrrrrrrr");
        } else {
          window.location.reload(false);
        }
      })
      .catch(() => console.log("error"));
  };

  console.log(messagesData);

  return (
    <>
      <div style={{ margin: "0 0 10px 10px" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button color="secondary" variant="contained">
            Գլխավոր
          </Button>
        </Link>
      </div>
      <TableContainer component={Paper} id={"pag"}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Անուն</TableCell>
              <TableCell align="left">Էլ․ հասցե</TableCell>
              <TableCell align="left">Հեռախոսահամար</TableCell>
              <TableCell align="left">Դիալոգ</TableCell>
              <TableCell align="center">Ջնջել</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messagesData?.data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.email}</TableCell>
                <TableCell align="left">{item.number}</TableCell>
                <TableCell align="left">{item.message}</TableCell>
                <TableCell align="center">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteMessage(item.id)}
                  >
                    <DeleteIcon />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ChatRentComponent;
