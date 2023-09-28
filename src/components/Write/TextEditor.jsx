import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'align',
]

const TextEditor = () => {
    // const editorRef = useRef(null);
    const [open, setOpen] = useState(true);
    const [value, setValue] = useState('');

    const handleClose = () => setOpen(false);

    const publish = () => console.log(value);

    const autoSave = (value) => {
        if (value) {
            if (value.length > 0) {
                console.log('Saving changes...');
                localStorage.setItem('article', JSON.stringify(value));
            }
        }
    };

    return (
        <>
            <Dialog open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                disableEscapeKeyDown={true}
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle>Article Fields</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Changes here will affect how your article appears in public
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Title"
                        label="Title"
                        type="text"
                        fullWidth
                        sx={{ marginBottom: "1rem" }}
                        variant="outlined"
                    />
                    <TextField
                        id="Description"
                        label="Description"
                        multiline
                        fullWidth
                        rows={4}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { }}>Save</Button>
                </DialogActions>
            </Dialog>
            <div className="top-150">
                <div className="container">
                    <Button sx={{ marginBottom: '1rem' }} onClick={publish} variant="contained" color="success" endIcon={<LanguageIcon />}>
                        Publish
                    </Button>
                    <ReactQuill theme="snow" placeholder='Write your story...' value={value} onKeyPress={autoSave(value)} onChange={setValue} modules={modules} formats={formats} />
                </div>
            </div>
        </>
    )
}

export default TextEditor