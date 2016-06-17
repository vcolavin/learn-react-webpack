import React from 'react';

import Note from './Note';

export default ({notes, ...props}) => (
  <ul>{notes.map(note =>
    <li key={note.id}>
      <Note task={note.task} />
    </li>
  )}</ul>
);