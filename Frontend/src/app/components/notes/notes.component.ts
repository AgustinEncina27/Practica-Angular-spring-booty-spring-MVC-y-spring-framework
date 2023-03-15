import {Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/models/notes';
import { NoteService } from 'src/app/service/note.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  listNotes: Notes[];
  index:number;
 
  constructor( private _noteServide: NoteService,private modal:NgbModal,
    private toastr: ToastrService){
    this.index=0;
    this.listNotes=[];
    }

  ngOnInit(): void {
    this.CargarNotas(); 

  }



  //Add list notes
  CargarNotas(){
    this._noteServide.getNotes().subscribe(data=>{
      this.listNotes=data;
    },error=>{
      console.log(error);
    }
    );
  }

  //Change archived value true o false
  updateArchived(index:number){
    const note= this.listNotes[index];
    note.archived=true;
    console.log(note._id);
    console.log(note.title);
    console.log(note.content);
    console.log(note.lastDate);
    console.log(note.archived);
    this._noteServide.updateNote(note).subscribe(resp=>{
      if(resp){
        this.toastr.info('The note was archived', 'Success',{timeOut: 1500,});
        this.CargarNotas();
      }
    },error=>{
      console.log(error);
    });
  }

  //Delete Note
  deleteNote(){
    const note = this.listNotes[this.index];
    this._noteServide.removedNotes(note).subscribe(resp=>{
     if(resp){
        this.toastr.error('The note was removed', 'Success',{timeOut: 1500,});
        this.CargarNotas();
      }
    },error=>{
      console.log(error);
    });
  }


  //Save index list
  setIndex(index:number){
    this.index=index;
  }

  //Open Modal
  openSM(contenido:any){
    this.modal.open(contenido,{size:'sm'});
  }
 

}
