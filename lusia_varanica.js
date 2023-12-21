const { Client } = require("pg");

const clientData = new Client({
  user: "lusia",
  host: "localhost",
  database: "ms-users",
  password: "DemoPassword",
  port: 5432,
});

const arrayWithoutLimits = [
  { inn: "772970525805", limit: 14960 },
  { inn: "3652900232", limit: 3534300 },
  { inn: "614907533466", limit: 86000 },
  { inn: "615003557313", limit: 0 },
  { inn: "2007005587", limit: 77440 },
  { inn: "615000517337", limit: 1202240 },
  { inn: "613300738647", limit: 22940 },
  { inn: "613645260087", limit: 10900 },
  { inn: "613070342408", limit: 27640 },
  { inn: "613303077770", limit: 46900 },
  { inn: "610201615991", limit: 557090 },
];

const arrayWithLimits = [
  { inn: "3662245720", limit: 327130 },
  { inn: "6137010602", limit: 2002660 },
  { inn: "613302060639", limit: 273420 },
  { inn: "612303996796", limit: 476360 },
  { inn: "6163145282", limit: 341380 },
  { inn: "613301492499", limit: 25540 },
  { inn: "6101030806", limit: 0 },
  { inn: "611500741604", limit: 92000 },
  { inn: "613070369914", limit: 29900 },
  { inn: "610400971722", limit: 72790 },
  { inn: "613001354642", limit: 107480 },
  { inn: "613601639311", limit: 123380 },
  { inn: "613301655930", limit: 44620 },
  { inn: "613303631155", limit: 33000 },
  { inn: "610400038971", limit: 619100 },
  { inn: "616100532683", limit: 265310 },
  { inn: "613300676609", limit: 141170 },
  { inn: "612504113560", limit: 515070 },
  { inn: "613000238273", limit: 0 },
  { inn: "613302780362", limit: 16640 },
  { inn: "613300776681", limit: 48680 },
  { inn: "613302918236", limit: 89080 },
];

async function getData() {
  const fullArrayUser = arrayWithoutLimits.concat(arrayWithLimits);
  const innsUsers = fullArrayUser.map((user) => user.inn);
  let queryStart = `select "users"."id" from "users" where "users"."INN" in (`;
  const queryEnd = `)`;

  for (let i = 0; i < innsUsers.length; i += 1) {
    queryStart += `$${i + 1}`;
    if (i + 1 < innsUsers.length) {
      queryStart += ",";
    } else {
      queryStart += queryEnd;
    }
  }

  await clientData.query(queryStart, innsUsers, (err, result) => {
    console.log(err ?? result.rows);
    const data = result.rows.map((row) => row.id);
    console.log(data);
  });
}

async function start() {
  await clientData.connect((err) => {
    if (err) {
      return err;
    }
    console.log("Connected");
  });
}
async function testStart() {
  await start();
  await getData();
}

testStart();
