import { Component, OnInit } from '@angular/core';
import { DataService } from '../../app/service/data.service';
import { Observable } from 'rxjs';
import { Meme } from 'src/util/interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  memes$: Observable<Meme[]>;

  constructor(private data: DataService) { 
    this.memes$ = this.data.getMemes();
    this.memes$.subscribe(res => {
      console.log(res);
    })

  }

  ngOnInit(): void {
  }

}
