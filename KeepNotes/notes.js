const btnElement=document.getElementById("btn");
const appElement=document.getElementById("app");


function createNoteElement(id,content)
{
 const element=document.createElement("textarea")
element.classList.add("note")
element.placeholder="Empty Note"
element.value=content
element.addEventListener
("dblclick",()=>{
 const warning=confirm("Do you Want to delete this note?")
if(warning)
{
    deleteNote(id,element)
}
})

element.addEventListener
("input",()=>
{
    updateNote(id,element.value)
})
return element;
}

function deleteNote(id,element)
{
  const notes=getNote().filter((note)=>note.id != id);
  saveNote(notes);
  appElement.removeChild(element);
}

function updateNote(id,content)
{
  const notes=getNote();
  const target=notes.filter((note)=>note.id==id)[0];
  target.content=content;
  saveNote(notes);

}

function addNote()
{
  const notes= getNote();

  const noteObj={
    id: Math.floor(Math.random()*10000000),
    content: "",
   };

  const noteEl=createNoteElement(noteObj.id,
    noteObj.content);

  appElement.insertBefore(noteEl,btnElement);

  notes.push(noteObj);
  saveNote(notes);
}

function saveNote(notes)
{
    localStorage.setItem("note-app",JSON.stringify(notes));
}

function getNote()
{
   return JSON.parse(localStorage.getItem("note-app")||
   "[]");
}
getNote().forEach((note)=>{
    const noteElement= createNoteElement(note.id,
        note.content);  
        appElement.insertBefore(noteElement,btnElement); 
    });

btnElement.addEventListener("click",addNote);