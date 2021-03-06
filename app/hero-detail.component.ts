import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit{
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }

    @Input()
    hero: Hero;
}