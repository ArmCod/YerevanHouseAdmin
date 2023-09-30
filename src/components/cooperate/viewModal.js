import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 700,
    overflow: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column'
};

const CooperateViewModal = ({ openAdd, setOpenAdd, row, }) => {

    return (
        <div>
            <Modal
                open={openAdd}
                onClose={() => setOpenAdd(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {row && <Box sx={style} >
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Անուն - {row.firstname}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Ազգանուն - {row.lastname}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Էլ․ հասցե - {row.email}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Հեռախոսհամար - {row.phone}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Ստեղծվել է - {row.created_at.substring(0, 19)}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Հասցե - {row.address}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Տիպը - {row.type}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Վաճառք - {row.sale}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Գինը - {row.price} {row.currency}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Տուն - {row.house}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Շինություն - {row.building}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Տարածաշրջան - {row.region}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Քաղաք - {row.city}</h3>
                    <h3 mt={3} mb={3} style={{ display: 'inline' }}>Հարկ - {row.floor}</h3>

                </Box>}
            </Modal>
        </div>
    );
}

export default CooperateViewModal;