package com.crud.note.Note.model;
import java.sql.Date;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name="note")
@EntityListeners(AuditingEntityListener.class)
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name = "title")
    String title;
    @Column(name = "content")
    String content;

    @Column(name = "lastDate")
    Date lastDate;

    @Column(name = "archived")
    boolean archived;

    public Note(int id, String title, String content, Date lastDate, boolean archived) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.lastDate = lastDate;
        this.archived = archived;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getLastDate() {
        return lastDate;
    }

    public void setLastDate(Date lastDate) {
        this.lastDate = lastDate;
    }

    public boolean isArchived() {
        return archived;
    }

    public void setArchived(boolean archived) {
        this.archived = archived;
    }

    public Note() {
    }

    @Override
    public String toString() {
        return "Note{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", lastDate=" + lastDate +
                ", archived=" + archived +
                '}';
    }
}
