```mermaid
    sequenceDiagram
        participant Browser
        participant Server

        Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
        Note right of Server: Server processes the form data and adds a new note to the notes array.
        Server-->>Browser: HTTP 201 Created
```