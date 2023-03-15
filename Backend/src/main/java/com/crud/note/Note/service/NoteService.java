package com.crud.note.Note.service;
import com.crud.note.Note.model.Note;
import com.crud.note.Note.repository.INotesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService implements INoteService{
    @Autowired
    private INotesRepository iNotesRepository;

    @Override
    public List<Note> findAll() {
        List<Note> list;
        try {
            list= iNotesRepository.findAll();
            System.out.println(list);
        }catch (Exception ex){
            throw ex;
        }
        return list;
    }

    @Override
    public int save(Note note) {
        int row;
        try {
            row= iNotesRepository.save(note);
        }catch (Exception ex){
            throw ex;
        }
        return row;
    }

    @Override
    public int update(Note note) {
        int row;
        try {
            row= iNotesRepository.update(note);
        }catch (Exception ex){
            throw ex;
        }
        return row;
    }

    @Override
    public int delete(int id) {
        int row;
        try {
            row= iNotesRepository.delete(id);
        }catch (Exception ex){
            throw ex;
        }
        return row;
    }
}