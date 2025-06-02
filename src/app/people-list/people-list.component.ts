import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from '../people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  editPerson(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number): void {
    this.router.navigate(['/delete', id]);
  }
}