/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import {
  HttpTestingController,
  HttpClientTestingModule
} from "@angular/common/http/testing";
import { environment } from "src/environments/environment";
import { NotesService } from "./notes.service";
import { INote } from "@models";

describe("Service: Notes", () => {
  let notesService: NotesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NotesService]
    });

    // inject the service
    notesService = TestBed.get(NotesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it("get notes should retrieve correct data", () => {
    const mockResponse: INote[] = [
      {
        id: 1,
        name: "Note 1",
        description: "123"
      },
      {
        id: 2,
        name: "Note 2",
        description: "123"
      }
    ];

    notesService.getAllNotes().subscribe((res: INote[]) => {
      expect(res.length).toBe(2);
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/notes`,
      "GET ALL Notes"
    );
    expect(req.request.method).toBe("GET");

    req.flush(mockResponse);
  });

  it("get note by id should retrieve correct data", () => {
    const mockResponse: INote = {
      id: 1,
      name: "Note 1",
      description: "123"
    };
    notesService.getNoteById(1).subscribe((res: INote) => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/notes/1`,
      "GET NOTE BY ID"
    );
    expect(req.request.method).toBe("GET");

    req.flush(mockResponse);
  });

  it("get note by id with non existing id should throw error", () => {
    notesService.getNoteById(2).subscribe(
      () => {},
      err => {
        expect(err.status).toBe(404);
      }
    );

    const req = httpMock.expectOne(
      `${environment.apiUrl}/notes/2`,
      "GET NOTE BY ID"
    );
    expect(req.request.method).toBe("GET");

    req.error(null, { status: 404 });
  });

  it("edit note should put the correct data", () => {
    const mockResponse: INote = {
      id: 1,
      name: "Note 1",
      description: "123"
    };

    notesService.editNote({ ...mockResponse }).subscribe((res: INote) => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/notes/${mockResponse.id}`,
      "EDIT Note"
    );
    expect(req.request.method).toBe("PUT");

    req.flush(mockResponse);
  });
});
