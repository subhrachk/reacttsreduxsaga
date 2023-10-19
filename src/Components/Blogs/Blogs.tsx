import React from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { SelectBlogs } from "../Shared/Store/Blogs/BlogSlice";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

export const Blogs = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(SelectBlogs);
  const [open, setOpen] = React.useState(false);
  
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Blog
      </Button>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {blog.title}
              </Typography>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.primary"
                gutterBottom
              >
                {blog.description}
              </Typography>
            </CardContent>
          </Card>
          {/* <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New Blog</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                name="title"
                label="Title"
                fullWidth
                variant="standard"
              />
              <TextField
                id="description"
                name="description"
                label="Description"
                multiline
                rows={4}
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
          </Dialog> */}
           <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
        </div>
      ))}
    </div>
  );
};
