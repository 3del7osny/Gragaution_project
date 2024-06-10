import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent  implements OnInit {

  players: any = [];
  searchTerm: string = '';

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  searchPlayer() {
    this.playerService.getPlayer(this.searchTerm).subscribe(player => {
      // Clears old data
      this.players = [];
      // Checks if a player was found
      if(player) {
        // Adds the found player to players array
        this.players.push(player);
      }

    });
  }
}
