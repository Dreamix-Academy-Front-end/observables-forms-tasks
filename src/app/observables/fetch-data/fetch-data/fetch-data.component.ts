import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { debounceTime, forkJoin, Observable, switchMap } from 'rxjs';
import { Post, User } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fetch-data',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fetch-data.component.html',
  styleUrl: './fetch-data.component.scss'
})
export class FetchDataComponent {
  users: User[] = [];
  posts: Post[] = [];
  searchResults: User[] = [];
  loading: boolean = false;
  searchControl = new FormControl();
  errorMessage: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchUsers();
    this.setupSearchDebounce();
    this.fetchUsersAndPosts();
  }

  // Task 2: Fetch users from the API
  fetchUsers() {
    this.dataService.getUsers().subscribe({
      next: (data: User[]) => this.users = data,
      error: (err) => this.errorMessage = err
    });
  }

  // Task 3: Debounced search input
  setupSearchDebounce() {
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      switchMap(searchTerm => this.mockSearchAPI(searchTerm))
    ).subscribe(results => {
      this.searchResults = results;
      this.loading = false;
    });
  }

  // Simulated API search for Task 3
  mockSearchAPI(searchTerm: string): Observable<User[]> {
    this.loading = true;
    return this.dataService.getUsers().pipe(
      switchMap(users => {
        return new Observable<User[]>(observer => {
          const filteredUsers = users.filter((user: User) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          observer.next(filteredUsers);
          observer.complete();
        });
      })
    );
  }

  // Task 4: Fetch users and posts using forkJoin
  fetchUsersAndPosts() {
    forkJoin({
      users: this.dataService.getUsers(),
      posts: this.dataService.getPosts()
    }).subscribe({
      next: (result) => {
        this.users = result.users;
        this.posts = result.posts;
      },
      error: (err) => this.errorMessage = err
    });
  }
}
