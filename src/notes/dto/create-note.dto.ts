import { IsString } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly content: string;
}
