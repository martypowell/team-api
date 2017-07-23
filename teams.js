var Teams = (function() {
    

    var teams = [
        {id: 1, name: "Developers"},
        {id: 2, name: "Operations"},
        {id: 3, name: "Managers"},
        {id: 4, name: "Business Intelligence"},
    ];

    this.AddTeam = function(teamName) {
        var sortedTeams = teams.sort(function(teamA, teamB) {
            return teamA.id < teamB.id;
        });
        var id = sortedTeams[0].id + 1;
        teams.push({
            id: id,
            name: teamName
        });
        return id;
    };

    this.GetTeams = function() {
        return teams;
    };

    this.GetTeamById = function(id) {
        var team = teams.filter(function(obj) {
            return parseInt(id) === obj.id;
        });
        return team.length === 1 ? team[0] : {};
    };

    return this;
})();

module.exports = Teams;