import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService, Person } from '../people.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  person: Person = { id: 0, name: '', email: '' };

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

  save(): void {
    this.peopleService.updatePerson(this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}