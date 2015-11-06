# United States States
## Install
`meteor add greggreg:united-states-states`

## Usage
### All State Names sorted Alphabetically
`USS.names`
### All State abbreviations sorted Alphabetically
`USS.abbreviations`
### Get the abbreviation for a single state
`USS.abbreviationFor("california");`<br>
-or-<br>
`USS.ab("california");`
### Get the state name for an abbreviation
`USS.nameFor("ca");`<br>
-or-<br>
`USS.sn("ca");`<br>`
### Note, DC is District of Columbia not Washington DC
`USS.nameFor("dc") === "District of Columbia";`<br>
`USS.abbreviationFor("Washington DC") === undefined;`
### AutoForm Helper
If you are using (AutoForm)[https://github.com/aldeed/meteor-autoform] and
(SimpleSchema)[https://github.com/aldeed/meteor-simple-schema] you can pre-populate
a select like so:
~~~Javascript
LocationSchema = new SimpleSchema({
  state:{
    type: String,
    allowedValues: USS.abbreviations, // Only allow abbreviations in the DB
    autoform: {
      options: USS.autoForm, // Option labels are Names and values ar abbreviations
    },
    defaultValue: "LA" // Easily set a default
});
~~~

## Licence
Public domain, no warranty, etc.
