import { Component } from '@angular/core';
//import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  note = {id:null,title:null,description:null};
  show_form = false;
  editing = false;

  my_notes = [
    {id:1,title:"nota 1", description:"descripcion 1"},
    {id:2,title:"nota 2", description:"descripcion 2"},
    {id:3,title:"nota 3", description:"descripcion 3"},
    {id:4,title:"nota 4", description:"descripcion 4"}    
  ];
  
  //items:FirebaseListObservable<any[]>;
  /*constructor (afDB: AngularFireDatabase){
    this.items = afDB.list('/notas');
  }*/

  addNote(){
    this.show_form = true;
    this.editing = false; 
    this.note = {id:null,title:null,description:null};
  }
  cancel(){
    this.show_form = false;  
  }

  createNote(){
    if (this.editing) {
      var me = this;
      this.my_notes.forEach(function(el,i){
        if(el.id === me.note.id){
          me.my_notes[i] = me.note;
        }
      });
      this.show_form = false;
    } else {
      this.note.id = Date.now();
      this.my_notes.push(this.note);
      this.show_form = false; 
      this.note = {id:null,title:null,description:null};
    }  
  }

  viewNota(n){
    this.editing = true;
    this.note = n;
    this.show_form = true;  
  }

  delete(){
    var me = this;
    this.my_notes.forEach(function(el,i){
      if(el.id === me.note.id){
        me.my_notes.splice(1,1);
      }      
    });
    this.show_form = false;
  }
}
