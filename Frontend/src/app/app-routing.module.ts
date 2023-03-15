import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivedNotesComponent } from './components/archived-notes/archived-notes.component';
import { Create_noteComponent } from './components/create_note/create_note.component';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch:'full'},
  { path: 'createNote', component: Create_noteComponent },
  { path: 'editNote/:id/:pagina', component: Create_noteComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'archivedNotes', component: ArchivedNotesComponent },
  { path: '**', redirectTo: 'notes', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
