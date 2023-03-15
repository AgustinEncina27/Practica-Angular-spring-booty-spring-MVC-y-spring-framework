package com.crud.note.Note.repository;

import com.crud.note.Note.model.Note;

import java.util.List;

public interface INotesRepository {
    public List<Note> findAll();
    public int save(Note note);
    public int update(Note note);
    public int delete(int id);

}
