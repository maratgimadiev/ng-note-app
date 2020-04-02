import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { INote } from "@models";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class NotesService {
  constructor(private http: HttpClient) {}

  getAllNotes(): Observable<INote[]> {
    return this.http.get<INote[]>(`${environment.apiUrl}/notes`);
  }

  getNoteById(id: number): Observable<INote> {
    return this.http.get<INote>(`${environment.apiUrl}/notes/${id}`);
  }

  createNote(name: string, description: string): Observable<INote> {
    return this.http.post<INote>(`${environment.apiUrl}/notes`, {
      name,
      description
    });
  }

  editNote(data: {
    id: number;
    name: string;
    description: string;
  }): Observable<INote> {
    return this.http.put<INote>(`${environment.apiUrl}/notes/${data.id}`, {
      name: data.name,
      description: data.description
    });
  }

  removeNoteById(id: number): Observable<INote> {
    return this.http.delete<INote>(`${environment.apiUrl}/notes/${id}`);
  }
}
