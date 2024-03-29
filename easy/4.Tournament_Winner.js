/* 
There's an algorithms tournament taking place in which teams of programmers compete against each other to solve
algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other
teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home
team, while the other teame is the away team. In each competition there's always one winner and one loser; there
are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that
receives the most amount of points.

Given an array of pairs representing the teams that have competed against each other and an array containing the
results of each competition, write a function that returns the winner of the tournament. The input arrays are named
`competitions` and `results`, respectively. The `competitions` array has elements in the form of 
`[homeTeam, awayTeam]`, where each team is a string of at most 30 characters representing the name of the team. the 
`results` array contains information about the winner of `competitions[i]`, where a `1` in the `results` array
means that the home team in the corresponding competition won and `0` means that the away theam won.

It's guaranteed that exactly one team will win and each team will cpmpete against all other teams exactly once. It's 
also guarantedd that the tournament will always have at least two teams.
*/

// O(n) time | O(k) space where n is the number of competitons and k is the number of teams
function tournamentWinner(competitions, results) {
    // Write your code here.
    const HOME_TEAM_WON = 1;
    let currentBestTeam = '';
    const scores = {[currentBestTeam]: 0};
    for (let i=0; i< competitions.length; i++){
      const result = results[i];
      console.log('result:' ,result);
      const [homeTeam, awayTeam] = competitions[i];
      const winTeam = result === HOME_TEAM_WON?homeTeam: awayTeam;
      updateScores(winTeam, scores, 3);
      if (scores[winTeam] > scores[currentBestTeam]){
        currentBestTeam = winTeam;
      }
    }
    function updateScores(team, scores, points){
      if(!(team in scores)){
        scores[team]=0;
        console.log("scores", scores);
      }
      scores[team] += points;
    }
    return currentBestTeam;
  }
  
tournamentWinner([
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
], [0, 0, 1]);
  // Do not edit the line below.
  // exports.tournamentWinner = tournamentWinner;