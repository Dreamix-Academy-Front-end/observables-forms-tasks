import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-real-time-search-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './real-time-search-form.component.html',
  styleUrl: './real-time-search-form.component.scss'
})
export class RealTimeSearchFormComponent {
  searchForm: FormGroup;
  searchResults$!: Observable<any[]>;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.searchForm = this.fb.group({
      searchTerm: ['']
    });
  }

  ngOnInit(): void {
    this.searchResults$ = this.searchForm.get('searchTerm')!.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchPosts(term))
    );
  }

  searchPosts(term: string): Observable<any[]> {
    if (!term.trim()) {
      return new Observable(observer => {
        observer.next([]);
        observer.complete();
      });
    }
    
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts`).pipe(
      map(posts => posts.filter(post => post.title.includes(term)))
    );
  }
}
