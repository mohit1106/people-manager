import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService, Person } from '../people.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {
  person: Person | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.peopleService.getPerson(id).subscribe(data => {
      this.person = data;
    });
  }

  confirmDelete(): void {
    if (this.person) {
      this.peopleService.deletePerson(this.person.id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}