import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  template: '',
})
export class RedirectComponent implements OnInit {
  ngOnInit(): void {
    window.location.href = 'https://projetos-na-porteira.web.app/em-breve/';
  }
}
