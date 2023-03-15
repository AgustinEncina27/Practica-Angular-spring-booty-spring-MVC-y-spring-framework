package com.crud.note.Note.service;

import com.crud.note.Note.model.Note;
import java.util.List;

public interface INoteService {
    public List<Note> findAll();
    public int save(Note note);
    public int update(Note note);
    public int delete(int id);
}

