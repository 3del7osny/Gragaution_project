import { Component, OnInit } from '@angular/core';
import { GetTournament } from 'src/app/model/tournament.model';
import { SharedService } from 'src/app/services/shared.service';
import { TournamentService } from 'src/app/services/tournament.service';
import { Item } from '../../model/item/item.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  tournaments!:GetTournament[];

  constructor(private tournamentServ:TournamentService,private sharedService: SharedService){}

  ngOnInit(): void {
    this.GetTournaments()
  }

  GetTournaments()
    {
      this.tournamentServ.GetAllTournament().subscribe((tournament)=>{
        console.log(tournament);
        if(tournament.value)
        this.tournaments = tournament.value
      })
    }

    addToCart(item: Item) {
      this.sharedService.addToCart(item);
      // alert('Added to your cart!');

  // Display a success message
  const messageBox = document.createElement("div");
  messageBox.innerHTML = "Added Successfully ! :)";
  messageBox.style.backgroundColor = "#4CAF50";
  messageBox.style.color = "white";
  messageBox.style.padding = "10px";
  messageBox.style.position = "fixed";
  messageBox.style.top = "50%";
  messageBox.style.left = "50%";
  messageBox.style.transform = "translate(-50%, -50%)";
  messageBox.style.zIndex = "9999";
  document.body.appendChild(messageBox);

  // Hide the message box after 3 seconds
  setTimeout(function () {
    messageBox.style.display = "none";
  }, 1000);
  }

}
