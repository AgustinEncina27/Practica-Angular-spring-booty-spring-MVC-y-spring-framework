import { Component,OnInit } from '@angular/core';
import { Notes } from 'src/app/models/notes';
import { NoteService } from 'src/app/service/note.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-archived-notes',
  templateUrl: './archived-notes.component.html',
  styleUrls: ['./archived-notes.component.css']
})
export class ArchivedNotesComponent implements OnInit {
    
  listNotes: Notes[]=[];
  index:number;
    
 
  constructor(private _noteServide: NoteService,private modal:NgbModal,
    private toastr: ToastrService){
    this.index=0;
    this.listNotes=[];
  }

  ngOnInit(): void {
    this.CargarNotas(); 
  }

  CargarNotas(){
    this._noteServide.getNotes().subscribe(resp=>{
      if(resp){
        this.listNotes=resp;
      }
    },error=>{
      console.log(error);
    });
  }

  updateArchived(index:number){
    const note= this.listNotes[index];
    note.archived=false;
    this._noteServide.updateNote(note).subscribe(resp=>{
      if(resp){
        this.toastr.info('The note was unarchived', 'Success',{timeOut: 1500,});
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
        this.toastr.error('The note was remove', 'Success',{timeOut: 1500,});
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
