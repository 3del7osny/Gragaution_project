import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private players: Array<{name: string, description: string, image: string ,}> = [
   // Men's Tennis
  {
    name: 'Novak Djokovic',
    description: 'a Serbian professional tennis player who is currently ranked world No. 1 in singles by the Association of Tennis Professionals (ATP). Djokovic has been ranked No. 1 for a record total of 427 weeks in a record 13 different years, and finished as the year-end No. 1 a record eight times.',
    image: '../../assets/image/Novak_Djoković.jpg'
  },
  {
    name: 'Rafael Nadal',
    description: 'Rafael Nadal, born 3 June 1986, is a Spanish professional tennis player currently ranked world No. 5 by the Association of Tennis Professionals (ATP). Nadal has the most clay court titles in the Open Era (61), and holds an all-time record of 13 French Open titles, 7 Italian Open titles, and 6 Davis Cup titles with Spain. He has won a total of 20 Grand Slam singles titles, including Australian Open (1), French Open (13), Wimbledon (2), and US Open (4). Nadal has a storied rivalry with another professional tennis player, Roger Federer. Together, they have dominated the sport for a significant period of time, producing some classic matches.In his most recent match available as per the data, Nadal played against A. Zverev in the first round of the tournament at Philippe-Chatrier. Zverev won the match with the score of 6-3, 7-6, 6-3 against Nadal.Nadal is also known for his sportsmanship and charity work. He founded the Rafael Nadal Foundation which aims to empower young people through education in Spain.',
    image: '../../assets/image/Rafael Nadal.jpg'
  },
  {
    name: 'Roger Federer',
    description: 'a Swiss former professional tennis player. He was born on August 8, 1981, in Basel, Switzerland. Federer was ranked world No. 1 in singles by the Association of Tennis Professionals (ATP) for 310 weeks, which includes a record 237 consecutive weeks. He has also finished as the year-end No. 1 five times.He has won a total of 20 Grand Slam singles titles — a record shared with Rafael Nadal. His Grand Slam wins include Australian Open (6), French Open (1), Wimbledon (8), and US Open (5).Federer is known for his versatile and intelligent playing style. He has excellent footwork and uses a wide variety of shots to defeat his opponents.',
    image: '../../assets/image/Roger Federer.jpg'
  },
  {
    name: 'Andy Murray',
    description: 'full name Sir Andrew Barron Murray OBE, is a British professional tennis player born on 15 May 1987. He was ranked as the world No. 1 in singles by the Association of Tennis Professionals (ATP), reaching the peak of his career so far in terms of ranking.Throughout his illustrious career, he has won several significant titles in tennis. His achievements include winning three Grand Slam tournaments, two Olympic gold medals, an ATP Tour Finals, and being a critical part of the British team that won the Davis Cup. Murray has won the Wimbledon championships twice, making him a national hero in the UK, especially given the long wait for a British champion in the famed tournament before his win. His playing style is versatile, with a focus on defensive baseline play. Murray has made comebacks from various injury-related challenges throughout his career, each time returning to professional play to the excitement of his many fans worldwide.He is also well-regarded for his advocacy towards equal prize money for men and women in tennis and is often vocal about gender equality issues within sport.',
    image: '../../assets/image/Andy Murray.jpg'
  },
  {
    name: 'Daniil Medvedev',
    description: 'born 11 February 1996, is a professional tennis player from Russia. He has achieved a high ranking in the ATP s singles rankings, reaching up to the 5th spot. This ranking signifies his skill and reputation in the sport globally.In the recent matches data available, Medvedev has portrayed considerable prowess on the court. Lets take a look at his last four games: On Mon, Jun 3, in the Fourth round on court 11, Medvedev played against A.de Minaur. The result of this match isnt available at the moment. On Tue, Jun 4, in the Third round on Court Suzanne Lenglen, he played against T. Machac. Medvedev won this match with sets score: 7+7, 7, 1, 6.  On Thu, May 30, in the Second round on Court Suzanne Lenglen, he played against M. Kecmanović. The result of this match isnt fully available due to incomplete data.On Mon, May 27, in the First round on Court Simonne-Mathieu, he played against D. Koepfer. Medvedev triumphed in this match with sets score: 6, 6, 5, 6.',
    image: '../../assets/image/Daniil Medvedev.jpg'
  },
  {
    name: 'Carlos Alcaraz',
    description: "born 5 May 2003, is a professional tennis player from Spain. At the young age of just 20 years, he has managed to make a significant impact on the professional tennis circuit, achieving a high ranking of 3rd spot as per the ATP's singles rankings.Here is a recap of his last four matches:  Tomorrow, he is set to face F. Auger-Aliassime (ranked 21st) in the Fourth round at Philippe-Chatrier  Yesterday, he played against S. Korda (ranked 27th) during the Third round at Philippe-Chatrier. Alcaraz won the match with set scores 6, 7+7 and 6 against 4, 6+5, and 3.  On Wed, May 29, during the Second round at Philippe-Chatrier, he matched up against J. De Jong. Alcaraz won this bout, with set scores being 6, 6, 2, 6 against 3, 4, 6, 2. On Sun, May 26, in the First round at Philippe-Chatrier, he played J.J. Wolf. He achieved an impressive victory with set scores of 6, 6, and 6 against 1, 2, and 1.",
    image: '../../assets/image/Carlos Alcaraz.jpeg'
  },
  {
    name: 'Jannik Sinner',
    description: " a professional tennis player hailing from Italy. He was born on August 16, 2001. Notably, Sinner has achieved the impressive 2nd spot in the ATP's singles rankings, which is a testament to his exceptional performance on the tennis court.Here is a snapshot of Sinner's last four matches: Jannik Sinner is due to compete against C. Moutet in the Fourth round at Philippe-Chatrier tomorrow. Yesterday, in the Third round at Philippe-Chatrier, Sinner was victorious over P. Kotov. The set scores were 6, 6, and 6 for Sinner versus 4, 4, and 4 for Kotov. On Wed, May 29, during the Second round at Philippe-Chatrier, Jannik Sinner took on R. Gasquet. Sinner won this match with set scores of 6, 6, and 6, compared to 4, 2, and 4 in favor of Gasquet.  On Mon, May 27, in the First round at Court Suzanne Lenglen, Sinner faced C. Eubanks. Jannik emerged as the winner, scoring 6, 6, and 6 sets against 3, 3, and 4 sets by Eubanks.",
    image: '../../assets/image/Jannik Sinner.jpg'
  },

];
// public searchPlayersByFirstName(firstName: string): Array<{name: string; description: string; image: string}> {
//   return this.players.filter(player => player.name.split(' ')[0].toLowerCase() === firstName.toLowerCase());
// }
  constructor() { }

  //Mock search function to get player by name
  getPlayer(name: string): Observable<any> {
    const player = this.players.find(p => p.name === name);

    return of(player);
  }
}
