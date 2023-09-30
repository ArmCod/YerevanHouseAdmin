import React from 'react';
import Modal from "@mui/material/Modal";
import { Box, DialogActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    height: 100,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const DeleteModal = ({ open, setOpen, id, action }) => {

    const dispatch = useDispatch()
    const handleDelete = () => {
        setOpen(false)
        dispatch(action(id))
    }

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Ջնջել
                </Typography>
                <DialogActions>
                    <Button color="error" variant="contained" onClick={() => setOpen(false)}>
                        Ոչ
                    </Button>
                    <Button color="secondary" variant="contained" onClick={handleDelete}>
                        Այո
                    </Button>
                </DialogActions>
            </Box>
        </Modal>
    );
};

export default DeleteModal;