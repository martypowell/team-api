var restify = require('restify');
var team = require('./teams');
var restifyBodyParser = require('restify-plugins').bodyParser;

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();

server.use(restifyBodyParser());
server.pre(restify.plugins.pre.userAgentConnection());

server.get('/teams', function(req, res, next) {
  res.send(team.GetTeams());
  next();
});

server.post('/teams', function(req, res, next) {
  var isSuccess = team.AddTeam(req.body.name);
  res.send('Team number: ' + isSuccess + "was added, great job");
  next();
});

server.get('/teams/:id', function(req, res, next) {
  var teamName = team.GetTeamById(req.params.id);
  res.send(teamName);
  next();
});

server.listen(1919, function() {
  console.log('%s listening at %s', server.name, server.url);
});