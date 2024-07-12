import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete, onEdit, theme }) => {
    return (
        <div>
            {notes.map((note) => (
                <Note key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} theme={theme} />
            ))}
        </div>
    );
};

export default NoteList;

