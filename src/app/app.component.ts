import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IUser } from './models/User';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'loginForm';
  id: number = 0;
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';




  users: IUser[] =
    [{ id: 1, firstname: 'Mouhamed', lastname: 'Fall', email: 'fallmouhamedkhairy@gmail.com', password: 'passe' },
    { id: 2, firstname: 'Fanta', lastname: 'Barro', email: 'fanta@gmail.com', password: 'passe' },
    { id: 3, firstname: 'Marie', lastname: 'Kamara', email: 'kamara@gmail.com', password: 'passe' },
    { id: 4, firstname: 'Jean', lastname: 'Royal', email: 'royal@gmail.com', password: 'passe' }
    ]

  isSubmitted: boolean = false
  isAuthenticated: boolean = false

  showTable: IUser [] = []



  onSubmit(loginForm: NgForm) {
    this.isSubmitted = true

    if (loginForm.value.email.trim() === '' || loginForm.value.password.trim() === '') {
      return;
    }

    const userExist = this.users.find((u) => u.email === loginForm.value.email
      && u.password === loginForm.value.password);

    if (userExist) {
      this.showTable.push(userExist)
      this.isAuthenticated = true;
    }
     else {
      this.isAuthenticated = false;
    }
  }
  
}
