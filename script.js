var start = new Date(2023, 0, 1, 0, 0, 0);

function update_distance(){
    var now = new Date();
    var differencems = Math.abs(start - now);
    var differences = Math.floor(differencems / 1000);
    var distance = Math.floor(1.4 * differences);

    document.getElementById("distanceID").textContent = distance + " m̷̧͇̲͔͉͇̝̣̘̻̲͍̤͇̭̦̝̮̜͓̱̣̓̇̈́͑͗̍͊͘͘ͅͅȩ̶̢̛̘̞͉̻̭͔͍̼̮͕̹̝̰̗̤̥̰͔̤̱̼̝͓͈̟̦̦̗͋̿̅̊̅̅͛̈́͝t̴̢̨̧̯̙̝̩̥͇̣̖̺̤̦̟̘̖̥̟̩̤͉͉͔͚͈̘̹̜͊̌̈́͊̒̐͒̄̽́̏̓̈̒̓̃̾̆̚̚͝͝ͅe̷̡̡̨̲̱̤͉͚͍̥͓͕̿̓͆r̴̢̧̛̛͓͍͚̥̩͉͍̼͕̤͊̀̇̊̀̈́̇̊͆̍̒̽͌̊̑̀͌̍͝s̴̻̻̻̟̰̫̪͔̝͉̪̤̭̺̮̼̹̹͕̺̯͙̊̓͋͋̈́͆͐̔̽̄̑͌̍̓̎́̚͜ travelled since year 2023.";
}

setInterval(update_distance, 1000);

window.onload = function() {
    update_distance();
};