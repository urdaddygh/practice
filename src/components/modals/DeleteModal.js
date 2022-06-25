import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButtonForActiveChanges from "../buttonForActiveChanges/ButtonForActiveChanges";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 530,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    borderRadius: 10,
    padding: "50px 43px"
};
const title = {
    fontWeight: 500,
    fontSize: 22,
    lineHeight: "26px",
    textAlign: "center",
}

export default function DeleteModal({open, handleClose, text}) {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" sx={title} variant="h6" component="h2">
                        {text}
                    </Typography>
                    <div className="flex">
                        <ButtonForActiveChanges classname="yes_button" margin="68px 0 0" width="210px" text="ДА" />
                        <ButtonForActiveChanges classname="no_button" margin="68px 0 0" width="210px" text="НЕТ"/>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
