package com.crud.note.Note.controller;

import com.crud.note.Note.model.Note;
import com.crud.note.Note.model.ServiceResponse;
import com.crud.note.Note.repository.INotesRepository;
//import com.crud.note.model.Note;
//import com.crud.note.model.ServiceResponse;
//import com.crud.note.repository.INotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/note")
public class NoteController {
    @Autowired
    private INotesRepository iNoteService;

    @GetMapping("/list")
    public ResponseEntity<List<Note>> list(){
        var result= iNoteService.findAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<ServiceResponse> save(@RequestBody Note note){
        ServiceResponse serviceResponse= new ServiceResponse();
        System.out.println(note);
        int result= iNoteService.save(note);
        if(result==1){
            serviceResponse.setMessage("Item saved with success");
        }
        return new ResponseEntity<>(serviceResponse, HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<ServiceResponse> update(@RequestBody Note note){
        ServiceResponse serviceResponse= new ServiceResponse();
        int result= iNoteService.update(note);
        if(result==1){
            serviceResponse.setMessage("Item update with success");
        }
        return new ResponseEntity<>(serviceResponse, HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<ServiceResponse> delete(@RequestBody Note note){
        ServiceResponse serviceResponse= new ServiceResponse();
        int result= iNoteService.delete(note.getId());
        if(result==1){
            serviceResponse.setMessage("Item removed with success");
        }
        return new ResponseEntity<>(serviceResponse, HttpStatus.OK);
    }
}
