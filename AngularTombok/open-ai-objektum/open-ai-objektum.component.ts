import { Component } from '@angular/core';

@Component({
  selector: 'app-open-ai-objektum',
  templateUrl: './open-ai-objektum.component.html',
  styleUrls: ['./open-ai-objektum.component.css']
})
export class OpenAiObjektumComponent {
  users: Adat[] = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      age: 25
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      age: 32
    },
    {
      id: 3,
      name: "Tom Johnson",
      email: "tomjohnson@example.com",
      age: 28
    }
  ];

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}

export interface Adat {
  id: number;
  name: string;
  email: string;
  age: number;
}
