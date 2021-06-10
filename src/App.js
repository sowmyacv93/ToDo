import Header from "./components/header";
import CustomCard from "./card/CustomCard";
import { Container, Grid,Typography } from "@material-ui/core";
import FormDialog from "./components/FormDialog";
import { useState } from "react";
import { ImportExport } from "@material-ui/icons";
import  React , {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./jwt/HomePage";
import Login from "./jwt/LoginPage";
import AddDocumentForm from "./LocalStorage/AddDocument";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const noteData = [
  {
    id:1,
    title: "Lorem ipsum dolor sit amet",
    details:"loream ipsum",
  },
  {
    id:2,
    title: "Lorem ipsum dolor sit amet",
    details:"loream ipsum",
  },
  {
    id:3,
    title: "Lorem ipsum dolor sit amet",
    details:"loream ipsum",
  },
  {
    id:4,
    title: "Lorem ipsum dolor sit amet",
    details:"loream ipsum",
  },
  {
    id:5,
    title: "Lorem ipsum dolor sit amet",
    details:"loream ipsum",
  },
  {
    id:6,
    title: "Lorem ipsum dolor sit amet",
    details:"loream ipsum",
  },

];

function App() {
  const [notes, setNotes] =  useState([]);

  const handleAddNote = (title,details) =>{
    console.log('Title:', title);
    const newNote = { id:Math.random(),title:title,details:details};
    const newNoteData = notes.concat(newNote);
    setNotes(newNoteData);
  }
  const handleDeleteNote = (id)=>{
    console.log("note id:",id);
    const newNoteData=notes.filter((item)=>item.id!==id);
    setNotes(newNoteData);

  }
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/signin' exact={true} component={Login}/>
        </Switch>
      </Router>
      <Header/>
      <Container>
        <Grid container spacing={3}>
        {(notes.length===0) ? (
          <div style={{width:'100%', paddingTop:200}}>
            <Typography variant="h1"  color="textSecondary" style={{textAligh:'center'}} component="p">start adding your notes here</Typography>
          </div>
        ):
          notes.map((item) =>(
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <CustomCard item={item} onDelete={handleDeleteNote}/>
          </Grid>
          ))}
        </Grid>
        <FormDialog onSubmit = {handleAddNote}/>
      </Container>
      <AddDocumentForm />
    </div>
  );
}

export default App;
