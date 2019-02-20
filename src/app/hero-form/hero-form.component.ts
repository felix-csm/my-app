import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model: Hero;

  submitted = false;

  ngOnInit() {
    this.model = new Hero(0, '', '');
  }

  constructor(private heroService: HeroService, private router: Router) { }

  onSubmit() {
        this.add(this.model);
  }

  newHero() {
    this.model = new Hero(0, '', '');
  }

  add(hero: Hero): void {
    this.heroService.addHero(hero)
      .subscribe(() => {
        this.submitted = true;
        this.router.navigate(['/heroes']);
      });
  }
}
