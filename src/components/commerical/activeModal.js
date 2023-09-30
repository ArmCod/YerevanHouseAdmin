import React from 'react';
import Modal from "@mui/material/Modal";
import { Box, DialogActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';
import { FlatPut } from '../../store/actions/flatAction';

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

const ActiveModal = ({ open, setOpen, row }) => {

    const dispatch = useDispatch()
    const handleDelete = () => {
        setOpen(false)
        if (row?.active === 1) {
            dispatch(FlatPut({ ...row, acive: 0 }))
        } else {
            dispatch(FlatPut({ ...row, acive: 1 }))
        }
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
                    {row?.active === 1 ? 'Անջատել' : 'Միացնել'}
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

export default ActiveModal;