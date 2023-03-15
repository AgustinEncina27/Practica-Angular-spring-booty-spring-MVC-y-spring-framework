package com.crud.note.Note.repository;
import java.util.List;

import com.crud.note.Note.model.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class NoteRepository implements INotesRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Override
    public List<Note> findAll() {
        String SQL="SELECT * FROM Note";
        return jdbcTemplate.query(SQL, BeanPropertyRowMapper.newInstance(Note.class));
    }

    @Override
    public int save(Note note) {
        String SQL="INSERT INTO Note (title,content,last_date,archived) VALUES(?,?,?,?)";
        return jdbcTemplate.update(SQL, new Object[]{note.getTitle(),note.getContent(),note.getLastDate(),note.isArchived(),});
    }

    @Override
    public int update(Note note) {
        System.out.println(note);
        String SQL="UPDATE Note SET title=?, content=?, last_date=?, archived=? where id=? ";
        return jdbcTemplate.update(SQL, new Object[]{note.getTitle(),note.getContent(),note.getLastDate(),note.isArchived(),note.getId()});
    }

    @Override
    public int delete(int id) {
        String SQL="DELETE FROM Note WHERE Note.id=?";
        return jdbcTemplate.update(SQL, new Object[]{id});
    }
}