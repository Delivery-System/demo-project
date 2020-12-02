// built-in module
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// custom module

@Component({
  selector: 'app-dummy-login',
  templateUrl: './dummy-login.component.html',
  styleUrls: ['./dummy-login.component.scss']
})
export class DummyLoginComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private route:Router ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.queryParams.data) {
      localStorage.removeItem('admin-token');
      const token = JSON.parse(
        decodeURIComponent(this.activatedRoute.snapshot.queryParams.data).toString()
    );
    console.log(token);
    localStorage.setItem('admin-token', token);
    this.route.navigate(['dashboard']);
    }
  }

}
