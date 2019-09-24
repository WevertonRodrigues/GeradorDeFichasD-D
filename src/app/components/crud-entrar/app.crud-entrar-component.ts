import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-crud-entrar',
    templateUrl: './app.crud-entrar-component.html',
    styleUrls: ['./app.crud-entrar-component.css']
})

export class CrudEntrarComponent {
    constructor(private route: ActivatedRoute, private router: Router) { } 
}
