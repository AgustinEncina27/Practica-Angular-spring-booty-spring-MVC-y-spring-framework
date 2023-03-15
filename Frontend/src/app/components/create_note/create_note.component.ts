import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Notes } from 'src/app/models/notes';
import { NoteService } from 'src/app/service/note.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create_note',
  templateUrl: './create_note.component.html',
  styleUrls: ['./create_note.component.css']
})
export class Create_noteComponent implements OnInit {
  form: FormGroup;
  titulo='Create Notes';
  index:string;
  pagina:string;
  listNotes: Notes[];
  constructor(private fb: FormBuilder,
     private _noteService: NoteService,
     private router: Router,
     private aRouter: ActivatedRoute,
     private toastr: ToastrService ){
    this.form= this.fb.group({
      title: ['', Validators.required],
      content:['', Validators.required]
    })
    this.index= this.aRouter.snapshot.paramMap.get('id')!;
    this.pagina=this.aRouter.snapshot.paramMap.get('pagina')!;
    this.listNotes=[];
  }
  
  ngOnInit(): void {
    this.esEditar();
  }

  addNote(){
    if(this.index!==null){
      const note = this.listNotes[parseInt(this.index,10)];
      console.log(note);
      note.title= this.form.get('title')?.value;
      note.content= this.form.get('content')?.value;
      console.log(note);
      this._noteService.updateNote(note).subscribe(resp=>{
        if(resp){
          if(this.pagina=="note"){
            this.toastr.success('The note was edited', 'Success',{timeOut: 1500,});
            this.router.navigate(['/notes']);
          }else{
            this.toastr.success('The note was edited', 'Success',{timeOut: 1500,});
            this.router.navigate(['/archivedNotes']);
          }
        }
      });
    }else{
    const note: Notes={
      _id:0,
      title: this.form.get('title')?.value,
      content:this.form.get('content')?.value,
      lastDate: new Date(),
      archived: false
    }
    console.log(note);
    this._noteService.addNote(note).subscribe(resp=>{
      if(resp){
        this.toastr.success('The note was registered', 'Success',{timeOut: 1500,});
        this.router.navigate(['/notes']);
      }
    });
    }
  }

  esEditar(){
    if(this.index!==null){
      const a=parseInt(this.index,10);
      this.titulo='Edit note';
      this._noteService.getNotes().subscribe(data=>{
        this.listNotes=data;
        this.form.setValue({
          title: this.listNotes[a].title,
          content: this.listNotes[a].content
        })
      },error=>{
        console.log(error);
      }
      );

    }
  }
}
