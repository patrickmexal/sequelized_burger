
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(bodyParser.urlencoded({ extended: false}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
// parse application/json
app.use(express.static("app/public"));

// Routes

require("./app/routes/api_routes.js")(app);

require(".app/routes/html_routes.js")(app);

// server listener
app.listen(PORT, function() {
	console.log("App listening on PORT" + PORT);
});
