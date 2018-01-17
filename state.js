  <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js"></script>

<script>
$(document).ready(function() {
    $("input#autocomplete").autocomplete({
        source: [
             { value: "Alabama", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Alabama-Final.pdf' },
{ value: "Alaska", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Alaska-Final.pdf' },
{ value: "Arizona", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Arizona-Final.pdf' },
{ value: "Arkansas", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Arkansas-Final.pdf' },
{ value: "California", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Califronia-Final.pdf' },
{ value: "Connecticut", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Connecticut-Final.pdf' },
{ value: "Delaware", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Delaware-Final.pdf' },
{ value: "Washington D.C.", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/District%20of%20Columbia-Final.pdf' },
{ value: "District of Columbia", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/District%20of%20Columbia-Final.pdf' },
{ value: "Florida", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Florida-Final.pdf' },
{ value: "Georgia", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Georgia-Final.pdf' },
{ value: "Hawaii", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Hawaii-Final.pdf' },
{ value: "Idaho", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Idaho-Final.pdf' },
{ value: "Illinois", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Illinois-Final.pdf' },
{ value: "Indiana", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Indiana-Final.pdf' },
{ value: "Iowa", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Iowa-Final.pdf' },
{ value: "Kansas", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Kansas-Final.pdf' },
{ value: "Kentucky", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Kentucky-Final.pdf' },
{ value: "Louisiana", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Louisiana-Final.pdf' },
{ value: "Maine", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Maine-Final.pdf' },
{ value: "Maryland", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Maryland-Final.pdf' },
{ value: "Massachusetts", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Massachusetts-Final.pdf' },
{ value: "Michigan", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Michigan-Final.pdf' },
{ value: "Minnesota", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Minesota-Final.pdf' },
{ value: "Mississippi", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Mississippi-Final.pdf' },
{ value: "Missouri", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Missouri-Final.pdf' },
{ value: "Montana", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Montana-Final.pdf' },
{ value: "Nebraska", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Nebraska-Final.pdf' },
{ value: "Nevada", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Nevada-Final.pdf' },
{ value: "New Hampshire", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/New%20Hampshire-Final.pdf' },
{ value: "New Jersey", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/New%20Jersey-Final.pdf' },
{ value: "New Mexico", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/New%20Mexico-Final.pdf' },
{ value: "New York", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/New%20York-Final.pdf' },
{ value: "North Carolina", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/North%20Carolina-Final.pdf' },
{ value: "North Dakota", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/North%20Dakota-Final.pdf' },
{ value: "Ohio", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Ohio-Final.pdf' },
{ value: "Oklahoma", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Oklahoma-Final.pdf' },
{ value: "Oregon", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Oregon-Final.pdf' },
{ value: "Pennsylvania", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Pennsylvania-Final.pdf' },
{ value: "Puerto Rico", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Puerto%20Rico-Final.pdf' },
{ value: "Rhode Island", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Rhode%20Island-Final.pdf' },
{ value: "South Carolina", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/South%20Carolina-Final.pdf' },
{ value: "South Dakota", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/South%20Dakota-Final.pdf' },
{ value: "Tennessee", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Tennessee-Final.pdf' },
{ value: "Texas", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Texas-Final.pdf' },
{ value: "Utah", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Utah-Final.pdf' },
{ value: "Vermont", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Vermont-Final.pdf' },
{ value: "Virginia", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Virginia-Final.pdf' },
{ value: "Washington", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Washington-Final.pdf' },
{ value: "West Virginia", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/West%20Virginia-Final.pdf' },
{ value: "Wisconsin", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Wisconsin-Final.pdf' },
{ value: "Wyoming", url: 'https://www.inta.org/USStateandUnfairCompetitionLaw/Documents/2017/Wyoming-Final.pdf' },


        ],
        select: function (event, ui) {
            window.location = ui.item.url;
        }
    });
});
	</script>