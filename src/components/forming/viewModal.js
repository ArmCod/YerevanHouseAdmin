import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { format, isValid } from "date-fns";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 500,
    overflow: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column'
};

const FormingViewModal = ({ openAdd, setOpenAdd, row, }) => {

    return (
        <div>
            <Modal
                open={openAdd}
                onClose={() => setOpenAdd(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {row && <Box sx={style} >
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Կարգավիճակ - {row?.status === 1 ? <span style={{ backgroundColor: 'yellow' }}>Վճարված է</span> : 'Վճարված չէ'}</h3>
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Պատվերի id - {row?.ordernumber}</h3>
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Սկիզբ - {isValid(new Date(row?.start)) && format(new Date(row?.start), 'MM/dd/yyyy HH:mm')}</h3>
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Վերջ - {isValid(new Date(row?.end)) && format(new Date(row?.end), 'MM/dd/yyyy HH:mm')}</h3>
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Անուն - {row?.first_name}</h3>
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Ազգանուն - {row?.last_name}</h3>
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Էլ․ հասցե - {row?.email}</h3>
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Հեռախոսհամար - {row?.phone}</h3>
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Վճարողի էլ․ հասցե - {row?.payeremail}</h3>
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Երկրորդ հեռախոսհամար - {row?.second_phone} </h3>
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Գինը - {row?.price} Դ</h3>
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Մահճակալ - {row?.bed} </h3>
                    <h3 mt={1} mb={1} style={{ display: 'inline', margin: '10px 0' }}>Անձանց քանակ - {row?.people} </h3>
                </Box>}
            </Modal>
        </div>
    );
}

export default FormingViewModal;