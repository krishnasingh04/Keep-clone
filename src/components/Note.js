import React, { useState } from 'react';

const Note = ({ note, onDelete, onEdit, theme }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(note.id, { title, content });
        setIsEditing(false);
    };

    return (
        <div className={`card mb-3 ${theme}`}>
            <div className="card-body">
                {isEditing ? (
                    <>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
                        <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                    </>
                ) : (
                    <>
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.content}</p>
                        <button className="btn btn-primary me-2" onClick={handleEdit}>Edit</button>
                        <button className="btn btn-danger" onClick={() => onDelete(note.id)}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Note;


