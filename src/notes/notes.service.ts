import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  private _notes = [{ id: 1, content: 'Hekko Boolochka!' }];

  create(createNoteDto: CreateNoteDto) {
    const { content } = createNoteDto;

    const note = {
      id: this._notes.length + 1,
      content,
    };

    this._notes.push(note);

    return note;
  }

  findAll() {
    return this._notes;
  }

  findOne(id: number) {
    const note = this._notes.find((note) => note.id === id);
    return note;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    const note = this.findOne(id);

    if (!note) {
      throw new Error('Note not found');
    }

    const { content } = updateNoteDto;

    note.content = content;

    return note;
  }

  remove(id: number) {
    this._notes = this._notes.filter((note) => note.id != id);
    return `Note ${id} was removed`;
  }
}
