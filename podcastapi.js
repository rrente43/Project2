var letListenKey = '580ea5feb67a4de59aacf4a5ff6bd76b'

const unirest = require('unirest');

const response = unirest.get('https://listen-api.listennotes.com/api/v2/search?q=star%20wars&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1390190241000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=1')
  .header('X-ListenAPI-Key', letListenKey).end(function(result)
  {console.log(JSON.stringify(result.body, null, 4));
})
  
// response.toJSON();

