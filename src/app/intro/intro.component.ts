import { Component, OnInit } from '@angular/core';

interface Drink{
  name:string
  year:number
  owner:string
}

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent  implements OnInit {
abc:String="ayk"
my_list: string[] = ["sdgsdgf", "fsgdgfgfgd"]

  drinks: Drink[] = [
  {
    name: "Мот",
    year: 19655,
    owner: "France"
  },{
    name: "Мот",
    year: 19655,
    owner: "France"
  },{
    name: "Мот",
    year: 19655,
    owner: "France"
  }
]

  constructor() { 

  }
  ngOnInit() {}
  

}
